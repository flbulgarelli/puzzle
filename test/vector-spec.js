require('mocha');
const assert = require('assert');
const {vector, ...Vector} = require('../src/vector');

describe("anchor", () => {
  it("can equal", () => {
    assert.equal(Vector.equal(vector(1, 1), vector(1, 1)), true);
    assert.equal(Vector.equal(vector(1, 1), vector(1, 2)), false);
    assert.equal(Vector.equal(vector(2, 1), vector(1, 1)), false);
  })

  it("can plus", () => {
    assert.deepEqual(Vector.plus(1, 2), vector(3, 3));
    assert.deepEqual(Vector.plus(vector(1, 3), 2), vector(3, 5));
    assert.deepEqual(Vector.plus(2, vector(1, 3)), vector(3, 5));

    assert.deepEqual(Vector.plus(vector(1, 1), vector(1, 1)), vector(2, 2));
    assert.deepEqual(Vector.plus(vector(1, 1), vector(1, 2)), vector(2, 3));
    assert.deepEqual(Vector.plus(vector(2, 1), vector(1, 1)), vector(3, 2));
  })

  it("can minus", () => {
    assert.deepEqual(Vector.minus(1, 2), vector(-1, -1));
    assert.deepEqual(Vector.minus(vector(1, 3), 2), vector(-1, 1));
    assert.deepEqual(Vector.minus(2, vector(1, 3)), vector(1, -1));

    assert.deepEqual(Vector.minus(vector(1, 1), vector(1, 1)), vector(0, 0));
    assert.deepEqual(Vector.minus(vector(1, 1), vector(1, 2)), vector(0, -1));
    assert.deepEqual(Vector.minus(vector(2, 1), vector(1, 1)), vector(1, 0));
  })


  it("can max", () => {
    assert.deepEqual(Vector.max(1, 2), vector(2, 2));
    assert.deepEqual(Vector.max(vector(1, 3), 2), vector(2, 3));
    assert.deepEqual(Vector.max(2, vector(1, 3)), vector(2, 3));

    assert.deepEqual(Vector.max(vector(1, 1), vector(1, 1)), vector(1, 1));
    assert.deepEqual(Vector.max(vector(1, 1), vector(1, 2)), vector(1, 2));
    assert.deepEqual(Vector.max(vector(2, 1), vector(1, 1)), vector(2, 1));
  })

  it("can min", () => {
    assert.deepEqual(Vector.min(1, 2), vector(1, 1));
    assert.deepEqual(Vector.min(vector(1, 3), 2), vector(1, 2));
    assert.deepEqual(Vector.min(2, vector(1, 3)), vector(1, 2));

    assert.deepEqual(Vector.min(vector(1, 1), vector(1, 1)), vector(1, 1));
    assert.deepEqual(Vector.min(vector(1, 1), vector(1, 2)), vector(1, 1));
    assert.deepEqual(Vector.min(vector(2, 1), vector(1, 1)), vector(1, 1));
  })

  it("can inner max", () => {
    assert.deepEqual(Vector.inner.max(vector(1, 1)), 1);
    assert.deepEqual(Vector.inner.max(vector(2, 1)), 2);
    assert.deepEqual(Vector.inner.max(vector(3, 5)), 5);
  })

  it("can inner min", () => {
    assert.deepEqual(Vector.inner.min(vector(1, 1)), 1);
    assert.deepEqual(Vector.inner.min(vector(2, 1)), 1);
    assert.deepEqual(Vector.inner.min(vector(3, 5)), 3);
  })
})
