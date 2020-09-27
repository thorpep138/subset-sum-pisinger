const SubsetSumInputError = require('../errors/SubsetSumInputError');
const isPositiveInteger = require('../util/numbers/isPositiveInteger');

function ensureIsPositiveInteger(value) {
    if (!isPositiveInteger(value)) {
        throw new SubsetSumInputError(`Expected integer value but got ${ value } instead`);
    }
}

module.exports = ensureIsPositiveInteger;