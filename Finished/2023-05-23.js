// Scrabble score counter

// 1 point: E, A, I, O, N, R, T, L, S, U
// 2 points: D, G
// 3 points: B, C, M, P
// 4 points: F, H, V, W, Y
// 5 points: K
// 8 points: J, X
// 10 points: Q, Z

// > scrabbleScore('FIZZBUZZ')
// > 49

// ideas for solution 
// series of if statements
// use .reduce 
// chain ternary 

function test(str, n = 0) {
    str = str.split("");
    str.reduce((a, b) => n++, 1);
    return n;
}

console.log(test('hello'));
console.log(test(''));

function scrabbleScore(str, n = 0) {
    str = str.toLowerCase().split("");
    str.reduce((a, b) => {
        if (b === "e" 
    }, 1);
    return n;
}

console.log(scrabbleScore('hello'));
console.log(scrabbleScore(''));