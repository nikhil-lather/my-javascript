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

const person = {
  name: "nikhil",
  age: 22,
  greet: function () {
    console.log("hello");
  },
};

console.log(person.greet());
// person.greet();
