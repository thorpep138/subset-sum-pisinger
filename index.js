const ensureWeightsAndCapacityAreValid = require('./validators/ensureWeightsAndCapacityAreValid');
const getSplitItemAndInitialSolution = require('./util/subsetSum/getSplitItemAndInitialSolution');
const getSolutionForNoSplitItem = require('./util/subsetSum/getSolutionForNoSplitItem');
const setGridValue = require('./util/subsetSum/setGridValue');

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

    for (let b = s; b <= weights.length; b++) {
        for (let w_bar = capacity - w_max + 1; w_bar <= capacity + w_max; w_bar++) {
            setGridValue({ 
                grid: g, 
                primaryIndex: b, 
                secondaryIndex: w_bar, 
                value: g[b-1][w_bar] });
        }

        for (let w_bar = capacity - w_max + 1; w_bar <= capacity; w_bar++) {
            let w_bar_prime = w_bar + weights[b-1];
            setGridValue({ 
                grid: g, 
                primaryIndex: b, 
                secondaryIndex: w_bar_prime, 
                value: Math.max(g[b][w_bar_prime], g[b-1][w_bar]) });
        }

        for (let w_bar = capacity + weights[b-1]; w_bar >= capacity + 1; w_bar--) {
            for (let j = g[b-1][w_bar]; j <= g[b][w_bar] - 1; j++) {
                let w_bar_prime = w_bar - weights[j - 1];
                setGridValue({ 
                    grid: g, 
                    primaryIndex: b, 
                    secondaryIndex: w_bar_prime, 
                    value: Math.max(g[b][w_bar_prime], j) });
            }
        }
    }

    return g[weights.length][capacity] > 0 
        ? { solutionExists: true }
        : { solutionExists: false };
}

module.exports = subsetSum;