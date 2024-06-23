/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let word = s.split('');
    let str = ''
    for (let char of word) {
        str += char.toLowerCase()
    }
    return str
};