// Prompt
// Write a function where given integer n, it returns the angles at each point of a star with n points. 
// Hint: The sum of the angles at each point of a 5 pointed star is 180 degrees, and at a 6 pointed is 360 degrees.

// assumes that a polygon with n sides is at the center of the star with n triangles as the star points
// for example, if n = 7, this function assumes a regular heptagram (labeled {7/2}) instead of a great heptagram (labeled {7/3})
const starAng = (n) => n < 5 ? "Must have 5 points or more." : Math.floor((180 - (180 - ((n-2) * 180 / n)) * 2) * n);

console.log(starAng(5))
console.log(starAng(6))
console.log(starAng(7))
console.log(starAng(8))
console.log(starAng(9))
console.log(starAng(10))