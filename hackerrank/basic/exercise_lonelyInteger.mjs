"use strict";

main();

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 *
 * Given an array of integers, where all elements but one occur twice, find the unique element.
 *
 */

// My solution
function lonelyinteger(arr) {
  const elementCounts = {};

  for (var i = 0; i < arr.length; i++) {
    const element = arr[i];

    // ! Important: working with objects
    elementCounts[element] = (elementCounts[element] || 0) + 1;
  }

  console.log(elementCounts);

  for (const element in elementCounts) {
    if (elementCounts[element] === 1) {
      return parseInt(element);
    }
  }
}

function main() {
  const arr = [1, 2, 3, 10, 3, 2, 1];

  const res = lonelyinteger(arr);

  //console.log(res);
}
