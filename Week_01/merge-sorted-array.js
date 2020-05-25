/**
 * @description 88. 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var len = m + n
  while(n > 0) {
    if (m <= 0) {
      nums1[--len] = nums2[--n]
      continue
    }
    // 从后侧开始比较两个数组值，把较大值移到后面
    nums1[--len] = (nums1[m - 1] > nums2[n - 1]) ? nums1[--m] : nums2[--n]
  }
};
