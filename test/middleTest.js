const assert = require('chai').assert;
const middle = require('../middle');

describe('middle', function() {
  it('should return [2] for [1, 2, 3]', function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('should return [2, 3] for [1, 2, 3, 4]', function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('should return [] for ["Hello"]', function() {
    assert.deepEqual(middle(["Hello"]), []);
  });
});
