const {Tab, Slot, None} = require('../src/structure');


/**
 * @type {InsertsGenerator};
 */
function fixed(_n) {
  return Tab;
}

/**
 * Generates slots and tabs alternately
 *
 * @type {InsertsGenerator};
 */
function flipflop(n) {
  return n % 2 === 0 ? Tab : Slot;
}

/**
 * Generates sequences of two slots and then two tabs
 *
 * @type {InsertsGenerator};
 */
function twoAndTwo(n) {
  return n % 4 < 2 ? Tab : Slot;
}

/**
 * Generates tabs and slots in a psuedo-random way
 *
 * @type {InsertsGenerator};
 */
function random(_) {
  return Math.random() < 0.5 ? Tab : Slot;
}

/**
 * A function for generating {@link Insert}s sequentially
 *
 * @callback InsertsGenerator
 * @param {number} index the position of the element to be generated in the sequence
 * @returns {import('./structure').Insert}
 */

/**
 * An InsertSequence is a statefull object that
 * allows to generate {@link Insert}s sequences using an {@link InsertsGenerator} as strategy
 */
class InsertSequence {
  /**
   * @param {InsertsGenerator} generator;
   */
  constructor(generator) {
    this.generator = generator;
    this.n = 0
    this._previous;
    this._current = None;
  }

  /**
   * The previously generated insert
   *
   * @returns {import('./structure').Insert}
   */
  previousComplement() {
    return this._previous.complement();
  }

  /**
   * Answers the last Insert generated by {@link InsertSequence#next}
   *
   * @returns {import('./structure').Insert}
   */
  current(max) {
    if (this.n == max) {
      return None
    }
    return this._current;
  }

  /**
   * @returns {import('./structure').Insert}
   **/
  next() {
    this._previous = this._current;
    this._current = this.generator(this.n++);
    return this._current;
  }
}


/**
 * This module exports several {@link Insert}s sequences strategies: {@link fixed}, {@link flipflop}, {@link twoAndTwo} and {@link random}
 *
 * @module sequence
 */
module.exports = {
  InsertSequence,
  fixed,
  flipflop,
  twoAndTwo,
  random
}
