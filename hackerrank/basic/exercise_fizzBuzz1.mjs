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
function fizzBuzz(n) {
  // Write your code here

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

  return;
}

function main() {
  const n = 15;

  fizzBuzz(n);
}

// lkrels
