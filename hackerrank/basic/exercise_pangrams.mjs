"use strict";

main();

/*
 * Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.
 *
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// for (const [index, value] of arr.entries()) {
//   console.log(index, value);
//   counterArray[value]++;
// }

// My solution
function pangram(string = "") {
  //const alpha = Array.from({ length: 26 }, (_, i) => i + 65);
  //const alphabet = alpha.map((value) => String.fromCharCode(value));
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 65)
  );
  alphabet.push(" ");

  for (const value of alphabet) {
    if (!string.toUpperCase().includes(value)) {
      return "not pangram";
    }
  }

  return "pangram";
}

function main() {
  const string = "The quick brown fox jumps over the lazy dog";

  const res = pangram(string);

  console.log(res);
}
