function getSumOfAllElements(array) {
    return array.reduce((currentSum, currentElement) => currentSum + currentElement, 0);
}

module.exports = getSumOfAllElements;