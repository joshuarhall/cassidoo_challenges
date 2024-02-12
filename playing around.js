// // Example POST method implementation:
// async function postData(url = "", data = {}) {
//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return response.json();
// }

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//   console.log(data);
// });

const isCool = (name) => {
  console.log(`${name} is so cool`);
};

const kidOrParent = (name) => {
  if (name === "Caitlin" || name === "Josh") {
    console.log(`${name} is a parent`);
  } else if (name === "Theo" || name === "Theodore" || name === "Rowan") {
    console.log(`${name} is a kid`);
  } else if (name === "Mochi" || name === "Soba") {
    console.log(`${name} is a cat`);
  } else {
    console.log(`${name} isn't part of the Hall family`);
  }
};

isCool("Theo");
isCool("Mom");
isCool("Rowan");

console.log("");
console.log("");
console.log("");

kidOrParent("Josh");
kidOrParent("Caitlin");
kidOrParent("Rowan");
kidOrParent("Theo");
kidOrParent("Mochi");
kidOrParent("Soba");
kidOrParent("Kuulei");
kidOrParent("Mrs. Hahn");
