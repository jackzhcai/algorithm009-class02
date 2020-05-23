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
