// function add(a, b) {
//   a + b;
// }

// console.log(add(2, 3));
// output::
// // undefined

function greet(name) {
  console.log("hello" + name);
}

function processUser(callback) {
  callback("nikhil");
}

processUser(greet);
