function isPositiveInteger(value) {
    return /^\d+$/.test(value)
        && typeof value === "number"
        && value > 0;
}

module.exports = isPositiveInteger;