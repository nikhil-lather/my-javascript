3. Functions

A function is a reusable block of code that performs a specific task. Instead of writing the same code multiple times, you write it once and call it whenever needed.

Example:

function greet() {
  console.log("Hello!");
}

greet();
greet();

Output:

Hello!
Hello!
1. Function Declaration

Also called a named function.

Syntax
function functionName(parameters) {
  // code
}

Example:

function greet() {
  console.log("Hello");
}

greet();

Output

Hello
Function with Parameters
function greet(name) {
  console.log("Hello " + name);
}

greet("Nikhil");

Output

Hello Nikhil
Hoisting

Function declarations are fully hoisted, so they can be called before they are defined.

sayHello();

function sayHello() {
  console.log("Hello");
}

Output

Hello
Interview Question
Why are function declarations hoisted?

During the creation phase, JavaScript stores the entire function in memory before execution starts.

2. Function Expression

A function stored inside a variable.

Syntax

const variableName = function () {
  // code
};

Example

const greet = function () {
  console.log("Hello");
};

greet();

Output

Hello
Hoisting
greet();

const greet = function () {
  console.log("Hello");
};

Output

ReferenceError

Reason:

Only the variable is hoisted, not its value.

Named Function Expression
const add = function sum(a, b) {
  return a + b;
};

console.log(add(2, 3));

Output

5
Function Declaration vs Function Expression
Function Declaration	Function Expression
Starts with function keyword	Stored in a variable
Fully hoisted	Not fully hoisted
Can call before declaration	Cannot call before initialization
Better for reusable functions	Common when passing functions around
3. Arrow Functions

Introduced in ES6 (2015).

Shorter syntax for writing functions.

Syntax

const functionName = () => {
};

Example

const greet = () => {
  console.log("Hello");
};

greet();
One Parameter
const greet = name => {
  console.log(name);
};

greet("Nikhil");
Multiple Parameters
const add = (a, b) => {
  console.log(a + b);
};

add(5, 4);

Output

9
Implicit Return
const square = num => num * num;

console.log(square(5));

Output

25

Equivalent to

const square = num => {
  return num * num;
};
Returning Objects

Wrong

const person = () => { name: "Nikhil" };

Output

undefined

Correct

const person = () => ({ name: "Nikhil" });

console.log(person());

Output

{ name: "Nikhil" }
Arrow Function vs Normal Function
Normal Function	Arrow Function
Has its own this	Doesn't have its own this
Has arguments object	No arguments object
Can be constructor	Cannot be constructor
Best for object methods	Best for callbacks
Interview Question

Why shouldn't arrow functions usually be used as object methods?

const person = {
  name: "Nikhil",
  greet: () => {
    console.log(this.name);
  }
};

person.greet();

Output

undefined

Arrow functions inherit this from the surrounding scope instead of the object.

Correct

const person = {
  name: "Nikhil",
  greet() {
    console.log(this.name);
  }
};

Output

Nikhil
4. Parameters vs Arguments
Parameters

Variables defined in the function.

function greet(name) {

}

name is a parameter.

Arguments

Values passed while calling the function.

greet("Nikhil");

"Nikhil" is an argument.

Example

function add(a, b) {
  console.log(a + b);
}

add(10, 20);

Parameters

a
b

Arguments

10
20
5. Default Parameters

Used when an argument isn't passed.

Without default value

function greet(name) {
  console.log(name);
}

greet();

Output

undefined

With default value

function greet(name = "Guest") {
  console.log(name);
}

greet();

Output

Guest

Example

function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5));

Output

10
6. Return Statement

return sends a value back to the caller and immediately ends the function.

Example

function add(a, b) {
  return a + b;
}

const result = add(2, 3);

console.log(result);

Output

5

Without return

function add(a, b) {
  a + b;
}

console.log(add(2, 3));

Output

undefined

Multiple Returns

function check(num) {
  if (num > 0)
    return "Positive";

  return "Negative";
}

console.log(check(5));

