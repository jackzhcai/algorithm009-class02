/**
 * @description 49. 字母异位词分组
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = []
    const map = new Map()
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i].split('').sort().join('')
        if (map.has(str)) {
            map.set(str, map.get(str).concat(strs[i]))
        } else {
            map.set(str, [strs[i]])
        }
    }
    map.forEach((item) => {
        result.push(item)
    })
    return result
};