const subsetSum = require('../index');
const SubsetSumInputError = require('../errors/SubsetSumInputError');
const expect = require("chai").expect;

describe("When solutions exist", function() {
    describe("When weights are [6, 4, 2, 6, 4, 3]", function() {
        describe("and capacity is 6", function() {
            it("reports that solution exists along with solution vector [6]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 6 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6]
                    });
            });
        });
        describe("and capacity is 7", function() {
            it("reports that solution exists along with solution vector [4, 3]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 7 })).to.deep.equal({
                        solutionExists: true,
                        solution: [4, 3]
                    });
            });
        });
        describe("and capacity is 8", function() {
            it("reports that solution exists along with solution vector [6, 2]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 8 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 2]
                    });
            });
        });
        describe("and capacity is 9", function() {
            it("reports that solution exists along with solution vector [6, 3]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 9 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 3]
                    });
            });
        });
        describe("and capacity is 10", function() {
            it("reports that solution exists along with solution vector [6, 4]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 10 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4]
                    });
            });
        });
        describe("and capacity is 11", function() {
            it("reports that solution exists along with solution vector [6, 2, 3]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 11 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 2, 3]
                    });
            });
        });
        describe("and capacity is 12", function() {
            it("reports that solution exists along with solution vector [6, 4, 2]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 12 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4, 2]
                    });
            });
        });
        describe("and capacity is 13", function() {
            it("reports that solution exists along with solution vector [6, 4, 3]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 13 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4, 3]
                    });
            });
        });
        describe("and capacity is 14", function() {
            it("reports that solution exists along with solution vector [6, 4, 4]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 14 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4, 4]
                    });
            });
        });
        describe("and capacity is 15", function() {
            it("reports that solution exists along with solution vector [6, 4, 2, 3]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 15 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4, 2, 3]
                    });
            });
        });
        describe("and capacity is 16", function() {
            it("reports that solution exists along with solution vector [6, 4, 2, 4]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 16 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4, 2, 4]
                    });
            });
        });
        describe("and capacity is 17", function() {
            it("reports that solution exists along with solution vector [6, 4, 4, 3]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 17 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4, 4, 3]
                    });
            });
        });
        describe("and capacity is 18", function() {
            it("reports that solution exists along with solution vector [6, 4, 2, 6]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 18 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4, 2, 6]
                    });
            });
        });
        describe("and capacity is 19", function() {
            it("reports that solution exists along with solution vector [6, 4, 2, 4, 3]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 19 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4, 2, 4, 3]
                    });
            });
        });
        describe("and capacity is 20", function() {
            it("reports that solution exists along with solution vector [6, 4, 6, 4]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 20 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4, 6, 4]
                    });
            });
        });
        describe("and capacity is 21", function() {
            it("reports that solution exists along with solution vector [6, 4, 2, 6, 3]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 21 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4, 2, 6, 3]
                    });
            });
        });
        describe("and capacity is 22", function() {
            it("reports that solution exists along with solution vector [6, 4, 2, 6, 4]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 22 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4, 2, 6, 4]
                    });
            });
        });
        describe("and capacity is 23", function() {
            it("reports that solution exists along with solution vector [6, 4, 6, 4, 3]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 23 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4, 6, 4, 3]
                    });
            });
        });
        describe("and capacity is 25", function() {
            it("reports that solution exists along with solution vector [6, 4, 2, 6, 4, 3]", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 25 })).to.deep.equal({
                        solutionExists: true,
                        solution: [6, 4, 2, 6, 4, 3]
                    });
            });
        });
    });
    describe("When weights are [1]", function() {
        describe("and capacity is 1", function() {
            it("reports that solution exists along with solution vector [1]", function() {
                expect(subsetSum({ 
                    weights: [1], 
                    capacity: 1 })).to.deep.equal({
                        solutionExists: true,
                        solution: [1]
                    });
            });
        });
    });
    describe("When weights are [1, 2, 3]", function() {
        describe("and capacity is 3", function() {
            it("reports that solution exists along with solution vector [1, 2]", function() {
                expect(subsetSum({ 
                    weights: [1, 2, 3], 
                    capacity: 3 })).to.deep.equal({
                        solutionExists: true,
                        solution: [1, 2]
                    });
            });
        });
        describe("and capacity is 4", function() {
            it("reports that solution exists along with solution vector [1, 3]", function() {
                expect(subsetSum({ 
                    weights: [1, 2, 3], 
                    capacity: 4 })).to.deep.equal({
                        solutionExists: true,
                        solution: [1, 3]
                    });
            });
        });
        describe("and capacity is 5", function() {
            it("reports that solution exists along with solution vector [2, 3]", function() {
                expect(subsetSum({ 
                    weights: [1, 2, 3], 
                    capacity: 5 })).to.deep.equal({
                        solutionExists: true,
                        solution: [2, 3]
                    });
            });
        });
        describe("and capacity is 6", function() {
            it("reports that solution exists along with solution vector [1, 2, 3]", function() {
                expect(subsetSum({ 
                    weights: [1, 2, 3], 
                    capacity: 6 })).to.deep.equal({
                        solutionExists: true,
                        solution: [1, 2, 3]
                    });
            });
        });
    });
    describe("When weights are [5, 2, 39]", function() {
        describe("and capacity is 39", function() {
            it("reports that solution exists along with solution vector [39]", function() {
                expect(subsetSum({ 
                    weights: [5, 2, 39], 
                    capacity: 39 })).to.deep.equal({
                        solutionExists: true,
                        solution: [39]
                    });
            });
        });
        describe("and capacity is 41", function() {
            it("reports that solution exists along with solution vector [2, 39]", function() {
                expect(subsetSum({ 
                    weights: [5, 2, 39], 
                    capacity: 41 })).to.deep.equal({
                        solutionExists: true,
                        solution: [2, 39]
                    });
            });
        });
        describe("and capacity is 44", function() {
            it("reports that solution exists along with solution vector [5, 39]", function() {
                expect(subsetSum({ 
                    weights: [5, 2, 39], 
                    capacity: 44 })).to.deep.equal({
                        solutionExists: true,
                        solution: [5, 39]
                    });
            });
        });
        describe("and capacity is 46", function() {
            it("reports that solution exists along with solution vector [5, 2, 39]", function() {
                expect(subsetSum({ 
                    weights: [5, 2, 39], 
                    capacity: 46 })).to.deep.equal({
                        solutionExists: true,
                        solution: [5, 2, 39]
                    });
            });
        });
    });
});

