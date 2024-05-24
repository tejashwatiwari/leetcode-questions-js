function maxScoreWords(words, letters, score) {
    // Helper function to calculate the score of a word
    function wordScore(word) {
        let total = 0;
        for (let char of word) {
            total += score[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        return total;
    }

    // Helper function to check if a word can be formed with the given letter count
    function canFormWord(word, letterCount) {
        let count = [...letterCount];
        for (let char of word) {
            if (count[char.charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
                return false;
            }
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }
        return true;
    }

    // Helper function to update the letter count by removing letters used in a word
    function updateLetterCount(word, letterCount, add) {
        for (let char of word) {
            letterCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] += (add ? 1 : -1);
        }
    }

    // Convert letters to a count array
    let letterCount = new Array(26).fill(0);
    for (let char of letters) {
        letterCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Backtracking function to find the maximum score
    function backtrack(index, currentScore) {
        if (index === words.length) {
            return currentScore;
        }

        // Option 1: Skip the current word
        let maxScore = backtrack(index + 1, currentScore);

        // Option 2: Include the current word (if possible)
        let word = words[index];
        if (canFormWord(word, letterCount)) {
            // Update letter count to reflect the letters used
            updateLetterCount(word, letterCount, false);

            // Recurse to the next word with the updated score
            maxScore = Math.max(maxScore, backtrack(index + 1, currentScore + wordScore(word)));

            // Backtrack: restore the letter count
            updateLetterCount(word, letterCount, true);
        }

        return maxScore;
    }

    // Start backtracking from the first word
    return backtrack(0, 0);
}

// Example usage
const words = ["dog", "cat", "dad", "good"];
const letters = ['a', 'a', 'c', 'd', 'd', 'g', 'o', 'o'];
const score = [
    1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

console.log(maxScoreWords(words, letters, score));