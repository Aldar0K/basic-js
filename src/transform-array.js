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
  console.log(arr);

  if (!Array.isArray(arr)) 
  throw new Error("'arr' parameter must be an instance of the Array!")

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' || arr[i] === '--double-prev') {
      switch (arr[i]) {
        case '--discard-next': arr[i+1] ? i++ : false;
        break;
        case '--double-next': i !== arr.length-1 ? newArr.push(arr[i+1]) : false;
        break;
        case '--discard-prev': arr[i-1] && arr[i-2] !== '--discard-next' ? newArr.pop() : false;
        break;
        case '--double-prev': i !== 0 && arr[i-2] !== '--discard-next' ? newArr.push(arr[i-1]) : false;
        break;
      }
    } else newArr.push(arr[i]);
  }

  console.log(newArr);

  return newArr;
}

