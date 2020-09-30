const ensureWeightsAndCapacityAreValid = require('./validators/ensureWeightsAndCapacityAreValid');
const getSplitItemAndInitialSolution = require('./util/subsetSum/getSplitItemAndInitialSolution');
const getSolutionForNoSplitItem = require('./util/subsetSum/getSolutionForNoSplitItem');
const setGridValue = require('./util/subsetSum/setGridValue');
const getSolutionForCompletedGrid = require('./util/subsetSum/getSolutionForCompletedGrid');

function subsetSum({ weights, capacity }) {
    ensureWeightsAndCapacityAreValid({ weights, capacity });
    const w_max = Math.max.apply(null, weights);
    let grid = {};
    const { s, w_carrot } = getSplitItemAndInitialSolution({ weights, capacity });
    if (s === null) {
        return getSolutionForNoSplitItem({ weights, capacity });
    }

    for (let w_bar = capacity - w_max + 1; w_bar <= capacity; w_bar++) {
        setGridValue({ grid, primaryIndex: s - 1, secondaryIndex: w_bar, value: 0 });
    }

    for (let w_bar = capacity + 1; w_bar <= capacity + w_max; w_bar++) {
        setGridValue({ grid, primaryIndex: s - 1, secondaryIndex: w_bar, value: 1 });
    }

    setGridValue({ grid, primaryIndex: s - 1, secondaryIndex: w_carrot, value: s });

    for (let b = s; b <= weights.length; b++) {
        for (let w_bar = capacity - w_max + 1; w_bar <= capacity + w_max; w_bar++) {
            setGridValue({ 
                grid, 
                primaryIndex: b, 
                secondaryIndex: w_bar, 
                value: grid[b-1][w_bar].value });
        }

        for (let w_bar = capacity - w_max + 1; w_bar <= capacity; w_bar++) {
            let w_bar_prime = w_bar + weights[b-1];
            setGridValue({ 
                grid, 
                primaryIndex: b, 
                secondaryIndex: w_bar_prime, 
                value: Math.max(grid[b][w_bar_prime].value, grid[b-1][w_bar].value),
                parent: grid[b-1][w_bar].value > grid[b][w_bar_prime].value 
                    ? { primaryIndex: b - 1, secondaryIndex: w_bar }
                    : undefined
            });
        }

        for (let w_bar = capacity + weights[b-1]; w_bar >= capacity + 1; w_bar--) {
            for (let j = grid[b-1][w_bar].value; j <= grid[b][w_bar].value - 1; j++) {
                let w_bar_prime = w_bar - weights[j - 1];
                setGridValue({ 
                    grid, 
                    primaryIndex: b, 
                    secondaryIndex: w_bar_prime, 
                    value: Math.max(grid[b][w_bar_prime].value, j),
                    parent: j > grid[b][w_bar_prime].value 
                        ? { primaryIndex: b, secondaryIndex: w_bar }
                        : undefined
                });
            }
        }
    }

    return getSolutionForCompletedGrid({ weights, grid, splitItem: s, capacity });
}

module.exports = subsetSum;