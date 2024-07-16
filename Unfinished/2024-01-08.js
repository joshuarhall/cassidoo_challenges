// You have an array of letters. Return the number of possible sequences of letters you can make using the letters in the array. Extra credit: print the sequences!

// Example:

// > letters(['X'])
// > 1

// > letters(['A', 'A', 'B'])
// > 8 // "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"

const letters = (arr) => {
  // in: an array
  // out: basic -> number of ways to reorganize the elements
  // out: advanced -> an array of all ways to reorganize elements

  // math problem for variant numbers
  //   let variants = 1;
  //   for (let i = 1; i <= arr.length; i++) {
  //     variants *= i;
  //   }
  //   return variants;

  //   const letters = new Set(arr);
  //   console.log(letters);
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(i);
  //     letters.forEach((el) => letters.add(el + arr[i]));
  //   }
  //   console.log(letters);

  const letters = new Set(arr);
  console.log(letters);
  for (let i = 0; i < arr.length; i++) {
    const temp = [];
    for (let j = 0; j < arr.length; j++) {
      letters.forEach((el) => {
        if (el.length < arr.length + 1 && i !== j) {
          console.log(el + arr[j]);
          temp.push(el + arr[j]);
        }
      });
      //   console.log(temp);
      temp.forEach((el) => letters.add(el));
    }
  }
  //   console.log(letters);
  return letters.length;
};

console.log(letters(["A", "A", "B", "C"]));
// console.log(letters(["X"]));
