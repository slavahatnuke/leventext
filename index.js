const {get} = require('fast-levenshtein');

function wordSimilarity(string1, string2) {
    const string1Size = `${string1}`.length;
    const string2Size = `${string2}`.length;

    const size = string1Size > string2Size ? string1Size : string2Size;

    if (!size) {
        return 1;
    }

    const distance = get(string1, string2);
    // console.log({distance, size})

    const similarity = (size - distance) / size;
    return similarity < 0 ? 0 : similarity;
}

function Compare({ngram = 5, separator = null} = {}) {
    return function (string1, string2) {
        return wordSimilarity(string1, string2);
    };
}

module.exports = Compare;