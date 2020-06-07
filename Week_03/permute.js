/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = []
    let len = nums.length
    helper([])
    return result

    function helper(path) {
        if (path.length === len) {
            result.push(path.slice(0))
            return
        }
        for (var i = 0; i < len; i++) {
            if (path.includes(nums[i])) {
                continue
            }
            path.push(nums[i])
            helper(path)
            path.pop()
        }
    }
};