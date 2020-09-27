const SubsetSumInputError = require('../errors/SubsetSumInputError');

function ensureIsArray(value) {
    if (!Array.isArray(value)) {
        throw new SubsetSumInputError(`Expected an array but got ${ value } instead`);
    }
}

module.exports = ensureIsArray;