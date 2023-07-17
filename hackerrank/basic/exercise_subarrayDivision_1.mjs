"use strict";

main();

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i <= s.length - m; i++) {
    const chocolatePiece = s.slice(i, i + m);

    console.log(chocolatePiece);

    const sum = chocolatePiece.reduce((acc, val) => acc + val);

    if (sum === d) {
      count++;
    }
  }

  return count;
}

function main() {
  const s = [2, 2, 1, 3, 2];
  const d = 4;
  const m = 2;

  const res = birthday(s, d, m);

  console.log(res);
}
