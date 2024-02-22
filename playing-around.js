const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
const intersection = odds.intersection(squares);
console.log(odds.intersection(squares)); // Set(2) { 1, 9 }
