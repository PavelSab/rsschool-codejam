const assert = require('assert');

Object.freeze(assert);

const sumOfOther = require('../src/SumOfOther');

describe('sumOfOther', () => {
  it('0', () => {
    const result = sumOfOther([1, 2, 3, 4, 5]);
    assert.deepEqual(result, [14, 13, 12, 11, 10]);
  });

  it('1', () => {
    const result = sumOfOther([5, 5, 5, 5]);
    assert.deepEqual(result, [15, 15, 15, 15]);
  });

  it('2', () => {
    const result = sumOfOther([1, 3]);
    assert.deepEqual(result, [3, 1]);
  });

  it('3', () => {
    const result = sumOfOther([5]);
    assert.deepEqual(result, [0]);
  });
});
