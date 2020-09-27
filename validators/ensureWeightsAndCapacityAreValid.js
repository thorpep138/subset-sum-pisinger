const ensureIsArray = require('./ensureIsArray');
const ensureArrayNotEmpty = require('./ensureArrayNotEmpty');
const ensureOnlyContainsPositiveIntegers = require('./ensureOnlyContainsPositiveIntegers');
const ensureIsPositiveInteger = require('./ensureIsPositiveInteger');
const ensureNoWeightsGreaterThanCapacity = require('./ensureNoWeightsGreaterThanCapacity');

function ensureWeightsAndCapacityAreValid({ weights, capacity }) {
    ensureIsArray(weights);
    ensureArrayNotEmpty(weights);
    ensureOnlyContainsPositiveIntegers(weights);
    ensureIsPositiveInteger(capacity);
    ensureNoWeightsGreaterThanCapacity({ weights, capacity });
}

module.exports = ensureWeightsAndCapacityAreValid;