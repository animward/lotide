// Import assertEqual function
const assertEqual = require('./assertEqual');

// Define head
const tail = function (array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

module.exports = tail;
