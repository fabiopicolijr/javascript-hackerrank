"use strict";

main();

/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n = Towers
 *  2. INTEGER m = Towers Height
 */

// My solution
function towerBreakers(towers, towersHeight) {
  // Write your code here

  return towersHeight === 1 || towers % 2 === 0 ? 2 : 1;
}

function main() {
  const n = 6;
  const m = 2;

  console.log(towerBreakers(n, m));
}

// lkrels
