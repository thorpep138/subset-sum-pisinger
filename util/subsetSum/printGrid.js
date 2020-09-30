const ascendingSortComparator = require('../numbers/ascendingSortComparator');

function printGrid(grid) {
    Object.keys(grid).sort(ascendingSortComparator).forEach((primaryIndex) => {
        Object.keys(grid[primaryIndex]).sort(ascendingSortComparator).forEach((secondaryIndex) => {
            console.log(
                `g(${ primaryIndex }, ${ secondaryIndex }) = `
                + grid[primaryIndex][secondaryIndex].value
                + (grid[primaryIndex][secondaryIndex].parent
                    ? `, p -> (${ grid[primaryIndex][secondaryIndex].parent.primaryIndex }, `
                        + `${ grid[primaryIndex][secondaryIndex].parent.secondaryIndex })`
                    : ``));
        });
    });
}

module.exports = printGrid;