// FUNCTION IMPLEMENTATION
const assertEqual = require('../assertEqual');

const eqArrays = function (arr1, arr2) {
  // Check if the arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check each element for equality
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;

      break;
    }
  }

  return true;
};

module.exports = eqArrays;
