function setGridValue({ grid, primaryIndex, secondaryIndex, value }) {
    if (!grid[primaryIndex]) {
        grid[primaryIndex] = {}
    };
    grid[primaryIndex][secondaryIndex] = value;
}

module.exports = setGridValue;