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

module.exports = assertArraysEqual;

