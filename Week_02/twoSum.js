/**
 * @description 1. 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 一
    if (!nums.length) {
        return []
    }
    var maps = new Map()
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i]
        if (maps.has(diff)) {
            return [maps.get(diff), i]
        }
        maps.set(nums[i], i)
    }
    return []

    // 二
    // if (!nums.length) {
    //     return []
    // }
    // for (var i = 0; i < nums.length; i++) {
    //     for (var j = i + 1; j < nums.length; j++) {
    //         if (nums[j] === target - nums[i]) {
    //             return [i, j]
    //         }
    //     }
    // }
    // return []
};