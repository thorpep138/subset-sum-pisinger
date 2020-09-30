function getSolutionForCompletedGrid({ weights, grid, splitItem, capacity }) {
    if (grid[weights.length][capacity].value === 0) {
        return { solutionExists: false, solution: null };
    }

    let inclusionIndices = {};
    let exclusionIndices = {};
    let solution = [];
    
    const firstPrimaryIndex = splitItem - 1;
    let currentPrimaryIndex = weights.length;
    let currentSecondaryIndex = capacity;
    
    while (currentPrimaryIndex > firstPrimaryIndex) {
        let parentNode = grid[currentPrimaryIndex][currentSecondaryIndex].parent;

        if (parentNode) {
            if (parentNode.primaryIndex === currentPrimaryIndex) {
                exclusionIndices[grid[currentPrimaryIndex][currentSecondaryIndex].value - 1] = true;
            } else {
                inclusionIndices[currentPrimaryIndex - 1] = true;
            }
            currentPrimaryIndex = parentNode.primaryIndex;
            currentSecondaryIndex = parentNode.secondaryIndex;
        } else {
            currentPrimaryIndex = currentPrimaryIndex - 1;
        }
    }

    for (let i = 1; i < grid[currentPrimaryIndex][currentSecondaryIndex].value; i++) {
        inclusionIndices[i-1] = true;
    }

    let inclusionIndicesList = Object.keys(inclusionIndices);

    for (let i = 0; i < inclusionIndicesList.length; i++) {
        let currentIndex = inclusionIndicesList[i];
        if (!exclusionIndices[currentIndex]) {
            solution.push(weights[currentIndex]);
        }
    }

    return {
        solutionExists: true,
        solution
    };
}

module.exports = getSolutionForCompletedGrid;