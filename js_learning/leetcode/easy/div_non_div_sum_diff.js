/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let num1 = 0;
  let num2 = 0;

  for (let step = 1; step < n + 1; step++) {
    if (step % m == 0) {
      num2 += step;
    } else {
      num1 += step;
    }
  }
  return num1 - num2;
};

console.log(differenceOfSums(10, 3));
