const getSumOfAllElements = require('../numbers/getSumOfAllElements');

function getSolutionForNoSplitItem({ weights, capacity }) {
    if (getSumOfAllElements(weights) === capacity) {
        return {
            solutionExists: true,
            solution: weights
        };
    } else {
        return {
            solutionExists: false
        }
    }
}

module.exports = getSolutionForNoSplitItem;