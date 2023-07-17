"use strict";

export function reverse_strings() {
  // Method 1: Using split, reverse, and join methods
  const reverseString1 = (str) => {
    return str.split("").reverse().join("");
  };

  console.log(reverseString1("Hello1")); // Output: "olleH"

  // Method 2: Using a for loop
  const reverseString2 = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  };

  console.log(reverseString2("Hello2")); // Output: "olleH"

  // Method 3: Using the spread operator and join method
  const reverseString3 = (str) => {
    return [...str].reverse().join("");
  };

  console.log(reverseString3("Hello3")); // Output: "olleH"

  // Method 4: Using recursion
  const reverseString4 = (str) => {
    if (str === "") {
      return "";
    }
    return reverseString4(str.substr(1)) + str.charAt(0);
  };

  console.log(reverseString4("Hello4")); // Output: "olleH"
}
