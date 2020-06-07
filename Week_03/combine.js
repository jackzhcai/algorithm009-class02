/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    var result = []
    var subResult = []
    if (k > n) return result

    function helper(start, subResult) {
        if (subResult.length === k) {
            result.push(subResult.slice(0))
            return
        }
        for (var i = start; i <= n; i++) {
            subResult.push(i)
            helper(i + 1, subResult)
            subResult.pop()
        }
    }
    helper(1, subResult)
    return result
};