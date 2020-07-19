/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let i = 0
    let r = s.length - 1
    while (i < r) {
        if (str[i] !== str[r]) {
            return isPali(str, l + 1, r) || isPali(str, l, r - 1)
        }
        i++
        r--
    }
    return true
};

function isPali(str, l, r) {
    while (i < r) {
        if (str[l++] !== str[r--]) {
            return false
        }
    }
    return true
}