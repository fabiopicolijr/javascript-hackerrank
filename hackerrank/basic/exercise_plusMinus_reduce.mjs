"use strict";

main();

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  const length = arr.length;

  // Not the best approach, the "for" solution is clearest.
  const { positive, negative, zero } = arr.reduce(
    (acc, num) => {
      if (num > 0) {
        acc.positive++;
      } else if (num < 0) {
        acc.negative++;
      } else {
        acc.zero++;
      }
      return acc;
    },
    { positive: 0, negative: 0, zero: 0 }
  );

  console.log((positive / length).toFixed(6));
  console.log((negative / length).toFixed(6));
  console.log((zero / length).toFixed(6));
}

function main() {
  const arr = [1, 1, 0, -1, -1];

  plusMinus(arr);
}
