/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s || s.length < 2) {
        return s
    }
    let start = 0
    let end = 0
    for (let i = 0; i < s.length; i++) {
        let len1 = expandCanter(s, i, i)
        let len2 = expandCanter(s, i, i + 1)
        let len = Math.max(len1, len2)
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2)
        }
    }
    return s.substring(start, end + 1)
};
var expandCanter = function (s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--
        r++
    }
    return r - l - 1
}