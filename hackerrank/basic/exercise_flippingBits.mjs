"use strict";

main();

/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 *
 * To accomplish this task in JavaScript, you can use the bitwise NOT (~) operator.
 * The bitwise NOT operator flips all the bits of a number, effectively
 * inverting each 1 to 0 and each 0 to 1.
 */

// My solution
function flippingBits(n) {
  // Flip all the bits of the number
  const flippedBits = ~n;

  // Convert the result to an unsigned 32-bit integer
  const unsignedResult = flippedBits >>> 0;

  // Convert the result to an unsigned 64-bit integer [This is only for educational purposes]
  const signedResult = BigInt(unsignedResult);

  // Return the final result
  return unsignedResult;
}

function main() {
  const n = 2;
  const res = flippingBits(n);
  console.log(res);
}

// Certainly! Here are the bitwise operators available in JavaScript:

// Bitwise AND (&): Performs a bitwise AND operation on each pair of corresponding bits. It returns a 1 if both bits are 1, otherwise returns 0.

// Bitwise OR (|): Performs a bitwise OR operation on each pair of corresponding bits. It returns a 1 if at least one of the bits is 1, otherwise returns 0.

// Bitwise XOR (^): Performs a bitwise XOR (exclusive OR) operation on each pair of corresponding bits. It returns a 1 if the bits are different, otherwise returns 0.

// Bitwise NOT (~): Inverts all the bits, converting 1s to 0s and 0s to 1s.

// Left Shift (<<): Shifts the bits of the left operand to the left by the number of positions specified by the right operand. Left shifts are equivalent to multiplying the number by 2 for each position shifted.

// Right Shift (>>): Shifts the bits of the left operand to the right by the number of positions specified by the right operand. Right shifts are equivalent to dividing the number by 2 for each position shifted.

// Zero-fill Right Shift (>>>): Similar to the right shift operator (>>), but the vacant leftmost positions are filled with zeros instead of sign extension.
