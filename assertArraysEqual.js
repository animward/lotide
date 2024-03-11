// FUNCTION IMPLEMENTATION
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


const assertArraysEqual = function (arr1, arr2) {
  // Check each element for equality
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
      // Use break to exit the loop when an unequal pair is found
      break;
    }
  }

  return true;
}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [3, 2, 1];

module.exports = assertArraysEqual;

assertArraysEqual(array1, array2); // Should pass
assertArraysEqual(array1, array3); // Should fail
