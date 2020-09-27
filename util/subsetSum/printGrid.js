function printGrid(grid) {
    Object.keys(grid).sort().forEach((primaryKey) => {
        Object.keys(grid[primaryKey]).sort().forEach((secondaryKey) => {
            console.log(`g(${ primaryKey }, ${ secondaryKey }) = ${ grid[primaryKey][secondaryKey] }`);
        });
    });
}

module.exports = printGrid;