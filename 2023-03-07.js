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
            // see this for randomizing https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html 
            el = el.join("")

            // fix it up, scramble just the insides
        }
    })
    return newArr.join(" ")
}

console.log(scramble("this is a test of the function called scramble"))

