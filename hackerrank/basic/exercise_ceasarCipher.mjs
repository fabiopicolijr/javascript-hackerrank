"use strict";

main();

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

// My solution
function caesarCipher(string = "", rotation = 0) {
  const isAlphabetic = (str) => /^[a-zA-Z]$/.test(str);
  const isUpper = (str) => str === str.toUpperCase();
  const mod = (n, p) => n - p * Math.floor(n / p);
  const fixAlphaRotation = (code) => code - 26;
  const isBeyondLimits = (code, isUpper) => {
    return (isUpper && code > 90) || (!isUpper && code > 122);
  };

  const rotatedString = string.split("").map((letter) => {
    const charCode = letter.charCodeAt(0);
    const rotationMod = mod(rotation, 26);
    let codeRotated = charCode + rotationMod;

    if (!isAlphabetic(letter)) return letter;

    if (isBeyondLimits(codeRotated, isUpper(letter))) {
      codeRotated = fixAlphaRotation(codeRotated);
    }

    return String.fromCharCode(codeRotated);
  });

  return rotatedString.join("");
}

function main() {
  const x =
    "DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.";
  const y = 45;

  console.log(caesarCipher(x, y));
}
