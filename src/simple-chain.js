const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chain: [],
  
  getLength() {
    return this.chain.length;
  },
  
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  
  removeLink(position) {
    if (isNaN(position) || position % 1 || position <= 0 || position >= this.getLength()) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = ''

    this.chain.forEach((item, index) => {
      result += index ? `~~( ${item} )` : `( ${item} )`;
    })
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};