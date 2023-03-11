//Write a function that takes an input sentence, and mixes up the insides of words (anything longer than 3 letters).

//Example:

// scramble(["A quick brown fox jumped over the lazy dog."])
// "A qciuk bwron fox jmepud oevr the lzay dog."

function scramble(str) {
    newArr = str.split(" ")
    newArr.forEach(function(el) {
        if (el.length > 3) {
            // scramble all  letters for practice
            el = el.split("") // el is now in an array by letters
            // console.log(el)
            for (let i = el.length - 1; i > 1; i--) {
                // pick a random index from 0 to i inclusive
                const j = Math.floor(Math.random() * (i + 1)); // at random index
                // Swap arr[i] with the element
                [el[i], el[j]] = [el[j], el[i]];
            }

            // see this for randomizing https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html 
            el = el.join("")

            // fix it up, scramble just the insides
        }
    })
    return newArr.join(" ")
}

console.log(scramble("this is a test of the function called scramble"))



// function shuffleArray(arr) {
//     // Start from the last element and swap
//     // one by one. We don't need to run for
//     // the first element that's why i > 0
//     for (let i = newArr.length - 2; i > 1; i--) {
//       // pick a random index from 0 to i inclusive
//       const j = Math.floor(Math.random() * (i + 1)); // at random index
//       // Swap arr[i] with the element
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     console.log(arr);
//   }
//   let arr = [1, 2, 3, 4, 5];
//   shuffleArray(arr);