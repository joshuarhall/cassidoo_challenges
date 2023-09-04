// Given an array of integers and a number k (where k is guaranteed to be less than the array's length), return a subarray of length k with the minimum possible sum. Maintain the order of the original array!

// Example:

// > minSubs([1,3,20,4,8,9,11], 3)
// > [4,8,9]

// > minSubs([4,4,4,4,8], 2)
// > [4,4]

const minSubs = (arr, k) => {
  // declare 2 variables, an array with k elements and the minimum that they produce
  let tempArr = [];
  let tempSum = Infinity;
  // loop through arr.
  for (let i = 0; i < arr.length - k; i++) {
    const tempRange = arr.slice(i, i + k);
    if (tempSum > tempRange.reduce((a, c) => a + c, 0)) {
      tempArr = tempRange;
      tempSum = tempRange.reduce((a, c) => a + c, 0);
    }
  }
  return tempArr;
};

console.log(minSubs([1, 3, 20, 4, 8, 9, 11], 3)); // [4,8,9]

console.log(minSubs([4, 4, 4, 4, 8], 2)); // [4,4]
