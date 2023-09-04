// Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

// Example:

// > maxPointsOnLine([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])
// > 4


// input: array of points on a plane
// output: max number of points that lie on the same straight line

//identify the line between two points
	// y = mx + b
		// compare two points. 
			// count how many indecies fall into this y = mx + b
	// for loop to compare index[i] against everything else
		// nested loop, compare the line between index[i] and index[j] against all other values
			// how to see if a point fits on y = mx + b
			// 1, 1 and 3, 2 => slope or m is 1/2, b is 0.5
			// m = (index[1][1] - index[0][1]) / (index[1][0] - index[0][0])
			// b = (1 = 0.5 * 1 + b??) => b = 1 (y) - 0.5 (m) * 1 (x)
	// initialize counter before for loops to store max number on a given line
	// initialize a counter inside for loops to store number on the line currently being evaluated.

function maxPointsOnLine(arr) {
    let max = 0;
    
    // for loops here
    for (let i = 0; i < arr.length; i++) {
        let counter = 0
        for (let j = 1; j < arr.length; j ++) {
        // if statement to compare counter vs max. if (counter > max), max = counter;
        }
    }
    
    return max;
}