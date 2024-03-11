const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TEST CASES
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should pass
assertEqual(eqArrays([], []), true); // Should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // Should pass
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true); // Should pass
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "C"]), false); // Should pass
assertEqual(eqArrays([null, undefined, "hello"], [null, undefined, "hello"]), true); // Should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, undefined]), false); // Should pass
assertEqual(eqArrays(null, [1, 2, 3]), false); // Should pass
