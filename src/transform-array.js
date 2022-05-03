const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
module.exports = {
  transform
};

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  
  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' || arr[i] === '--double-prev') {
        switch (arr[i]) {
        case '--discard-next': arr[i+1] ? i++ : false;
        break;
        case '--double-next': arr[i+1] ? resultArr.push(arr[i+1]) : false;
        break;
        case '--discard-prev': arr[i-1] && arr[i-2] !== '--discard-next' ? resultArr.pop() : false;
        break;
        case '--double-prev': arr[i-1] && arr[i-2] !== '--discard-next' ? resultArr.push(arr[i-1]) : false;
        break;
      }
    } else resultArr.push(arr[i]);
  }
  
  return resultArr;
}

