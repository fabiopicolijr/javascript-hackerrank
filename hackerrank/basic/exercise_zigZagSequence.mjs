"use strict";

main();

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

// My solution
function pageCount(book, page) {
  let frontward = Math.floor(page / 2);
  let backward = Math.floor((book - page) / 2);

  if (book % 2 === 0 && page % 2 !== 0) {
    backward++;
  }

  return Math.min(frontward, backward);
}

function main() {
  const n = 10;
  const p = 7;

  console.log(pageCount(n, p));
}

// lkrels
