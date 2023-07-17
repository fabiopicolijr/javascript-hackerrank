/* ARRAYS */
const array1 = [5, 12, 8, 130, 44];
const foundArray1 = array1.find((element) => element === 5);
//console.log(foundArray1);

const array2 = Array(100).fill(3, 0, 5).fill(0, 5, -1);
// console.log(array2);

const array3 = Array.from({ length: 100 }, () => (Math.random() * 500) | 0);
// console.log(array3);

/* BITS */
const number = 0;
const flippedBits = ~number;
const unsignedResult = flippedBits >>> 0;
const backToInteger = BigInt(unsignedResult);
// console.log(number, flippedBits, unsignedResult, backToInteger);

const number2 = 4;
const binaryString = number2.toString(2); // CONVERT TO BINARY
const integerBinary = parseInt(binaryString, 2);
// console.log(binaryString, integerBinary);

const string1 = "12345";
const replaced = string1.replace(1, 2).replace(2, 6).replace(6, 8); // left to right, beautiful
// console.log(replaced);
const n = 2;
const int32 = ~n >>> 0;
// console.log(int32);

const counterArray = Array.from(
  { length: 100 },
  () => (Math.random() * 11) | 0
);
// console.log(counterArray);

Array.from(Array(10).keys());
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
