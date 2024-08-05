/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams1 = function (strs) {
	const map = new Map(); // sorted str -> ans index
	const result = [];

	for (const str of strs) {
		const sortedStr = str.split('').sort().join('');
		if (map.has(sortedStr)) {
			result[map.get(sortedStr)].push(str);
		} else {
			map.set(sortedStr, result.length);
			result.push([str]);
		}
	}
	return result;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	const result = [];
	const group = new Map();

	for (const str of strs) {
		const signature = getSignature(str);
		if (!group.has(signature)) {
			group.set(signature, []);
		}
		group.get(signature).push(str);
	}

	group.forEach((e) => result.push(e));
	return result;
};

const getSignature = (str) => {
	const count = Array(26).fill(0);
	for (const char of str) {
		count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
	}
	return count.toString(); // cannot use count.join('') because string could be the same
};
