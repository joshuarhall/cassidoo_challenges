/*
Write a function that makes an ASCII "honeycomb" shape of a given size.

Example:

> honeycomb(2)
      __
   __/  \__
  /  \__/  \
  \__/  \__/
  /  \__/  \
  \__/  \__/
     \__/

> honeycomb(4)
          ____
         /    \
    ____/      \____
   /    \      /    \
  /      \____/      \
  \      /    \      /
   \____/      \____/
   /    \      /    \
  /      \____/      \
  \      /    \      /
   \____/      \____/
        \      /
         \____/
*/

const honeycomb = (n) => {
  // error handling for non-even inputs
  if (n % 2 !== 0) return "invalid";

  // create a n = 2 honeycomb
};
