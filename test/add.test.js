const test = require('node:test');
const assert = require('node:assert/strict');

const { add } = require('../index');

test('add sums two numbers', () => {
    assert.equal(add(1, 1), 2);
    assert.equal(add(-2, 3), 1);
    assert.equal(add(0, 0), 0);
});
