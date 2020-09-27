const subsetSum = require('../index');
const expect = require("chai").expect;


describe("When solution exists", function() {
    it("reports that solution exists", function() {
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 15 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 10 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 9 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 6 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 13 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 18 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 22 })).to.deep.equal({
            solutionExists: true
        });
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 25 }).solutionExists).to.equal(true);
    });
});

describe("When solution does not exist", function() {
    it("reports that solution does not exist", function() {
        expect(subsetSum({ weights: [6, 4, 2, 6, 4, 3], capacity: 200 })).to.deep.equal({
            solutionExists: false
        });
    });
});
