/**
 * @description 283. 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var n = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      var temp = nums[n]
      nums[n] = nums[i]
      nums[i] = temp
      n++
    }
  }
};
