// Time Complexity: O(1)
// Space Complexity:
// O(N), where N is the number of elements in the set.
var RandomizedSet = function () {
	this.map = new Map();
	this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	if (this.map.has(val)) {
		return false;
	}
	this.map.set(val, this.arr.length);
	this.arr.push(val);
	return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
	if (!this.map.has(val)) {
		return false;
	}
	const idx = this.map.get(val);
	const lastArrayValue = this.arr[this.arr.length - 1];

	// move last array value to idx
	this.arr[idx] = lastArrayValue;
	this.map.set(lastArrayValue, idx);

	this.arr.pop();
	this.map.delete(val);
	return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
	const randomIdx = Math.floor(Math.random() * this.arr.length);
	return this.arr[randomIdx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
