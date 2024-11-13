/**
 * @param {number[][]} board
 * @return {number}
 */
// Time Complexity:
// Best Case: O(N) - When there's a direct path from the starting point to the destination (no ladders or snakes), the BFS will traverse the board linearly, resulting in a time complexity of O(N), where N is the total number of cells on the board.
// Average Case: O(N) - In general, BFS will explore a significant portion of the board, often visiting most cells. This leads to a time complexity of O(N).
// Worst Case: O(N^2) - In the worst case scenario, the BFS might have to explore almost every cell before finding the destination. This could happen if there are many cycles or back-and-forth movements due to ladders and snakes. The worst-case complexity would be O(N^2), where N is the number of cells.

// Space Complexity:
// Worst Case: O(N) - The primary space usage comes from the visited set and the queue. The visited set can store a maximum of N elements (for all cells on the board). The queue could also reach a maximum size of N in the worst case. Therefore, the overall space complexity is O(N).
var snakesAndLadders = function (board) {
	const length = board.length;

	board.reverse(); // to make 0 index at the bottom

	function intToPos(square) {
		let r = Math.floor((square - 1) / length);
		let c = (square - 1) % length;
		if (r % 2) {
			// odd row (different direction)
			c = length - 1 - c;
		}
		return [r, c];
	}

	const q = [];
	q.push([1, 0]); // [square, moves]
	const visited = new Set();

	while (q.length) {
		const [square, moves] = q.shift();

		for (let i = 1; i < 7; i++) {
			nextSquare = square + i;
			const [r, c] = intToPos(nextSquare);
			if (board[r][c] != -1) {
				// snake or ladder
				nextSquare = board[r][c];
			}
			if (nextSquare === length * length) {
				// last position, game ends
				return moves + 1;
			}
			if (!visited.has(nextSquare)) {
				visited.add(nextSquare);
				q.push([nextSquare, moves + 1]);
			}
		}
	}
	return -1;
};
