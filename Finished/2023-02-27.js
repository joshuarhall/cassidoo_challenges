// cassidoo challenge
// Given a list of numbers, return all groups of repeating consecutive numbers. 

function repeatedGroups(arr) {
  let returnArr = [];
  let cache = [];

  for (let i = 1; i < arr.length; i++) { // identifying all repeated values and adding themn to cache
    if (arr[i] === arr[i-1] && !cache.includes(arr[i])) { 
      cache.push(arr[i-1], arr[i])
    } else if (arr[i] === arr[i-1]) { 
      cache.push(arr[i])
    }
  }

  let cache2;

  function splitArr(cache, cache2) { // move cached values into the returnArr, separated into arrays by value
    if (cache.length === 0) { // base case
      returnArr.push(cache2)
      return
    }
    if (cache2 === undefined && !returnArr.includes(cache[0])) { // first loop
      cache2 = [cache[0]]
      cache.shift();
    } else if (cache2[cache2.length-1] === cache[0]) { //  add a duplicate number to cache2 
      cache2.push(cache[0])
      cache.shift()
    } else if (!cache2.includes(cache[0])) { //  new number and NOT first loop
      returnArr.push(cache2)
      cache2 = [cache[0]];
      cache.shift()
    }
    return splitArr(cache, cache2)
  }
  splitArr(cache,cache2);
  return returnArr;
}

const ex1 = [1, 2, 2, 4, 5];
const ex2 = [1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9]
const ex3 = [1, 2, 2, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7]

console.log(repeatedGroups(ex1));
console.log(repeatedGroups(ex2));
console.log(repeatedGroups(ex3));
