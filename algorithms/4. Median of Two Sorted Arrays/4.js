/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	const n1 = nums1.length;
	const n2 = nums2.length;

	if (n1 > n2) {
		return findMedianSortedArrays(nums2, nums1);
	}

	let l = 0;
	let r = n1 - 1;
	const total = n1 + n2;
	const half = Math.floor(total / 2);
	while (true) {
		// true important for list with only 1 element to work
		let mid1 = Math.floor((l + r) / 2);
		let mid2 = half - mid1 - 2; // 2 because both of them zero indexed

		let left1 = mid1 >= 0 ? nums1[mid1] : -Infinity;
		let right1 = mid1 + 1 < n1 ? nums1[mid1 + 1] : Infinity;

		let left2 = mid2 >= 0 ? nums2[mid2] : -Infinity;
		let right2 = mid2 + 1 < n2 ? nums2[mid2 + 1] : Infinity;

		if (left1 <= right2 && left2 <= right1) {
			if (total % 2 === 0) {
				// even
				return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
			} else {
				// odd
				return Math.min(right1, right2);
			}
		} else if (left1 > right2) {
			// reduce size 1
			r = mid1 - 1;
		} else {
			l = mid1 + 1;
		}
	}
};
