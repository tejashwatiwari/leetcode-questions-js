/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
      dictionary.sort()
    const words = sentence.split(" ")
    return words.map((word) => {
        for (let root of dictionary) {
            if (word.startsWith(root)) {
                return root
            }
        }
        return word
    }).join(" ")
};
