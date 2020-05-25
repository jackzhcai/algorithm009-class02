/**
 * @description 66. 加一
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
    }
  }
  digits = Array.apply(null, {length: digits.length + 1}).map(() => 0)
  digits[0] = 1
  return digits
};
