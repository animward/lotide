const assertEqual = require('../assertEqual');
const tail = require('../tail');

// New cases
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[0], "Lighthouse");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

assertEqual(tail(["Solo"]).length, 0);

