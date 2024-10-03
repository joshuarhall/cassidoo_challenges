const minLaundryLoads = (arr) => {
  const tempSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] == "normal" || arr[i][1] == "heavy") {
      tempSet.add(arr[i][0]);
    } else if (arr[i][1] == "delicate") {
      tempSet.add(arr[i][0] + "del");
    }
  }
  return tempSet.size;
};

let load1 = [
  ["red", "normal"],
  ["blue", "normal"],
  ["red", "delicate"],
  ["blue", "heavy"],
];

let load2 = [
  ["white", "normal"],
  ["white", "delicate"],
  ["white", "normal"],
  ["white", "heavy"],
];

console.log(minLaundryLoads(load1)); // 3

console.log(minLaundryLoads(load2)); // 2
