// FUNCTION IMPLEMENTATION
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


const assertArraysEqual = function (arr1, arr2) {
  // Check each element for equality
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal:", arr1, "==", arr2);
  } else {
    console.log("🛑 Arrays are not equal: ", arr1, "!=", arr2);
  }
}


module.exports = assertArraysEqual;

