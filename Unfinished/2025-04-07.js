// Write a function that returns the first n Leyland numbers in ascending order. A Leyland number is defined as x^y + y^x for integers x > 1 and y > 1.

// Examples:
const getLeylandNumbers = (n) => {
  const returnArr = [];
  let x = 2;
  let y = 2;

  for (let i = 2; returnArr.length < n; i++) {
    returnArr.push(x ** y + y ** x);
    // console.log(x, y);
    if (x === y) {
      x++;
      console.log(x, y);
    } else if (x > y) {
      y++;
      console.log(x, y);
    }
    // console.log(x, y);
  }
  return returnArr;
};

// getLeylandNumbers(1); // [8]
// getLeylandNumbers(5); // [8, 17, 32, 54, 57]
// console.log(getLeylandNumbers(1)); // [8]
console.log(getLeylandNumbers(5)); // [8, 17, 32, 54, 57]
