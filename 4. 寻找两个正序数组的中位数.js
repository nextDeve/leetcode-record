/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let length = nums1.length + nums2.length;
    console.log(length / 2, 1 + length / 2);
    if (length % 2 !== 0) return findMinK(nums1, nums2, Math.floor(length / 2) + 1);
    else return (findMinK(nums1, nums2, length / 2) + findMinK(nums1, nums2, 1 + length / 2)) / 2
};
function findMinK(nums1, nums2, k) {
    let k1, k2, half;
    k1 = k2 = 0;
    while (true) {
        if (nums1.length === k1) {
            return nums2[k2 + k - 1];
        }
        if (nums2.length === k2) {
            return nums1[k1 + k - 1];
        }
        if (k === 1) {
            return Math.min(nums1[k1], nums2[k2])
        }
        half = Math.floor(k / 2)
        let newK1 = Math.min(k1 + half, nums1.length) - 1;
        let newK2 = Math.min(k2 + half, nums2.length) - 1;
        if (nums1[newK1] <= nums2[newK2]) {
            k -= newK1 - k1 + 1;
            k1 = newK1 + 1;
        } else {
            k -= newK2 - k2 + 1;
            k2 = newK2 + 1;
        }
    }
}
