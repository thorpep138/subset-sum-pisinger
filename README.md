# subset-sum-pisinger
Implements Pisinger's 2004 algorithm that provides a linear time, iterative solution to subset sum when input is only positive integers and the target sum is a positive constant C that is greater than or equal to each integer in the set. See https://link.springer.com/chapter/10.1007%2F978-3-540-24777-7_4 

[![npm](https://img.shields.io/npm/dt/subset-sum-pisinger)](https://www.npmjs.com/package/subset-sum-pisinger)

## Contents
- Installation
- Usage
- Testing
- Error Handling

### Installation
```bash
$ npm install subset-sum-pisinger 
```
### Usage 
```javascript
const subsetSum = require('subset-sum-pisinger');
console.log(subsetSum({ 
    weights: [6, 4, 2, 6, 4, 3], 
    capacity: 15 }));
//  { solutionExists: true, solution: [ 6, 4, 2, 3 ] }
console.log(subsetSum({ 
    weights: [6, 4, 2, 6, 4, 3], 
    capacity: 200 }));
// { solutionExists: false, solution: null }
```

### Testing
```bash
$ npm test
```

### Error handling

This module will throw an error on invalid input. 
```javascript
console.log(subsetSum({ 
    weights: [6, 4, 2, 6, 4, 3], 
    capacity: 'invalid' }));
// throw new SubsetSumInputError(`Expected integer value but got 'invalid' instead`);
```

