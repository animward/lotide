// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2){
    if (eqArrays(arr1, arr2)) {
    console.log("Assertion Passed: Arrays are equal");
  } else {
    console.log("Assertion Failed: Arrays are not equal");
  }
};

const eqArrays = function(arr1, arr2) {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Check each element for equality
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    return true;
  };

const takeUntil = function (array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
