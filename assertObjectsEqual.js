const eqArrays = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};

// eqObjects function (copied from previous exercise)
const eqObjects = function (object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
            if (!eqArrays(object1[key], object2[key])) {
                return false;
            }
        } else {
            if (object1[key] !== object2[key]) {
                return false;
            }
        }
    }

    return true;
};

// assertObjectsEqual function without inspect
const assertObjectsEqual = function (actual, expected) {
    const stringifyObject = (obj) => {
        const keys = Object.keys(obj);
        const values = keys.map(key => `${key}:${obj[key]}`);
        return `{ ${values.join(', ')} }`;
    };

    if (eqObjects(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${stringifyObject(actual)} === ${stringifyObject(expected)}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${stringifyObject(actual)} !== ${stringifyObject(expected)}`);
    }
};

// Example usage
const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
assertObjectsEqual(obj1, obj2);