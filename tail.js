// Import assertEqual function
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  // Define head
const tail = function(array) {
    if (array.length <= 1) {
        return [];
    }
    return array.slice(1);
};

// New cases
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[0], "Lighthouse");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

assertEqual(tail(["Solo"]).length, 0);
