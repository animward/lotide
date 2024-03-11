// FUNCTION IMPLEMENTATION
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


const assertArraysEqual = function (arr1, arr2) {
  // Check each element for equality
  if (eqArrays(arr1, arr2)) {
    assertEqual(true, true);
  } else {
    assertEqual(false, true);
  }
}


module.exports = assertArraysEqual;

