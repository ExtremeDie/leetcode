export class Solution {
	/**
	 * @param m: an integer
	 * @param n: an integer
	 * @return: the total number of unlock patterns of the Android lock screen
	 */
	numberOfPatterns(m, n) {
		const skip = new Array(10).fill().map(() => new Array(10).fill(0));
		skip[1][3] = skip[3][1] = 2;
		skip[1][7] = skip[7][1] = 4;
		skip[3][9] = skip[9][3] = 6;
		skip[7][9] = skip[9][7] = 8;
		skip[1][9] = skip[9][1] = 5;
		skip[7][3] = skip[3][7] = 5;
		skip[2][8] = skip[8][2] = 5;
		skip[4][6] = skip[6][4] = 5;

		const visited = new Array(10).fill(false);
		function dfs(i, remaining) {
			if (remaining === 0) {
				return 1;
			}

			visited[i] = true;
			let count = 0;

			for (let next = 1; next <= 9; next++) {
				// Continue if not visited and either no skip point is needed or it's already visited
				if (!visited[next] && (skip[i][next] === 0 || visited[skip[i][next]])) {
					count += dfs(next, remaining - 1);
				}
			}

			visited[i] = false; // backtrack
			return count;
		}

		let totalPatterns = 0;
		// Count patterns starting from each number 1-9 for lengths m to n
		for (let len = m; len <= n; len++) {
			totalPatterns += dfs(1, len - 1) * 4; // Patterns starting from 1, 3, 7, 9
			totalPatterns += dfs(2, len - 1) * 4; // Patterns starting from 2, 4, 6, 8
			totalPatterns += dfs(5, len - 1); // Patterns starting from 5
		}

		return totalPatterns;
	}
}
