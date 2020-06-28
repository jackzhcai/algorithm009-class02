/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    var len = nums.length
    var rightmost = 0
    for (var i = 0; i < len; i++) {
        if (i <= rightmost) {
            rightmost = Math.max(rightmost, nums[i] + i)
            if (rightmost >= len - 1) {
                return true
            }
        }
    }
    return false
};