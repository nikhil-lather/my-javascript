// function add(a, b) {
//   a + b;
// }

// console.log(add(2, 3));
// output::
// // undefined

// function greet(name) {
//   console.log("hello" + name);
// }

// function processUser(callback) {
//   callback("nikhil");
// }
// processUser(greet);

// const person = {
//   name: "nikhil",
//   age: 22,
//   greet: function () {
//     console.log("hello");
//   },
// };
// console.log(person.greet()); // output : undefined
// person.greet();

// console.log("start");
// setTimeout(() => {
//   console.log("hello");
// }, 2000);
// console.log("end");

//callback function
function greet(name) {
  console.log("hello" + name);
}
function processUser(callback) {
  callback("nikhil");
}
processUser(greet);

let learningPromise = new Promise((res, rej) => {
  let success = true;
  if (success) {
    res("problem solved");
  } else {
    rej("failed");
  }
});

learningPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
