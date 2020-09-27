function getSplitItemAndInitialSolution({ weights, capacity }) {
    let partialSum = 0;
    for (let i = 0; i < weights.length; i++) {
        partialSum += weights[i];
        if (partialSum > capacity) {
            return {
                s: i + 1,
                w_carrot: partialSum - weights[i] 
            };
        }
    }
    
    return {
        s: null,
        w_carrot: null
    }
}

module.exports = getSplitItemAndInitialSolution;