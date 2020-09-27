const SubsetSumInputError = require('../errors/SubsetSumInputError');

function ensureNoWeightsGreaterThanCapacity({ weights, capacity }) {
    weights.forEach((weight) => {
        if (weight > capacity) {
            throw new SubsetSumInputError(`Weight ${ weight } exceeds the capacity`);
        }
    });
}

module.exports = ensureNoWeightsGreaterThanCapacity;