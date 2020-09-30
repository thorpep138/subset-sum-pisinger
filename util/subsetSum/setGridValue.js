function setGridValue({ grid, primaryIndex, secondaryIndex, value, parent }) {
    if (!grid[primaryIndex]) {
        grid[primaryIndex] = {}
    };
    if (!grid[primaryIndex][secondaryIndex]) {
        grid[primaryIndex][secondaryIndex] = {};
    }
    grid[primaryIndex][secondaryIndex].value = value;
    if (parent) {
        grid[primaryIndex][secondaryIndex].parent = {
            primaryIndex: parent.primaryIndex,
            secondaryIndex: parent.secondaryIndex
        }
    }
}

module.exports = setGridValue;