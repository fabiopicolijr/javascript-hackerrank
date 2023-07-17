/*
  The main purpose of the mod function is to calculate the modulo operation
  (remainder of a division) in a way that ensures the result is always positive,
  regardless of the sign of the dividend.
  The modulo operation is often used in various mathematical and programming
  scenarios, such as cyclic operations, wrapping around ranges,
  or handling periodic patterns.
  */
const mod = (n, p) => n - p * Math.floor(n / p);

// the number 26 above indicates an alphabetic algorithm use of the mod function.
// always returning an true alphabetic value
console.log(mod(1, 26));
console.log(mod(2, 26));
console.log(mod(25, 26));
console.log(mod(26, 26));
console.log(mod(35, 26));
console.log(mod(52, 26));
console.log(mod(85, 26));
console.log(mod(104, 26));
