// Using the PokéAPI (or your own local setup) write a function that takes in a Pokémon type, and returns what that type is weak against, and strong against.
// Here is the listing of types and here's an example JSON for the fighting type!

// Example:

// > typeMatchup('fighting')
// > "Weak against flying, psychic, and fairy. Strong against normal, rock, steel, ice, and dark."

// > typeMatchup('cassidy')
// > "This is not a valid Pokémon type."

async function typeMatchup(t) {
  // in: t, which is a string. only accepted strings are pokemon types
  // out: a string which reads `Weak against ${types here}. Strong against ${types here}.`

  // dictionary of types to minimize compute cost if invalid parameter
  const types = {
    normal: 1,
    fire: 10,
    water: 11,
    grass: 12,
    electric: 13,
    ice: 15,
    fighting: 2,
    poison: 4,
    ground: 5,
    flying: 3,
    psychic: 14,
    bug: 7,
    rock: 6,
    ghost: 8,
    dragon: 16,
    dark: 17,
    steel: 9,
    fairy: 18,
  };

  // parameter validation
  if (!types[t.toLowerCase()]) {
    return "invalid input";
  }

  const response = await fetch(`https://pokeapi.co/api/v2/type/${t}`);
  const res_types = await response.json();

  // make t input capital for string output. Example: "fire" --> "Fire"
  t = t[0].toUpperCase() + t.slice(1);

  // get list of type weaknesses into an array
  const weakness = res_types.damage_relations.double_damage_from.map(
    (type) => type.name
  );

  // create the weakness string
  const weakStr =
    `${t} is weak against` +
    weakness.map((el) => " " + el).slice(0, -1) +
    ", and " +
    weakness.slice(-1) +
    ".  ";

  // get list of type strengths into an array
  const strengths = res_types.damage_relations.double_damage_to.map(
    (type) => type.name
  );

  // create the strengths string
  const strongStr =
    `${t} is strong against` +
    strengths.map((el) => " " + el).slice(0, -1) +
    ", and " +
    strengths.slice(-1);

  console.log(weakStr);
  console.log(strongStr);

  return weakStr, strongStr;
}

console.log(typeMatchup("josh"));
console.log(typeMatchup("fire"));
