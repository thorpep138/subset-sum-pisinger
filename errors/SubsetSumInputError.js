function SubsetSumInputError(message) {
    this.name = 'SubsetSumInputError';
    this.message = message;
    this.stack = (new Error()).stack;
};

SubsetSumInputError.prototype.toString = function() {
    return `${ this.name }: ${ this.message }`;
}

module.exports = SubsetSumInputError;