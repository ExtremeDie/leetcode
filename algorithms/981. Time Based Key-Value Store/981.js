var TimeMap = function () {
	this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
	if (!this.map.has(key)) {
		this.map.set(key, []);
	}
	this.map.get(key).push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
	let res = '';

	const values = this.map.get(key) || [];

	let l = 0;
	let r = values.length - 1;
	while (l <= r) {
		const mid = Math.floor((l + r) / 2);

		if (values[mid][1] <= timestamp) {
			res = values[mid][0];
			// * set l to the right, because we want to find any newer timestamp
			l = mid + 1;
		} else {
			r = mid - 1;
		}
	}

	return res;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
