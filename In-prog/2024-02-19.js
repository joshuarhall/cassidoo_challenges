// Given a string array, find the maximum product of word lengths where the words don't share any letters.

// Example:
// wordLengthProduct(["fish","fear","boo","egg","cake","abcdef"]) // 16 // "fish" and "cake"
// wordLengthProduct(["a","aa","aaa","aaaa"]) // 0 // all of them share "a"

// two components here

const wordLengthProduct = (arr) => {
  // find longest two words that don't have any words in common
  // cache that length, compare to the next two
  arr = arr.sort((a, b) => b.length - a.length);
  let valid1 = "";
  let valid2 = "";
  const lengthProd = valid1.length * valid2.length;
  console.log(arr);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].length ** 2 < lengthProd) {
      return lengthProd;
    }

    const arrI = arr[i].split("");
    for (let j = i + 1; j < arr.length; j++) {
      // const word2 = new Set(arr[j].split(""));
      const arrJ = arr[j];
      if (lengthProd > arrJ.length ** 2) break;
      const intersection = new Set(arrI.filter((x) => arrJ.includes(x)));
      // console.log("this is the intersection ", intersection);

      if (intersection.size < 1) {
        valid1 = arr[i];
        valid2 = arr[j];
        console.log("valid 1 and 2 ", valid1, valid2);
      }
    }
  }

  return "no pair of words found that use completely unique letters";
};

console.log(
  wordLengthProduct(["fish", "fear", "boo", "egg", "cake", "abcdef"])
); // 16 // "fish" and "cake"
// wordLengthProduct(["a", "aa", "aaa", "aaaa"]); // 0 // all of them share "a"
