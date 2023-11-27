/**
 * Two Principles of Recursion
  1. An end goal, or base case
  2. A process in which the task at hand is reduced towards that end goal
 */

// EXAMPLES
// let decrementCounter = (number) => {
//   // Base case condition....
//   if (number === 0) return;
//   console.log(number);
//   return decrementCounter(number - 1);
// };
// const res = decrementCounter(3);


//  check whether the integer we have passed is Even or Odd.

let checkNumber = (number) => {
  // Two base case conditions.....
  if (number === 0) return number + " is even";
  if (number === 1) return " is odd";
  return checkNumber(number - 2);
};
const val = checkNumber(5);