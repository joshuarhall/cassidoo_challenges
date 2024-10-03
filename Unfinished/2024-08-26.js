// Given a string s containing letters and digits, return the longest substring of s where the number of distinct letters is equal to the number of distinct digits. If there are multiple substrings with the same length, return the one that appears first.

const equalLettersAndDigits = (s) => {
  let l = 0;
  let r = 1;
  let numLet = 0;
  let numNum = 0;
  let subString = "test";

  while (l < s.length - 1) {
    console.log(Number(s[l]));
    if (Number(s[l]) % 1 === 0) {
      numNum++;
    } else numLet++;

    // console.log("l = ", l);
    // console.log("r = ", r);
    console.log("numLet = ", numLet);
    console.log("numNum = ", numNum);

    if (numLet == numNum && subString > numLet * 2) {
      subString = s.slice(l, r);
    }

    if (r < s.length) {
      r++;
    } else {
      l++;
      r = l + 1;
    }
    // only reset numLet and numNum when l increments
  }

  return subString;
};

console.log(equalLettersAndDigits("12ab"));
// console.log(equalLettersAndDigits("abc12345")); // "abc123"
// console.log(equalLettersAndDigits("a12bc34")); // "a12bc3"
// console.log(equalLettersAndDigits("a123b4c")); // "" // (not possible with this example)**

// ** I disagree with her 3rd answer. Given how the problem is written, shouldn't it be "3b4c" ??
