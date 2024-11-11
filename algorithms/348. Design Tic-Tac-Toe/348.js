class TicTacToe {
	constructor(n) {
		this.n = n;
		this.rows = Array(n).fill(0);
		this.cols = Array(n).fill(0);
		this.diag = 0;
		this.antiDiag = 0;
	}

	move(row, col, player) {
		let toAdd = player === 1 ? 1 : -1;

		// Update row and column
		this.rows[row] += toAdd;
		this.cols[col] += toAdd;

		// Update diagonal
		if (row === col) {
			this.diag += toAdd;
		}

		// Update anti-diagonal
		if (row + col === this.n - 1) {
			this.antiDiag += toAdd;
		}

		// Check if this move wins the game
		if (Math.abs(this.rows[row]) === this.n || Math.abs(this.cols[col]) === this.n || Math.abs(this.diag) === this.n || Math.abs(this.antiDiag) === this.n) {
			return player;
		}

		// No winner yet
		return 0;
	}
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row, col, player)
 */
let game = new TicTacToe(3);

console.log(game.move(0, 0, 1)); // Player 1 moves at (0, 0), should return 0 (no winner)
console.log(game.move(0, 2, 2)); // Player 2 moves at (0, 2), should return 0 (no winner)
console.log(game.move(2, 2, 1)); // Player 1 moves at (2, 2), should return 0 (no winner)
console.log(game.move(1, 1, 2)); // Player 2 moves at (1, 1), should return 0 (no winner)
console.log(game.move(2, 0, 1)); // Player 1 moves at (2, 0), should return 0 (no winner)
console.log(game.move(1, 0, 2)); // Player 2 moves at (1, 0), should return 0 (no winner)
console.log(game.move(2, 1, 1)); // Player 1 moves at (2, 1), should return 1 (Player 1 wins)
