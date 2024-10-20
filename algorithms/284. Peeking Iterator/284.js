/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
	this.itr = iterator;
	this.peeking = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
	if (this.peeking) return this.peeking;
	this.peeking = this.itr.next();
	return this.peeking;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
	if (!this.peeking) return this.itr.next();
	const temp = this.peeking;
	this.peeking = null;
	return temp;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
	if (!this.peeking) return this.itr.hasNext();
	return true;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
