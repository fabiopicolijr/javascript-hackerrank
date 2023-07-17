"use strict";

import { reverse_strings } from "./strings.mjs";

// const printTokens = (str) => {
//   const specialCharacters = ["!", ",", "?", ".", "_", "'", "@"];

//   return specialCharacters.reverse();
// };

// console.log(printTokens("test?"));

const reversedArray = (arr) => {
  return [...arr].reverse();
};

const reversedArrayClassical = (arr) => {
  let reversed = [];

  for (let index = arr.length - 1; index >= 0; index--) {
    reversed.push(arr[index]);
  }

  return reversed;
};

function reversedArrayClassical2(arr) {
  let reversed = [];

  for (let index = arr.length - 1; index >= 0; index--) {
    reversed.push(arr[index]);
  }

  return reversed;
}

console.log(reversedArrayClassical2([1, 2, 3]));
