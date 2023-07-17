"use strict";

main();

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// My solution
function timeConversion(s = "") {
  const time = s.slice(0, -2);
  const period = s.slice(-2);
  let [hours, minutes, seconds] = time.split(":");

  hours = parseInt(hours);

  if (period.toUpperCase() === "PM" && hours !== 12) {
    hours += 12;
  } else if (period.toUpperCase() === "AM" && hours === 12) {
    hours = 0;
  }

  hours = String(hours).padStart(2, 0);

  return `${hours}:${minutes}:${seconds}`;
}

function main() {
  const s = "01:00:45:PM";

  console.log(timeConversion(s));
}
