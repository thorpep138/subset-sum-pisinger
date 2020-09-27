const subsetSum = require('../index');
const expect = require("chai").expect;


describe("When solution exists", function() {
    it("reports that solution exists", function() {
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 25 }).solutionExists).to.equal(true);
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 23 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 22 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 21 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 20 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 19 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 18 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 17 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 16 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 15 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 14 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 13 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 12 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 10 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 8 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 9 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 6 })).to.deep.equal({
            solutionExists: true
        });
    });
});

describe("When solution does not exist", function() {
    it("reports that solution does not exist", function() {
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 24 })).to.deep.equal({
            solutionExists: false
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 26 })).to.deep.equal({
            solutionExists: false
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 27 })).to.deep.equal({
            solutionExists: false
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 28 })).to.deep.equal({
            solutionExists: false
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 29 })).to.deep.equal({
            solutionExists: false
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 30 })).to.deep.equal({
            solutionExists: false
        });
    });
});
