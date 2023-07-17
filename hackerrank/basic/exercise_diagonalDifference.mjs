"use strict";

main();

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

// My solution
function diagonalDifference(arr) {
  let primary,
    secondary = 0;

  for (let i = 0, n = arr.length - 1; i < arr.length; i++, n--) {
    primary += arr[i][i];
    secondary += arr[i][n];
  }

  return Math.abs(primary - secondary);
}

function main() {
  const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ];

  const res = diagonalDifference(arr);

  console.log(res);
}
