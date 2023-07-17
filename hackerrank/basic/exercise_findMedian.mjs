"use strict";

main();

/*
 * FizzBuzz
 * of integers representing the color of each sock, determine how many pairs of
 * socks with matching colors there are.
 *
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

// My solution
function findMedian(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  const median = arr[(arr.length + 1) / 2 - 1];

  return median;
}

function main() {
  const arr = [5, 3, 1, 2, 4, 10, 20];

  console.log(findMedian(arr));
}