Output

Positive
Interview

Can a function return multiple values?

Not directly. You can return an object or array.

function getUser() {
  return {
    name: "Nikhil",
    age: 22
  };
}
7. Callback Functions

A callback is a function passed as an argument to another function.

Example

function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Nikhil");
}

processUser(greet);

Output

Hello Nikhil

Anonymous Callback

setTimeout(function () {
  console.log("Hello");
}, 2000);

Arrow Callback

setTimeout(() => {
  console.log("Hello");
}, 2000);
Why are Callbacks Used?
Asynchronous programming
Event handling
Array methods (map, filter, reduce, forEach)
API requests

Example

const nums = [1, 2, 3];

nums.forEach(num => {
  console.log(num);
});
8. Higher-Order Functions (HOF)

A Higher-Order Function is a function that:

Takes another function as an argument, or
Returns another function.

Example 1 (takes a function)

function greet(name) {
  console.log("Hello " + name);
}

function process(callback) {
  callback("Nikhil");
}

process(greet);

Example 2 (returns a function)

function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiply(2);

console.log(double(5));

Output

10

Common Higher-Order Functions

map()
filter()
reduce()
forEach()
sort()
find()

Example

const nums = [1, 2, 3];

const result = nums.map(num => num * 2);

console.log(result);

Output

[2, 4, 6]
Callback vs Higher-Order Function
Callback Function	Higher-Order Function
Passed into another function	Takes or returns functions
Executed by another function	Controls or uses callbacks
Example: num => num * 2	Example: map(), filter(), setTimeout()
9. IIFE (Immediately Invoked Function Expression)

An IIFE is a function that executes immediately after it is created.

Syntax

(function () {

})();

Example

(function () {
  console.log("Executed");
})();

Output

Executed

Arrow Function IIFE

(() => {
  console.log("Hello");
})();

With Parameters

(function (name) {
  console.log("Hello " + name);
})("Nikhil");

Output

Hello Nikhil
Why Use IIFE?

Before ES6, IIFEs were commonly used to:

Create a private scope
Avoid polluting the global scope
Prevent variable name conflicts

Example

(function () {
  let secret = "Hidden";
  console.log(secret);
})();

console.log(secret);

Output

Hidden
ReferenceError: secret is not defined
Common Interview Questions
1. Function Declaration vs Function Expression?
Function Declaration	Function Expression
Fully hoisted	Not fully hoisted
Can be called before declaration	Cannot be called before initialization
Named by default	Can be anonymous or named
Better for reusable functions	Useful for callbacks and dynamic assignments
2. What is the difference between parameters and arguments?
Parameters are variables in the function definition.
Arguments are actual values passed when calling the function.
function greet(name) {} // parameter

greet("Nikhil"); // argument
3. What happens if a function doesn't return anything?

It implicitly returns undefined.

function test() {}

console.log(test());

Output

undefined
4. What is a callback function?

A function passed to another function to be executed later.

setTimeout(() => {
  console.log("Done");
}, 1000);
5. What is a Higher-Order Function?

A function that accepts another function as an argument or returns a function.

Examples:

map()
filter()
reduce()
forEach()
setTimeout()
6. What are the advantages of arrow functions?
Shorter syntax
Great for callbacks
Implicit return for single expressions
Lexically binds this (inherits it from the surrounding scope)
7. Why were IIFEs used before ES6?

To create a private scope and avoid polluting the global namespace. Today, let, const, and ES modules have largely replaced this use case, but you may still see IIFEs in older codebases.

💡 Interview Tips
Function Declaration: Use for reusable functions that may be called before they're defined.
Function Expression: Common when assigning functions to variables or passing them around.
Arrow Function: Preferred for callbacks, but avoid using them as object methods or constructors.
Callbacks & HOFs: These are the foundation of asynchronous JavaScript and array methods—expect interview questions on them.
IIFE: Less common in modern code, but interviewers may ask about it to test your knowledge of JavaScript history and scope.