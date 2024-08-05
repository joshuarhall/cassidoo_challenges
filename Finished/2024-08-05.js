// while loop
const squares = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += Math.pow(n, 2);
    n -= 1;
  }
  return sum;
};

// recursion!
const squaresRec = (n) => (n > 1 ? Math.pow(n, 2) + squaresRec(n - 1) : 1);

console.log(squares(5)); // 55
console.log(squares(10)); // 385
console.log(squares(25)); // 5525
console.log(squares(100)); // 338350

console.log(squaresRec(5)); // 55
console.log(squaresRec(10)); // 385
console.log(squaresRec(25)); // 5525
console.log(squaresRec(100)); // 338350
