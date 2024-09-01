var TrieNode = function () {
	this.children = {};
	this.isWord = false;

	this.addWord = (word) => {
		let curr = this;
		for (const c of word) {
			if (!curr.children[c]) {
				curr.children[c] = new TrieNode();
			}
			curr = curr.children[c];
		}
		curr.isWord = true;
	};
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
	const root = new TrieNode();
	for (const word of words) {
		root.addWord(word);
	}
	const rows = board.length;
	const columns = board[0].length;

	const res = new Set();
	const visited = new Set();

	const dfs = (r, c, node, word) => {
		if (r < 0 || c < 0 || r >= rows || c >= columns) return;

		const char = board[r][c];
		if (!node.children[char]) return;

		const visitedString = `${r} ${c}`;
		if (visited.has(visitedString)) return;

		visited.add(visitedString);
		node = node.children[char];
		word += char;
		if (node.isWord) {
			res.add(word);
		}

		dfs(r - 1, c, node, word);
		dfs(r + 1, c, node, word);
		dfs(r, c - 1, node, word);
		dfs(r, c + 1, node, word);

		visited.delete(visitedString);
	};

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < columns; c++) {
			dfs(r, c, root, '');
		}
	}
	return Array.from(res);
};
