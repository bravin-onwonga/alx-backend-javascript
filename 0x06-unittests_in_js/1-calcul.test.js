'use strict';
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber type == SUM', () => {
  it('checks the output', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, 3.8), 5);
    assert.strictEqual(calculateNumber('SUM', 3.6, 2), 6);
    assert.strictEqual(calculateNumber('SUM', 1.6, 4.5), 7);
    assert.strictEqual(calculateNumber('SUM', 3.5, 1.4), 5);
    assert.strictEqual(calculateNumber('SUM', 0.0, 0), 0);
    assert.strictEqual(calculateNumber('SUM', -2, 2), 0);
    assert.strictEqual(calculateNumber('SUM', 3, -1), 2);
    assert.strictEqual(calculateNumber('SUM', -5, -1), -6);
  });
});

describe('calculateNumber type == SUBTRACT', () => {
  it('checks the output', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 6, 1), 5);
    assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 2.5), -1);
    assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 2), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 5), -5);
    assert.strictEqual(calculateNumber('SUBTRACT', 3, 4.5), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', -1, 1), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', -3.9, 0), -4);
  });
});

describe('calculateNumber type == DIVIDE', () => {
  it('check the output', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 2, 2.5), 0.6666666666666666);
    assert.strictEqual(calculateNumber('DIVIDE', 0.0, 2), 0);
    assert.strictEqual(calculateNumber('DIVIDE', -1, 1), -1);
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
});
