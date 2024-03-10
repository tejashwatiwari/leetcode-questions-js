/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let max = ''
    for (let i = 0; i < number.length; i++) {
        if (number[i] == digit) {
            let temp = number.slice(0, i) + number.slice(i + 1)
            if (temp > max) max = temp
        }
    }
    return max
}