// Given an array of function logs, where each log consists of a function name, a timestamp, and an event (either start or end), return the total execution time for each function. The timestamp is an integer representing milliseconds since the start of the program.

// Example:

const execTimes = (arr) => {
  const retObj = {};
  for (const task of arr) {
    if (retObj[task.name]) {
      retObj[task.name] = task.time - retObj[task.name];
    } else {
      retObj[task.name] = task.time;
    }
  }
  return retObj;
};

console.log(
  execTimes([
    { name: "main", time: 0, event: "start" },
    { name: "subTask1", time: 5, event: "start" },
    { name: "subTask1", time: 10, event: "end" },
    { name: "subTask2", time: 15, event: "start" },
    { name: "subTask2", time: 20, event: "end" },
    { name: "main", time: 25, event: "end" },
  ])
);
// > { main: 25, subTask1: 5, subTask2: 5 }
