/**
 * Sorts an array using the merge sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function mergeSort(arr) {
  const arrayLength = arr.length;

  for (let size = 1; size < arrayLength; size *= 2) {
    for (let left = 0; left < arrayLength - size; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, arrayLength - 1);
      merge(arr, left, mid, right);
    }
  }

  return arr;
}

/**
 * Merges two sorted subarrays into a single sorted subarray.
 * @param {Array} arr - The array containing the subarrays.
 * @param {number} left - The starting index of the left subarray.
 * @param {number} mid - The ending index of the left subarray and the starting index of the right subarray.
 * @param {number} right - The ending index of the right subarray.
 */
function merge(arr, left, mid, right) {
  const leftArray = arr.slice(left, mid + 1);
  const rightArray = arr.slice(mid + 1, right + 1);

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftArray.length) {
    arr[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightArray.length) {
    arr[k] = rightArray[j];
    j++;
    k++;
  }
}
