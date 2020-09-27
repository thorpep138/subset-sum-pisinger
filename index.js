const ensureWeightsAndCapacityAreValid = require('./validators/ensureWeightsAndCapacityAreValid');
const getSplitItemAndInitialSolution = require('./util/subsetSum/getSplitItemAndInitialSolution');
const getSolutionForNoSplitItem = require('./util/subsetSum/getSolutionForNoSplitItem');
const setGridValue = require('./util/subsetSum/setGridValue');
const printGrid = require('./util/subsetSum/printGrid');

function subsetSum({ weights, capacity }) {
    ensureWeightsAndCapacityAreValid({ weights, capacity });
    const w_max = Math.max.apply(null, weights);
    let g = {};
    const { s, w_carrot } = getSplitItemAndInitialSolution({ weights, capacity });
    if (s === null) {
        return getSolutionForNoSplitItem({ weights, capacity });
    }

    for (let w_bar = capacity - w_max + 1; w_bar <= capacity; w_bar++) {
        setGridValue({ grid: g, primaryIndex: s - 1, secondaryIndex: w_bar, value: 0 });
    }

    for (let w_bar = capacity + 1; w_bar <= capacity + w_max; w_bar++) {
        setGridValue({ grid: g, primaryIndex: s - 1, secondaryIndex: w_bar, value: 1 });
    }

    setGridValue({ grid: g, primaryIndex: s - 1, secondaryIndex: w_carrot, value: s });

    printGrid(g);
}

subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 15 });

module.exports = subsetSum;