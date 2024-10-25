const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('checks the output', () => {
    assert.strictEqual(calculateNumber(2, 6), 8);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(0.9, 5.7), 7);
    assert.strictEqual(calculateNumber(3.3, 2), 6);
    assert.strictEqual(calculateNumber(3.4, 0.3), 4);
  });
  it('negative numbers', () => {
    assert.strictEqual(calculateNumber(-3, 3), 0);
    assert.strictEqual(calculateNumber(6, -6), 0);
    assert.strictEqual(calculateNumber(-3, -2), -5);
  });
  it('checks arguments', () => {
    assert.strictEqual(isNaN(calculateNumber(1)), true);
    assert.strictEqual(isNaN(calculateNumber()), true);
  });
});