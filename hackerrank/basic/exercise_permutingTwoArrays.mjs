"use strict";

main();

/*
 * Complete the twoArrays function in the editor below. It should return a string, either YES or NO.
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

// for (const [index, value] of arr.entries()) {
//   console.log(index, value);
//   counterArray[value]++;
// }

// My solution
function twoArrays(k = 0, A = [], B = []) {
  const sortedA = [...A].sort((a, b) => a - b); // order the array minor to major
  const sortedB = [...B].sort((a, b) => b - a); // order the array major to minor

  for (let i = 0; i < A.length; i++) {
    if (sortedA[i] + sortedB[i] < k) {
      return "NO";
    }
  }

  return "YES";
}

function main() {
  const k = 3; // relation variable 5
  const A = [2, 3, 1];
  const B = [3, 1, 2];

  const res = twoArrays(k, A, B);

  console.log(res);
}
