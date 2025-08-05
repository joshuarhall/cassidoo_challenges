// Given an array arr representing the positions of monsters along a straight line, and an integer d representing the minimum safe distance required between any two monsters, write a function to determine if all monsters are at least d units apart. If not, return the smallest distance found between any two monsters. If all monsters are safely spaced, return -1.

// Examples:

// let monsters = [3, 8, 10, 15];
// let d = 6;
// minMonsterDistance(monsters, d)
// 2

// minMonsterDistance([5, 9, 14, 18], 4)
// -1

function minMonsterDistance(arr, n) {
  let mindistance = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    mindistance = Math.min(arr[i + 1] - arr[i], mindistance);
  }
  return mindistance < n ? mindistance : -1;
}

console.log(minMonsterDistance([3, 8, 10, 15], 6));
console.log(minMonsterDistance([5, 9, 14, 18], 4));

// console.log(Math.min(2, 4));
