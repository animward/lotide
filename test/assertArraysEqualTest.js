const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

assertArraysEqual(array1, array2); // Should pass
assertArraysEqual(array1, array3); // Should fail
