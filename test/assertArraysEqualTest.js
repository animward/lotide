const assertArraysEqual = require('../assertArraysEqual');

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [3, 2, 1];

assertArraysEqual(array1, array2); // Should pass
assertArraysEqual(array1, array3); // Should fail
