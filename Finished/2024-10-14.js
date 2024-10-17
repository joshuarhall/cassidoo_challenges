/* Write a function that generates a valid SVG string for a circle given its radius, center position, and color.

Examples:
generateCircle(radius = 50, center = (100, 100), color = "blue")
"<svg width='200' height='200'><circle cx='100' cy='100' r='50' fill='blue'/>svg>"

generateCircle(radius = 30, center = (75, 50), color = "red")
"<svg width='150' height='100'><circle cx='75' cy='50' r='30' fill='red'/>svg>"
*/

// One adjustment: made position parameter an array
const svgCircle = (r, p, c) =>
  `<svg width='${p[0] * 2}' height='${p[1] * 2}'><circle cx='${p[0]}' cy='${
    p[1]
  }' r='${r}' fill='${c}'/>svg>`;

console.log(svgCircle(50, [100, 100], "blue"));
console.log(svgCircle(30, [75, 50], "red"));
