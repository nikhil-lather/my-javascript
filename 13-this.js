13. this Keyword ⭐⭐⭐⭐⭐

This topic confuses almost everyone.

The biggest rule:

this is determined by HOW a function is called, not where it is written.

1. Global Context ⭐⭐⭐⭐
In Browser
console.log(this);

Output

Window

because the global object is window.

In Node.js
console.log(this);

At the top level of a CommonJS module, this is not the global object. It refers to module.exports (an empty object by default).

So you'll typically see:

{}
2. Function Context ⭐⭐⭐⭐⭐

Normal function

function show() {

    console.log(this);

}

show();
Browser (non-strict mode)

Output

Window
Strict Mode
"use strict";

function show() {

    console.log(this);

}

show();

Output

undefined

Interview Question:

Why?

Because strict mode prevents JavaScript from automatically binding this to the global object.

3. Object Context ⭐⭐⭐⭐⭐
const user = {

    name: "Nikhil",

    greet() {

        console.log(this.name);

    }

};

user.greet();

Output

Nikhil

Here

this

↓

user

because

user.greet()

called the function.

Another example

const car = {

    brand: "BMW",

    show() {

        console.log(this.brand);

    }

};

car.show();

Output

BMW
Common Mistake
const person = {

    name: "Nikhil",

    greet() {

        function test() {

            console.log(this);

        }

        test();

    }

};

person.greet();

Output

Window

or

undefined

NOT

person

because

test()

is just a normal function call.

Solution

Use Arrow Function.

4. Arrow Functions ⭐⭐⭐⭐⭐

Arrow functions do not have their own this.

They inherit this from the surrounding (lexical) scope.

Example

const person = {

    name: "Nikhil",

    greet() {

        const test = () => {

            console.log(this.name);

        };

        test();

    }

};

person.greet();

Output

Nikhil

Why?

Arrow

↓

No own this

↓

Uses greet()'s this

↓

person
Don't use arrow functions as object methods
const person = {

    name: "Nikhil",

    greet: () => {

        console.log(this.name);

    }

};

person.greet();

In a browser this usually prints:

undefined

because the arrow function captures this from its surrounding scope (not from person).

5. call() ⭐⭐⭐⭐⭐

Used to invoke a function immediately with a specified this.

function greet() {

    console.log(this.name);

}

const user = {

    name: "Nikhil"

};

greet.call(user);

Output

Nikhil

Syntax

function.call(thisArg,arg1,arg2)

Example

function intro(age) {

    console.log(this.name, age);

}

intro.call(user,22);

Output

Nikhil 22
6. apply() ⭐⭐⭐⭐

Almost the same as call().

Difference:

Arguments are passed as an array.

intro.apply(user,[22]);

Output

Nikhil 22

Comparison

call()

intro.call(user,22,"Delhi");

apply()

intro.apply(user,[22,"Delhi"]);
7. bind() ⭐⭐⭐⭐⭐

bind() does not execute immediately.

It returns a new function with this permanently set.

function greet() {

    console.log(this.name);

}

const user = {

    name: "Nikhil"

};

const fn = greet.bind(user);

fn();

Output

Nikhil

Difference

call()

↓

Runs immediately

---------------------

apply()

↓

Runs immediately

---------------------

bind()

↓

Returns a new function

↓

Run later
Real Example of bind()
const button = {

    text: "Click",

    click() {

        console.log(this.text);

    }

};

const fn = button.click;

fn();

This loses the object context, so this is no longer button.

Fix it:

const fn = button.click.bind(button);

fn();

Output

Click
call vs apply vs bind ⭐⭐⭐⭐⭐
Method	Executes Immediately?	Arguments	Returns
call()	✅ Yes	Separate values	Result of function
apply()	✅ Yes	Array of values	Result of function
bind()	❌ No	Separate values	New bound function
Most Asked Interview Questions ⭐⭐⭐⭐⭐
1. What is a Closure?

A function that remembers variables from its lexical scope even after the outer function has finished execution.

2. What is a Lexical Environment?

The environment created when a function is defined, containing its local variables and a reference to its outer scope. JavaScript uses this to resolve variable lookups.

3. Difference between Lexical Scope and Closure?
Lexical Scope decides where variables are accessible based on where code is written.
Closure is created when a function keeps access to that lexical scope after the outer function returns.
4. What determines the value of this?

For regular functions, how the function is called determines this. Arrow functions don't create their own this; they inherit it from the surrounding scope.

5. Difference between normal functions and arrow functions regarding this?
Normal function → gets its own this based on the call site.
Arrow function → inherits this from the enclosing lexical scope.
6. Difference between call(), apply(), and bind()?
call() → invokes immediately, arguments passed individually.
apply() → invokes immediately, arguments passed as an array.
bind() → returns a new function with this bound; it executes only when you call that returned function.
⭐ MERN Interview Priority
Topic	Importance
Closures	⭐⭐⭐⭐⭐
Lexical Environment	⭐⭐⭐⭐⭐
Practical Uses of Closures	⭐⭐⭐⭐
this Keyword	⭐⭐⭐⭐⭐
Global / Function / Object Context	⭐⭐⭐⭐⭐
Arrow Functions & this	⭐⭐⭐⭐⭐
call()	⭐⭐⭐⭐
apply()	⭐⭐⭐⭐
bind()	⭐⭐⭐⭐⭐

If you can confidently explain Closures, the Event Loop, and the this keyword with examples like these, you'll be well prepared for the JavaScript fundamentals asked in most MERN interviews.