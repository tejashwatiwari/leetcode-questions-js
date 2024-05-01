/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {

 let index = word.indexOf(ch); // Find the index of the character 'ch' in the word

    if (index !== -1) { // Check if the character 'ch' is found in the word
        let prefix = word.substring(0, index + 1); // Extract the prefix including 'ch'
        let suffix = word.substring(index + 1); // Extract the suffix after 'ch'

        let reversedPrefix = prefix.split('').reverse().join(''); // Reverse the prefix

        return reversedPrefix + suffix; // Concatenate reversed prefix with suffix
    }

    return word;
};