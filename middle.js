// TEST/ASSERTION FUNCTIONS
const eqArrays = require('../eqArrays');

const assertArraysEqual = require('../assertArraysEqual');

// ACTUAL FUNCTION
const middle = function (array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
}

module.exports = middle;

// TEST CODE
// Test cases for various scenarios
assertArraysEqual(middle([1]), []); // Should pass
assertArraysEqual(middle([1, 2]), []); // Should pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should pass
