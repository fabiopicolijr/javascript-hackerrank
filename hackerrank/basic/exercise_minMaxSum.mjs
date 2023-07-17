"use strict";

main();

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// My Solution
function miniMaxSum(arr) {
  const miniArr = [...arr].sort();
  const maxArr = [...arr].sort();

  miniArr.pop();
  maxArr.shift();

  let sum = (sumArr) => {
    return sumArr.reduce(function (acc, num) {
      return acc + num;
    });
  };

  console.log(sum(miniArr), sum(maxArr));
}

// Solution CHAT-GPT
function miniMaxSum(arr) {
  const sortedArr = [...arr].sort();

  const sum = sortedArr.reduce((acc, num) => acc + num);
  const minSum = sum - sortedArr[sortedArr.length - 1];
  const maxSum = sum - sortedArr[0];

  console.log(minSum, maxSum);
}

function main() {
  const arr = [5, 5, 5, 4, 1];

  miniMaxSum(arr);
}
