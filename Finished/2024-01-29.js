/* 
Write a function called daysBetween that takes in two dates, and returns the number of days between those dates. You can choose the date format you'd like to accept!

Example:

> daysBetween('Jan 1, 2024', 'Jan 29, 2024')
> 28

> daysBetween('Feb 29, 2020', 'Oct 31, 2023')
> 1340

*/

const daysBetween = (a, b) => {
  return Math.round(
    Math.abs(new Date(a).getTime() - new Date(b).getTime()) / 8.64e7
  );
};

console.log(daysBetween("Jan 1, 2024", "Jan 29, 2024"));
console.log(daysBetween("Feb 29, 2020", "Oct 31, 2023"));
