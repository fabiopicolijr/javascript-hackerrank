"use strict";

main();

/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

// My solution
// def maxMin(k, arr):
//     # Sort the array in ascending order
//     arr.sort()
//     n=len(arr)
//     xmin=arr[-1]        # Initialise with the maximum value in the array
//     for i in range(n-k+1):
//         # If the difference between elements with distance 'k' is less than minimum, update the minimum
//         if arr[i+k-1]-arr[i]<xmin:
//             xmin=arr[i+k-1]-arr[i]
//     return xmin

function maxMin(k = 0, arr = []) {
  // Write your code here
  // const min = arr.sort((a, b) => a - b)[0];
  // const max = arr.sort((a, b) => b - a)[0];

  arr.sort((a, b) => a - b);
  const size = arr.length;
  let xMin = arr[size - 1];

  for (let i = 0; i < size - k + 1; i++) {
    const min = arr[i + k - 1] - arr[i];
    xMin = Math.min(xMin, min);
  }

  return xMin;
}

function main() {
  const x = 2;
  const y = [1, 2, 3, 4];

  console.log(maxMin(x, y));
}
