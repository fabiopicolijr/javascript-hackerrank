"use strict";

main();

/*
 * There is a large pile of socks that must be paired by color. Given an array
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
function sockMerchant(n = 0, ar = []) {
  let counter = 0;
  let arOrdered = [...ar].sort();

  for (var i = 0; i < arOrdered.length; i++) {
    if (arOrdered[i] === arOrdered[i + 1]) {
      counter++;
      i++;
    }
  }

  return counter;
}

function main() {
  const n = 7;
  const ar = [1, 2, 1, 2, 1, 3, 2];

  console.log(sockMerchant(n, ar));
}

// lkrels
