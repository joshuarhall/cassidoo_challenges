function compress(a) {
  if (a.length === 0) return [];

  let temp = [];
  let count = 1;

  for (let i = 1; i <= a.length; i++) {
    if (a[i] === a[i - 1]) {
      count++;
    } else {
      temp.push(a[i - 1]);
      if (count > 1) temp.push(count.toString());
      count = 1;
    }
  }

  return temp;
}

console.log(compress(["a", "b", "b", "b", "c"])); // ["a", "b", "3", "c"]
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); //  ["a", "2", "b", "2", "c", "3"];
