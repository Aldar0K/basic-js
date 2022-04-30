const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(array) {
    const depths = array
    .filter(item => Array.isArray(item))
    .map(arr => this.calculateDepth(arr));
    return depths.length ? Math.max(...depths) + 1 : 1;
  }
}

module.exports = {
  DepthCalculator
};
