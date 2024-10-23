/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	const romanNumerals = {
		1: 'I',
		4: 'IV',
		5: 'V',
		9: 'IX',
		10: 'X',
		40: 'XL',
		50: 'L',
		90: 'XC',
		100: 'C',
		400: 'CD',
		500: 'D',
		900: 'CM',
		1000: 'M',
	};

	let res = '';
	for (const [n, sym] of Object.entries(romanNumerals).reverse()) {
		const count = Math.floor(num / n);
		if (count > 0) {
			res += sym.repeat(count);
			num = num % n;
		}
	}

	return res;
};

let num = 3749;
const res = intToRoman(num);
console.log('🚀 ~ res:', res);
