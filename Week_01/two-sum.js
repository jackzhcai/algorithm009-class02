/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var maps = {}
  for (var i = 0, len = nums.length; i < len; i++) {
    var diff = target - nums[i]
    if (maps[diff] !== undefined) {
      return [maps[diff], i]
    }
    maps[nums[i]] = i
  }
  return []
};
