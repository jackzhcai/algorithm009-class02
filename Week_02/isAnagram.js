/**
 * @description 242. 有效的字母异位词
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 一
  if (s.length !== t.length) {
    return false
  }
  while (s.length > 0) {
    if (s.length !== t.length) {
      return false
    }
    var reg = new RegExp(s[0], 'g')
    //
    s = s.replace(reg, '')
    t = t.replace(reg, '')
  }
  if (s !== '' || t !== '') {
    return false
  }
  return true

  // 二
  // if (s.length !== t.length) {
  //   return false
  // }
  // var maps = new Map()
  // for (var i = 0; i < s.length; i++) {
  //   var oStr = s[i]
  //   if (maps.has(oStr)) {
  //     maps.set(oStr, maps.get(oStr) + 1)
  //   } else {
  //     maps.set(oStr, 1)
  //   }
  // }
  // for (var j = 0; j < t.length; j++) {
  //   var tStr = t[j]
  //   if (maps.has(tStr)) {
  //     maps.set(tStr, maps.get(tStr) - 1)
  //     if (maps.get(tStr) === 0) {
  //       maps.delete(tStr)
  //     }
  //   } else {
  //     maps[tStr] = 1
  //   }
  // }
  // if (maps.size) {
  //   return false
  // }
  // return true
};