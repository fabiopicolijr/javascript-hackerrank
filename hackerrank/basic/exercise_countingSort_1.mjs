"use strict";

main();

/*
 * Given a list of integers, count and return the number of times each value appears as an array of integers.
 *
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// for (const [index, value] of arr.entries()) {
//   console.log(index, value);
//   counterArray[value]++;
// }

// My solution
function countingSort(arr = []) {
  const counterArray = Array.from({ length: 100 }, () => 0);

  for (const value of arr) {
    counterArray[value]++;
  }

  return counterArray;
}

function main() {
  const arr = [
    63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67,
    99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44,
    3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78,
    24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95,
    33, 46, 44, 9, 69, 48, 33, 0, 0, 0, 0, 67, 61, 32, 21, 79, 75, 75, 13, 87,
    70, 33,
  ];

  const res = countingSort(arr);

  console.log(res);
}
