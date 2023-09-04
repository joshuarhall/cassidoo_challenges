// Given a sequence of numbers, generate a "count and say" string.

// Example:

// > countAndSay(112222555)
// > "two 1s, then four 2s, then three 5s"

// > countAndSay(3333333333)
// > "ten 3s"

// split into array
// declare counter var

// for loop,
// if arr[i] matches arr[i + 1], increment counter
// else return `${counter} ${arr[i]}s`

const countAndSay = (numbers) => {
  let counter = 1;
  const retArr = [];
  const nums = numbers.toString();
  const numStrDict = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      counter++;
    } else {
      retArr.push(`${numStrDict[counter]} ${nums[i]}s`);
      counter = 1;
    }
  }
  return retArr.join(", ");
};

console.log(countAndSay(112222555));

console.log(countAndSay(3333333333));
