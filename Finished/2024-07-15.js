// Given an integer array nums, return the length of the longest increasing subsequence.

// Example:
// increasingSubsequence([10, 9, 2, 3, 7, 101, 18]) // 4
// increasingSubsequence([4, 4, 4, 4, 3]) // 1

const increasingSubsequence = (arr) => {
  let maxLen = 1;
  let tempLen = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      tempLen++;
    } else {
      tempLen = 1;
    }
    if (tempLen >= maxLen) {
      maxLen = tempLen;
    }
  }
  return maxLen;
};

const ex1 = [10, 9, 2, 3, 7, 101, 18];
const ex2 = [4, 4, 4, 4, 3];

console.log(increasingSubsequence(ex1));
console.log(increasingSubsequence(ex2));
