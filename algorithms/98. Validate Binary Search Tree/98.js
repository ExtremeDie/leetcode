/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
	return isValid(root, -Infinity, Infinity);
};

var isValid = function (node, minimum, maximum) {
	if (!node) return true;

	if (!(node.val > minimum && node.val < maximum)) return false;
	return isValid(node.left, minimum, node.val) && isValid(node.right, node.val, maximum);
};
