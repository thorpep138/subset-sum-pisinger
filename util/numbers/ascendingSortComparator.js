function ascendingSortComparator(a, b) {
    if (parseInt(a) > parseInt(b)) {
        return 1;
    }
    if (parseInt(b) > parseInt(a)) {
        return -1;
    }
    return 0;
}

module.exports = ascendingSortComparator;