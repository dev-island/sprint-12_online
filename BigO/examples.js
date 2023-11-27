//www.geeksforgeeks.org/what-is-logarithmic-time-complexity/
//www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/
// https://www.doabledanny.com/static/31985456f982a6965ee675e767256140/f2bf3/3.jpg


// Constant time function - O(1)
// This function is constant because the number of operations does not change with the size of the input.
// No matter how large the input is, the function will always take the same amount of time to complete.
function constantTimeFunction(n) {
  console.log(n);
}

// Logarithmic time function - O(log n)
// This function is logarithmic because the number of operations is reduced by a constant factor with each iteration.
// The number of operations is reduced by a constant factor because the input is divided by a constant factor with each iteration.
function logarithmicTimeFunction(n) {
  for (let i = n; i > 1; i /= 2) {
    console.log(i);
  }
}

// Linear time function - O(n)
// This function is linear because the number of operations is directly proportional to the size of the input.
// The number of operations is directly proportional to the size of the input because the function iterates through each element in the input array.
function reverseArray(arr) {
  let newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}
const reversedArray1 = reverseArray([1, 2, 3]) // [3, 2, 1]
const reversedArray2 = reverseArray([1, 2, 3, 4, 5, 6]) // [6, 5, 4, 3, 2, 1]


// Quadratic time function - O(n^2)
// This function is quadratic because the number of operations is proportional to the square of the input size.
// The number of operations is proportional to the square of the input size because the function iterates through each element in the input array twice.
function quadraticTimeFunction(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}

// Exponential time function - O(2^n)
// An algorithm with exponential time complexity is one where the number of operations doubles every time we increase the input by one.
// 
function exponentialTimeFunction(arr) {
  for (let i = 0; i < 2 ** arr.length; i++) {
    console.log(i);
  }
}







function multiplyByTwo(inputNum) {
  const result = inputNum * 2;
  return result;
}
// 5
function addTwoAndMultiply(inputNum) {
  const result = 2 + multiplyByTwo(inputNum);
  return result;
}

const res = addTwoAndMultiply(5);









// Global Scope
// addTwoAndMultiply: function
// res: 12

// Call Stack
global()

