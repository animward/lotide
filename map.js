const assertArraysEqual = function (arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
        console.log("Assertion Passed: Arrays are equal");
    } else {
        console.log("Assertion Failed: Arrays are not equal");
    }
};

const eqArrays = function (arr1, arr2) {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Check each element for equality
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
            // Use break to exit the loop when an unequal pair is found
            break;
        }
    }

    return true;
};

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results
}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [3, 2, 1];

assertArraysEqual(array1, array2); // Should pass
assertArraysEqual(array1, array3); // Should fail



//map scenarios
const array4 = [4, 5, 6];
const result1 = map(array4,  num => num);
assertArraysEqual(result1, array4);

const array5 = [1, 2, 3];
const result2 = map(array5,  num => num * 2);
assertArraysEqual(result1, [2, 4, 6]);

const array6 = ["apple", "orange", "banana"];
const result3 = map(array6, fruit => fruit.length);
assertArraysEqual(result3, [5, 6, 6]);