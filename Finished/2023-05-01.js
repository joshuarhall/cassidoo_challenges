/* 
Given a non-empty array containing only non-negative integers, return the list with trailing and leading zeroes removed.

Example:
removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0]) // [3, 1, 4, 1, 5, 9]
removeZeroes([0, 0, 0]) // []
removeZeroes([8]) // [8]
*/ 

const removeZeroes = (arr) => arr.filter(el => el != 0);

console.log(removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0])) // [3, 1, 4, 1, 5, 9]
console.log(removeZeroes([0, 0, 0])) // []
console.log(removeZeroes([8])) // [8]
