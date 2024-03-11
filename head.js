
// Import assertEqual function
const assertEqual = require('./assertEqual');

// Define head
const head = function (array) {
  return array[0];
}

// New cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