describe("When solution does not exist", function() {
    describe("When weights are [6, 4, 2, 6, 4, 3]", function() {
        describe("and capacity is 24", function() {
            it("reports that solution does not exist", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 24 })
                .solutionExists).to.equal(false);
            });
        });
        describe("and capacity is 26", function() {
            it("reports that solution does not exist", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 26 })
                .solutionExists).to.equal(false);
            });
        });
        describe("and capacity is 27", function() {
            it("reports that solution does not exist", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 27 })
                .solutionExists).to.equal(false);
            });
        });
        describe("and capacity is 28", function() {
            it("reports that solution does not exist", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 28 })
                .solutionExists).to.equal(false);
            });
        });
        describe("and capacity is 29", function() {
            it("reports that solution does not exist", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 29 })
                .solutionExists).to.equal(false);
            });
        });
        describe("and capacity is 30", function() {
            it("reports that solution does not exist", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 30 })
                .solutionExists).to.equal(false);
            });
        });
    });
    describe("When weights are [1]", function() {
        describe("and capacity is 2", function() {
            it("reports that solution does not exist", function() {
                expect(subsetSum({ 
                    weights: [1], 
                    capacity: 2 })
                .solutionExists).to.equal(false);
            });
        });
    });
    describe("When weights are [5, 2, 39]", function() {
        describe("and capacity is 40", function() {
            it("reports that solution does not exist", function() {
                expect(subsetSum({ 
                    weights: [5, 2, 39], 
                    capacity: 40 })
                .solutionExists).to.equal(false);
            });
        });
        describe("and capacity is 42", function() {
            it("reports that solution does not exist", function() {
                expect(subsetSum({ 
                    weights: [5, 2, 39], 
                    capacity: 42 })
                .solutionExists).to.equal(false);
            });
        });
        describe("and capacity is 43", function() {
            it("reports that solution does not exist", function() {
                expect(subsetSum({ 
                    weights: [5, 2, 39], 
                    capacity: 43 })
                .solutionExists).to.equal(false);
            });
        });
    });
});

describe("When input is invalid exist", function() {
    describe("When weights are [1, -2, 3] and capacity is 4", function() {
        it("throws subset sum input error: Input array contains invalid elements", function() {
            expect(() => subsetSum({ 
                weights: [1, -2, 3],
                capacity: 4 })).to
                .throw("Input array contains invalid elements")
                .and.be.an.instanceof(SubsetSumInputError);
        });
    });

    describe("When weights are [1, 0, 3] and capacity is 4", function() {
        it("throws subset sum input error: Input array contains invalid elements", function() {
            expect(() => subsetSum({ 
                weights: [1, 0, 3],
                capacity: 4 })).to
                .throw("Input array contains invalid elements")
                .and.be.an.instanceof(SubsetSumInputError);
        });
    });

    describe("When weights are [1, 'b', 2] and capacity is 2", function() {
        it("throws subset sum input error: Input array contains invalid elements", function() {
            expect(() => subsetSum({ 
                weights: [1, 'b', 2],
                capacity: 2 })).to
                .throw("Input array contains invalid elements")
                .and.be.an.instanceof(SubsetSumInputError);
        });
    });

    describe("When weights are [1, 2, 2] and capacity is 1", function() {
        it("throws subset sum input error: Weight 2 exceeds the capacity", function() {
            expect(() => subsetSum({ 
                weights: [1, 2, 2],
                capacity: 1 })).to
                .throw("Weight 2 exceeds the capacity")
                .and.be.an.instanceof(SubsetSumInputError);
        });
    });

    describe("When weights are [1, 2, 2] and capacity is 'a'", function() {
        it("throws subset sum input error: Weight 2 exceeds the capacity", function() {
            expect(() => subsetSum({ 
                weights: [1, 2, 2],
                capacity: 'a' })).to
                .throw("Expected integer value but got a instead")
                .and.be.an.instanceof(SubsetSumInputError);
        });
    });
});