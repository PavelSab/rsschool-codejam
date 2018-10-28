const assert = require('assert');

Object.freeze(assert);

const make = require('../src/make');

describe('make', () => {
  it('1', () => {
    function sum(a, b) { return a + b; }

    const result = make(15)(34, 21, 666)(41)(sum);
    assert.equal(result, 777);
  });

  it('2', () => {
    function sum(a, b) { return a + b; }

    const result = make(4, 7)(56, 7)(81)(sum);
    assert.equal(result, 155);
  });
});
