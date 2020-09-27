const subsetSum = require('../index');
const expect = require("chai").expect;


describe("When solutions exist", function() {
    describe("When weights are [6, 4, 2, 6, 4, 3]", function() {
        describe("and capacity is 6", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 6 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 7", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 7 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 8", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 8 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 9", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 9 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 10", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 10 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 11", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 11 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 12", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 12 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 13", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 13 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 14", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 14 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 15", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 15 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 16", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 16 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 17", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 17 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 18", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 18 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 19", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 19 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 20", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 20 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 21", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 21 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 22", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 22 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 23", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 23 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 25", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [6, 4, 2, 6, 4, 3], 
                    capacity: 25 })
                .solutionExists).to.equal(true);
            });
        });
    });
    describe("When weights are [1]", function() {
        describe("and capacity is 1", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [1], 
                    capacity: 1 })
                .solutionExists).to.equal(true);
            });
        });
    });
    describe("When weights are [1, 2, 3]", function() {
        describe("and capacity is 3", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [1, 2, 3], 
                    capacity: 3 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 4", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [1, 2, 3], 
                    capacity: 4 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 5", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [1, 2, 3], 
                    capacity: 5 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 6", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [1, 2, 3], 
                    capacity: 6 })
                .solutionExists).to.equal(true);
            });
        });
    });
    describe("When weights are [5, 2, 39]", function() {
        describe("and capacity is 39", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [5, 2, 39], 
                    capacity: 39 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 41", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [5, 2, 39], 
                    capacity: 41 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 44", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [5, 2, 39], 
                    capacity: 44 })
                .solutionExists).to.equal(true);
            });
        });
        describe("and capacity is 46", function() {
            it("reports that solution exists", function() {
                expect(subsetSum({ 
                    weights: [5, 2, 39], 
                    capacity: 46 })
                .solutionExists).to.equal(true);
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
