/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    //sorted array copy in descending order of scores
    let sortedArray = [...score].sort((a, b) => b - a);
    const LEN = score.length;
    const answer = [];

    //loop through each element of score array
    for (let idx = 0; idx < LEN; idx++) {
        let scoreVal = score[idx];

        // conditions for rankings
        if (scoreVal === sortedArray[0]) {
            answer[idx] = "Gold Medal";
        } else if (scoreVal === sortedArray[1]) {
            answer[idx] = "Silver Medal";
        } else if (scoreVal === sortedArray[2]) {
            answer[idx] = "Bronze Medal";
        } else {
            // position = index of element in array + 1
            answer[idx] = (sortedArray.indexOf(scoreVal) + 1).toString();
        }
    }

    return answer;
};