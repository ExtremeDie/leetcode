/**
 * @param {number} key
 * @param {number} val
 */
var Node = function (key, val) {
	this.key = key;
	this.val = val;
	this.prev = null;
	this.next = null;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	this.capacity = capacity;
	this.cache = new Map();

	// left - LRU
	this.left = new Node(0, 0);

	// right - most recent
	this.right = new Node(0, 0);

	this.left.next = this.right;
	this.right.prev = this.left;
};

LRUCache.prototype.remove = function (node) {
	const { prev, next } = node;

	prev.next = next;
	next.prev = prev;
};

LRUCache.prototype.insert = function (node) {
	node.prev = this.right.prev;
	node.next = this.right;
	this.right.prev.next = node;
	this.right.prev = node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	if (this.cache.has(key)) {
		const node = this.cache.get(key);
		this.remove(node);
		this.insert(node);
		return node.val;
	}

	return -1; // key not found
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	if (this.cache.has(key)) {
		this.remove(this.cache.get(key));
	}
	const node = new Node(key, value);
	this.cache.set(key, node);
	this.insert(node);

	if (this.cache.size > this.capacity) {
		const lru = this.left.next;
		this.cache.delete(lru.key);
		this.remove(lru);
	}

	return null;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
