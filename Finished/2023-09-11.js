// Given an array of integers, sort them into two separate sorted arrays of even and odd numbers. If you see a zero, skip it.

// Example:

// separateAndSort([4,3,2,1,5,7,8,9])
// [[2,4,6], [1,3,5,7,9]]

// separateAndSort([1,1,1,1])
// [[], [1,1,1,1]]

// declare 2 arrays, one for odd, one for even
// for each through array, push into correct array

const separateAndSort = (arr) => {
  const odds = [];
  const evens = [];
  arr = arr.sort((a, b) => a - b);

  arr.forEach((el) => {
    if (el !== 0 && el % 2 === 0) {
      evens.push(el);
    } else if (el !== 0 && el % 2 === 1) {
      odds.push(el);
    }
  });
  return [evens, odds];
};

console.log(separateAndSort([4, 3, 2, 1, 5, 7, 8, 9]));
// [[2,4,6], [1,3,5,7,9]]

console.log(separateAndSort([1, 1, 1, 1]));
// [[], [1,1,1,1]]
