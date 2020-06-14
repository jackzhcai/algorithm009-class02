/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let result = 0
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let i = 0,
        j = 0
    while (j < s.length) {
        if (s[j] >= g[i]) {
            result++
            i++
            j++
        } else {
            j++
        }
    }
    return result
};