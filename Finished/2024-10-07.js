// Given a list of ingredients needed for a recipe, represented as strings, and a list of ingredients you have in your pantry, write a function to return the minimum number of additional ingredients you need to buy to make the recipe. If you want to do some extra credit, add expiration dates to the pantry items, and only account for food that isn't expired.

let recipe = ["eggs", "flour", "sugar", "butter"];
let pantry = ["sugar", "butter", "milk"];
let pantryExp = {
  sugar: "2025-02-15",
  butter: "2024-09-15",
  milk: "2024-10-15",
};

///// easy /////

const missingItems = (rec, pan) =>
  rec.filter((rec) => pan.includes(rec)).length;

console.log(missingItems(recipe, pantry));

///// with expiry /////

const hardMode = (rec, pan) => {
  let num = 0;
  for (let i = 0; i < rec.length; i++) {
    if (!pan[rec[i]] || Date.parse(pan[rec[i]]) >= Date.now()) {
      num += 1;
    }
  }
  return num;
};

console.log(hardMode(recipe, pantryExp)); // 3 // butter expired, one more than "easy" mode
