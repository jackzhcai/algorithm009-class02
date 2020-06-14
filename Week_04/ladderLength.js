/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    let index = wordList.indexOf(beginWord)
    if (index !== -1) {
        wordList.splice(index, 1)
    }
    if (!wordList.length) {
        return 0
    }
    let queue = [beginWord],
        result = 2
    while (!!queue.length) {
        let len = queue.length
        for (let j = 0; j < len; j++) {
            let str = queue.shift()
            for (let i = 0; i < wordList.length; i++) {
                if (diff(str, wordList[i])) {
                    let newStr = wordList.splice(i, 1)[0]
                    i = i - 1
                    if (newStr === endWord) {
                        return result
                    } else {
                        queue.push(newStr)
                    }
                }
            }
        }
        result += 1
    }
    return 0

    function diff(str1, str2) {
        if (str1.length !== str2.length) {
            return false
        }
        let res = 0
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                res += 1
            }
            if (res > 1) {
                return false
            }
        }
        return true
    }
};