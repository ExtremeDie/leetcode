/**
 * @param {string} path
 * @return {string}
 */
// time: O(n)
// space: O(n)
var simplifyPath = function (path) {
	const stack = [];
	const directories = path.split('/');

	for (const dir of directories) {
		if (!dir || dir === '.') {
			continue;
		}

		if (dir === '..') {
			if (stack.length > 0) {
				stack.pop();
			}
		} else {
			stack.push(dir);
		}
	}
	return '/' + stack.join('/');
};
