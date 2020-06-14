/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0;
    let ten = 0
    for (let i = 0, len = bills.length; i < len; i++) {
        if (bills[i] === 5) {
            five++
        } else if (bills[i] === 10) {
            if (five === 0) {
                return false
            }
            five--
            ten++
        } else if (bills[i] === 20) {
            if (five > 0 && five > 0) {
                ten--
                five--
            } else if (five >= 3) {
                five -= 3
            } else {
                return false
            }
        }
    }
    return true
};