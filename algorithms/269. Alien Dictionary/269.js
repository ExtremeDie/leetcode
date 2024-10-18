class Solution {
	/**
	 * @param {string[]} words
	 * @returns {string}
	 */
	foreignDictionary(words) {
		const adj = {};

		for (const word of words) {
			for (const char of word) {
				adj[char] = new Set();
			}
		}

		for (let i = 0; i < words.length - 1; i++) {
			let w1 = words[i];
			let w2 = words[i + 1];
			let minLength = Math.min(w1.length, w2.length);
			if (w1.length > w2.length && w1.substring(0, minLength) === w2.substring(0, minLength)) {
				return ''; // invalid solution
			}

			for (let j = 0; j < minLength; j++) {
				if (w1[j] !== w2[j]) {
					adj[w1[j]].add(w2[j]);
					break;
				}
			}
		}

		let visited = {}; // false - not visited, true - visited
		let res = [];
		function dfs(char) {
			if (visited[char] != null) return visited[char];

			visited[char] = true;

			for (const neighbor of adj[char]) {
				if (dfs(neighbor)) return true;
			}

			visited[char] = false;
			res.push(char);

			return false;
		}

		for (const char in adj) {
			if (dfs(char)) return '';
		}
		res.reverse();
		return res.join('');
	}
}
