/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     return s.split("").sort().join("") === t.split("").sort().join("");
// };

var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;
	const count = new Map();
	for (let i of s) {
		count.set(i, (count.get(i) || 0) + 1);
	}
	for (let i of t) {
		count.set(i, (count.get(i) || 0) - 1);
	}

	for (let i of count.values()) {
		if (i !== 0) return false;
	}
	return true;
};

isAnagram('anagram', 'nagaram');
