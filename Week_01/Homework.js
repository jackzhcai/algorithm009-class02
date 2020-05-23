/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var len = nums.length
  var n = 0
  if (len === 0) {
    return n
  }
  for (var i = 1; i < len; i++) {
    if (nums[n] !== nums[i]) {
      n = n + 1
      if (nums[n] !== nums[i]) {
        nums[n] = nums[i]
      }
    }
  }
  nums.length = n + 1
  return n + 1
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var prehead = new ListNode(-1)
  var prev = prehead
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = l1 === null ? l2 : l1
  return prehead.next
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let length = m + n
  while(n > 0) {
    if(m <= 0) {
      nums1[--length] = nums2[--n]
      continue
    }
    nums1[--length] = (nums1[m-1] >= nums2[n-1]) ? nums1[--m]: nums2[--n]
    debugger
  }
};
