/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var result = 0
  var maxValue = 0
  var maxValueIndex = -1

  for (var i = 0, len = height.length; i < len; i++) {
    if (height[i] > maxValue) {
      maxValue = height[i]
      maxValueIndex = i
    }
  }

  var left = 0

  for (var m = 1; m < maxValueIndex; m++) {
    if (height[m] >= height[left]) {
      left = m
    } else {
      result = result + (height[left] - height[m])
    }
  }
  var right = height.length - 1

  for(var n = right -1; n > maxValueIndex; n--) {
    if (height[n] >= height[right]) {
      right = n
    } else {
      result = result + (height[right] - height[n])
    }
  }

  return result
};
