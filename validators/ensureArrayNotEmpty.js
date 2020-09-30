const SubsetSumInputError = require('../errors/SubsetSumInputError');

function ensureArrayNotEmpty(array) {
    if (!(Array.isArray(array) && array.length > 0)) {
        throw new SubsetSumInputError(`Array ${ JSON.stringify(array) } is empty`);
    }
}

module.exports = ensureArrayNotEmpty;