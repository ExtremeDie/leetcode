/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// •	Time Complexity:  O(m * n)
// •	Space Complexity:  O(m + n)
var multiply = function (num1, num2) {
	if (num1 == 0 || num2 == 0) return '0';

	const res = new Array(num1.length + num2.length).fill(0);

	num1 = num1.split('').reverse().join('');
	num2 = num2.split('').reverse().join('');
	for (let i = 0; i < num1.length; i++) {
		for (let j = 0; j < num2.length; j++) {
			let sum = Number(num1[i]) * Number(num2[j]);
			res[i + j] += sum;
			res[i + j + 1] += Math.floor(res[i + j] / 10);
			res[i + j] = res[i + j] % 10;
		}
	}

	while (res[res.length - 1] === 0) {
		res.pop();
	}
	return res.reverse().join('');
};
