/**
 * @description 347. 前 K 个高频元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map()
    for (let i = 0, len = nums.length; i < len; i++) {
        const num = nums[i]
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    const keys = [...map.keys()]
    keys.sort((a, b) => map.get(b) - map.get(a))
    return keys.slice(0, k)
};