/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return arr[arr.length - 1];
};

const arr = [1, 2, 3];
arr.last(); // 3

console.log(arr.last());
