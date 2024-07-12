/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let top = x > y ? x : y;
    let bottom = top == x ? y : x;
    let top_word = top == x ? "ab" : "ba";
    let bottom_word = top == x ? "ba" : "ab";

    function helper(str, points, word) {
        let j = 0, score = 0;
        str = str.split("");

        for (let i = 0; i < str.length; i++) {
            str[j] = str[i];
            j++;
            if (j >= 2 && str[j - 1] == word[1] && str[j - 2] == word[0]) {
                score++;
                j -= 2;
                str[j] = str[i];
            }
        }

        str = str.slice(0, j).join("");
        score = score * points;

        return { str, score };
    }

    let first = helper(s, top, top_word);
    let second = helper(first.str, bottom, bottom_word);

    return first.score + second.score;
};