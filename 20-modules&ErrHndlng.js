15. Modules ⭐⭐⭐⭐
What is a Module?

A module is simply a JavaScript file.

Modules allow you to split your code into multiple files so it becomes:

Easier to read
Easier to maintain
Reusable
Better organized

Instead of writing everything in one file:

app.js

1000 lines of code

You can split it:

math.js

user.js

product.js

app.js

Each file is a module.

Why do we need Modules?

Imagine you're building an E-commerce website.

Instead of writing:

// app.js

function login(){}
function register(){}
function logout(){}

function addProduct(){}
function deleteProduct(){}

function payment(){}
function checkout(){}

function search(){}

You organize it like:

auth.js

login()

register()

logout()
product.js

addProduct()

deleteProduct()
payment.js

checkout()

payment()

Then import only what you need.

ES Modules

Modern JavaScript uses ES Modules (ESM).

They use:

import
export

Older JavaScript used:

require()

module.exports

(Node.js CommonJS)

Today, React, Vite, Next.js, and modern browsers primarily use ES Modules.

Export

export makes variables, functions, or classes available for other files.

Example:

math.js
export const PI = 3.14;

export function add(a, b) {
    return a + b;
}

Now another file can use them.

Import

import brings exported values into another file.

app.js
import { PI, add } from "./math.js";

console.log(PI);

console.log(add(5, 3));

Output

3.14

8
Named Export ⭐⭐⭐⭐⭐

Named exports allow multiple exports from the same file.

math.js
export const PI = 3.14;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

Import them:

import { PI, add, subtract } from "./math.js";

Notice the curly braces {}.

You can also rename them.

import { add as sum } from "./math.js";

console.log(sum(2,3));
Default Export ⭐⭐⭐⭐⭐

A file can have only one default export.

user.js
export default function greet() {
    console.log("Hello");
}

Import it:

import greet from "./user.js";

greet();

Notice:

No curly braces.

You can rename it anything.

import hello from "./user.js";

hello();

Works perfectly.

Named vs Default Export
Named Export	Default Export
Many per file	Only one per file
Uses {} while importing	No {}
Name must match (unless aliased)	Any name can be used
export const add = ...	export default function(){}
Can a file have both?

Yes.

math.js
export const PI = 3.14;

export function add(a,b){
    return a+b;
}

export default function greet(){
    console.log("Hello");
}

Import:

import greet, { PI, add } from "./math.js";

greet();

console.log(add(2,3));
Folder Structure Example
project/

│

├── app.js

├── math.js

├── user.js

└── product.js

math.js

export function add(a,b){
    return a+b;
}

app.js

import { add } from "./math.js";

console.log(add(10,20));
Common Interview Questions
Why use modules?
Code organization
Reusability
Avoid global variables
Easier debugging
Better maintainability
Why use import/export?

To share code between files without polluting the global scope.

Difference between CommonJS and ES Modules?

CommonJS

const math = require("./math");

module.exports = add;

ES Modules

import { add } from "./math.js";

export function add(){}

React uses ES Modules.

16. Error Handling ⭐⭐⭐⭐⭐

Programs can fail.

Example:

console.log(user.name);

If user doesn't exist,

JavaScript throws an error and stops execution.

Error handling prevents your application from crashing.

try

The try block contains code that might throw an error.

try {

    console.log("Trying...");

} 
catch

catch executes only if an error occurs inside try.

try {

    console.log(user.name);

}
catch(error){

    console.log("Something went wrong");

}

Output

Something went wrong

Without try/catch, the program would stop.

Accessing the Error
try {

    console.log(user.name);

}
catch(error){

    console.log(error);

}

Output

ReferenceError: user is not defined

Common properties

console.log(error.name);

console.log(error.message);

Example

ReferenceError

user is not defined
finally

finally always executes, whether an error occurs or not.

try {

    console.log("Inside try");

}
catch(error){

    console.log("Error");

}
finally{

    console.log("Always runs");

}

Output

Inside try

Always runs

If an error happens:

Error

Always runs

Real-world use:

Closing a database connection or hiding a loading spinner.

throw

You can manually create an error using throw.

Example

const age = 15;

if(age < 18){
    throw new Error("You must be at least 18 years old.");
}

console.log("Access granted");

Output

Error:
You must be at least 18 years old.

Another Example

function divide(a,b){

    if(b === 0){
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

console.log(divide(10,0));

Output

Error:
Cannot divide by zero
Custom Errors ⭐⭐⭐⭐

JavaScript lets you create your own error classes.

This is useful for making errors more meaningful.

Step 1

Create a custom error.

class ValidationError extends Error {

    constructor(message){

        super(message);

        this.name = "ValidationError";

    }

}
Step 2

Throw it.

function register(age){

    if(age < 18){

        throw new ValidationError("Age must be 18 or above.");

    }

    console.log("Registered");

}

register(15);
Step 3

Catch it.

try{

    register(15);

}
catch(error){

    console.log(error.name);

    console.log(error.message);

}

Output

ValidationError

Age must be 18 or above.
Why create custom errors?

Instead of getting a generic error:

Error

You get a meaningful error:

ValidationError

AuthenticationError

DatabaseError

PaymentError

This makes debugging and handling specific error types much easier.

Complete Example
class AgeError extends Error {

    constructor(message){
        super(message);
        this.name = "AgeError";
    }

}

function vote(age){

    if(age < 18){
        throw new AgeError("You are not eligible to vote.");
    }

    return "You can vote.";

}

try{

    console.log(vote(15));

}
catch(error){

    console.log(error.name);

    console.log(error.message);

}
finally{

    console.log("Program Finished");

}

Output

AgeError

You are not eligible to vote.

Program Finished
Flow of try...catch...finally
        Start
           │
           ▼
     Execute try
           │
     ┌─────┴─────┐
     │           │
 No Error     Error Occurs
     │           │
     ▼           ▼
 Skip catch   Execute catch
     │           │
     └─────┬─────┘
           ▼
   Execute finally
           │
           ▼
          End
⭐ Interview Rapid-Fire
What is a JavaScript module?

A JavaScript file that encapsulates related code and can export/import functionality to and from other files.

Difference between named and default exports?
Named Export	Default Export
Multiple allowed	Only one allowed
Imported with {}	Imported without {}
Name must match (unless aliased)	Can be imported with any name
Can a file have both named and default exports?

Yes. A module can export one default value and multiple named values.

What does try do?

Runs code that might throw an error.

What does catch do?

Handles errors thrown inside the corresponding try block.

Does finally always execute?

Yes. It runs whether an error occurs or not (except in rare cases like the process being terminated).

What does throw do?

Manually throws an error, allowing you to stop execution and signal an exceptional condition.

Why create custom errors?

To provide meaningful error types (like ValidationError or AuthenticationError) that make debugging and error handling more specific and maintainable.