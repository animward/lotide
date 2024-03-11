const assert = require('chai').assert;
const tail = require('../tail');

describe('tail', function() {
  it('should return [2, 3] for [1, 2, 3]', function() {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it('should return [] for ["Hello"]', function() {
    assert.deepEqual(tail(["Hello"]), []);
  });
});

