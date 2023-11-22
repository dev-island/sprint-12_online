/**
 * Two Principles of Recursion
  1. An end goal, or base case
  2. A process in which the task at hand is reduced towards that end goal
 */

// EXAMPLES
let decrementCounter = (number) => {
  // Base case condition....
  if (number === 0) return;
  console.log(number);
  decrementCounter(number - 1);
};
decrementCounter(5);

//  check whether the integer we have passed is Even or Odd.
let checkNumber = (number) => {
  // Two base case conditions.....
  if (number === 0) return number + " is even";
  if (number === 1) return number + " is odd";
  return checkNumber(number - 2);
};
console.log(checkNumber(5));
console.log(checkNumber(10));
console.log(checkNumber(13333));
