
// Write a function that returns the nth number in the Fibonacci sequence.
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers.
// The first two numbers in the sequence are 0 and 1.
// For example, the Fibonacci sequence for 5 is 0, 1, 1, 2, 3, 5.
// Hint: You can use a for loop to iterate through all the numbers up to the nth Fibonacci number.
function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  
  let fibPrev = 0;
  let fibCurr = 1;
  
  for (let i = 2; i <= n; i++) { // 3
    let fibNext = fibPrev + fibCurr; // 1, 2
    fibPrev = fibCurr; // 1
    fibCurr = fibNext; // 1
  }
  
  return fibCurr;
}

// console.log(fibonacci(0)); // 0
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(6)); // 8
// console.log(fibonacci(7)); // 13

// Now lets do it recursively
// The recursive solution is much more elegant, but it is also much less efficient.
// The recursive solution has a time complexity of O(2^n), whereas the iterative solution has a time complexity of O(n).
function fibRec(n) {
  if (n === 0 || n === 1) {
    return n;
  }
      // 1            2
  return fibRec(n-1) + fibRec(n-2)
}
const res = fibRec(3)
