const SubsetSumInputError = require('../errors/SubsetSumInputError');
const isPositiveInteger = require('../util/numbers/isPositiveInteger');

function ensureOnlyContainsPositiveIntegers(array) {
    array.forEach((element) => {
        if (!isPositiveInteger(element)) {
            throw new SubsetSumInputError("Input array contains invalid elements.");
        }
    });
}

module.exports = ensureOnlyContainsPositiveIntegers;