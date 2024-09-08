var MedianFinder = function () {
	this.smallHeap = new MaxPriorityQueue();
	this.bigHeap = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
	this.smallHeap.enqueue(num);

	if (this.smallHeap.size() && this.bigHeap.size() && this.smallHeap.front().element > this.bigHeap.front().element) {
		const val = this.smallHeap.dequeue();
		this.bigHeap.enqueue(val.element);
	}

	if (this.smallHeap.size() > this.bigHeap.size() + 1) {
		const val = this.smallHeap.dequeue();
		this.bigHeap.enqueue(val.element);
	}
	if (this.bigHeap.size() > this.smallHeap.size() + 1) {
		const val = this.bigHeap.dequeue();
		this.smallHeap.enqueue(val.element);
	}
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
	if (this.smallHeap.size() > this.bigHeap.size()) {
		return this.smallHeap.front().element;
	}
	if (this.bigHeap.size() > this.smallHeap.size()) {
		return this.bigHeap.front().element;
	}

	return (this.smallHeap.front().element + this.bigHeap.front().element) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
