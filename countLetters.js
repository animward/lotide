// assertEqual function
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  const countLetters = function(sentance) {
    const letterCounts = {};

    for (const letter of sentance){
        if (letter !== ' ') {
            if (letterCounts[letter]){
                letterCounts[letter] += 1;
            } else {
                letterCounts[letter] = 1;
            }
        }
    }

    return letterCounts;
  };

  const result = countLetters('LHL');
  assertEqual(result['L'], 2);
  assertEqual(result['H'], 1);
  console.log(result);