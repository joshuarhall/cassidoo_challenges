/* 
Write a function that determines if an array 
of numbers is a bitonic sequence. A bitonic 
sequence is a sequence of numbers in which 
the numbers are in increasing order, and after 
a certain point, they start decreasing. 

Extra credit: 
print the peak number in the sequence!

Example:
isBitonic([1,2,3,2])
true // extra credit: 3

isBitonic([1,2,3])
false

isBitonic([3,4,5,5,5,2,1])
true // extra credit: 5
*/

const isBitonic = (arr) => {
  let goingUp = true;
  let highest;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && goingUp) {
      goingUp = !goingUp;
      highest = arr[i];
    } else if (!arr[i + 1] && goingUp) {
      return false;
    } else if (arr[i] < arr[i + 1] && !goingUp) {
      return false;
    }
  }
  return [true, highest];
};

console.log(isBitonic([1, 2, 3, 2]));
console.log(isBitonic([1, 2, 3]));
console.log(isBitonic([3, 4, 5, 5, 5, 2, 1]));
console.log(isBitonic([3, 4, 5, 5, 5, 2, 1, 3]));
