// Write a function that produces a generator that produces values in a range.

// Example:

// let range = fromTo(0,3)
// range()
// 0
// range()
// 1
// range()
// 2
// range()
// null

const fromTo = (a, b) => {
  return () => (a < b ? a++ : null);
};

const range = fromTo(0, 3);

console.log(range());
console.log(range());
console.log(range());
console.log(range());

const anotherRange = fromTo(1, 2);
console.log(anotherRange());
console.log(anotherRange());

const impossibleRange = fromTo(3, 2);
console.log(impossibleRange());
