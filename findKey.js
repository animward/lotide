const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const findKey = function(object, callback) {
    for (const key in object) {
        if (callback(object[key])) {
            return key;
        }
    }
    return undefined;
  };




const resturants = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

//test cases

assertEqual(findKey(resturants, x => true), "Blue Hill");

assertEqual(findKey(resturants, x => x.stars === 2), "noma");

assertEqual(findKey(resturants, x => x.stars === 3), "Akaleri");

assertEqual(findKey(resturants, x => x.stars === 4), undefined);

assertEqual(findKey(resturants, x => true), "Blue Hill");