The undefined is coming because of this line:

console.log(person.greet());

Let's see what happens step by step.

Your code
const person = {
  name: "nikhil",
  age: 22,
  greet: function () {
    console.log("hello");
  },
};

console.log(person.greet());
Execution flow
person.greet() is called.
Inside greet():
console.log("hello");

This prints:

hello
After printing "hello", the function reaches the end without returning anything.

A function that doesn't explicitly return a value automatically returns undefined.

So it's as if you wrote:

greet: function () {
    console.log("hello");
    return undefined;
}
Now your statement becomes:
console.log(undefined);

So the final output is:

hello
undefined
How to fix it
Option 1 (Most common)

If you only want to print "hello":

person.greet();

Output:

hello

No undefined.

Option 2

If you want console.log() to print something, return a value.

const person = {
  greet: function () {
    return "hello";
  },
};

console.log(person.greet());

Output:

hello
Difference between console.log() and return
function greet() {
    console.log("hello");
}

console.log(greet());

Output:

hello
undefined

Whereas:

function greet() {
    return "hello";
}

console.log(greet());

Output:

hello
Interview Rule ⭐
console.log() prints something to the console.
return sends a value back from the function.
If a function has no return statement, JavaScript returns undefined automatically.