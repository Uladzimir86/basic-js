const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    const res = [...this.chain];
    this.chain = [];
    return res.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    const pos = position - 1;
    if (typeof pos !== 'number' || pos < 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(pos, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = [...this.chain];
    this.chain = [];
    return res.join('~~');
  }
};

module.exports = {
  chainMaker
};
