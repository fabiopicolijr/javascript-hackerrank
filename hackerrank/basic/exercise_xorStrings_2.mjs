"use strict";

main();

/*
 * Given two strings consisting of digits 0 and 1 only, find the XOR of the
 * two strings.
 *
 * The input consists of two lines. The first line of the input contains the
 * first string, s, and the second line contains the second string, t.
 */

// My solution
function strings_xor(s = "", t = "") {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    res += s[i] === t[i] ? "0" : "1";
  }

  return res;
}

function main() {
  const s = "10101";
  const t = "00101";

  console.log(strings_xor(s, t));
}

// lkrels
