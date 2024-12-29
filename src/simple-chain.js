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
    try {
      const pos = position - 1;
      // console.log('this.chain: ', this.chain);
      console.log('pos: ', position);
      if (typeof pos !== 'number' || pos < 0 || position > this.chain.length) throw new Error();
      this.chain.splice(pos, 1);
      return this;
    } catch(e) {
      console.log('e: ', e.message);
      // console.log(111);
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!')
    }
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

// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
// console.log('chainMaker1: ', chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));
// console.log('chainMaker: ', chainMaker.reverseChain().addLink('ABC').reverseChain().reverseChain().reverseChain().addLink(Infinity).addLink(false).addLink(0).addLink('8.963').removeLink(2).removeLink(1).reverseChain().finishChain());

// '( 3rd )~~( function () { } )'
module.exports = {
  chainMaker
};
