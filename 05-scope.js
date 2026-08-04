4. Scope & Execution
 Global Scope
  Function Scope
   Block Scope
    Lexical Scope
     Hoisting 
     Temporal Dead Zone (TDZ)
      Execution Context
       Call Stack

       4. Scope & Execution

Scope determines where variables and functions are accessible.

Execution determines how JavaScript runs your code.

Imagine your code as a company:

Scope = Which employees can access which rooms.
Execution Context = Office created for each task.
Call Stack = Queue of offices being worked on.
1. Global Scope

A variable declared outside any function or block belongs to the Global Scope.

It can be accessed from anywhere in the program.

Example

let name = "Nikhil";

function greet() {
    console.log(name);
}

console.log(name);
greet();

Output

Nikhil
Nikhil

Both the function and global code can access name.

Another Example
const age = 22;

if (true) {
    console.log(age);
}

function test() {
    console.log(age);
}

Output

22
22
Global Variables
let city = "Delhi";
const country = "India";
var state = "Haryana";

All are globally accessible.

Interview Question
Why should we avoid too many global variables?

Because they

Pollute the global namespace
Can accidentally be modified
Make debugging difficult

Example

let score = 100;

// hundreds of lines later...

score = 0;

Finding where score changed becomes difficult.

2. Function Scope

Variables declared inside a function exist only inside that function.

Example

function greet() {

    let message = "Hello";

    console.log(message);

}

greet();

console.log(message);

Output

Hello
ReferenceError

message dies when the function finishes.

Another Example
function add(a, b) {

    let sum = a + b;

    return sum;

}

console.log(add(2,3));

console.log(sum);

Output

5
ReferenceError
var is Function Scoped
function test(){

var x = 10;

}

console.log(x);

Output

ReferenceError
3. Block Scope

A block is anything inside {}.

Variables declared with

let
const

exist only inside that block.

Example

if(true){

let age = 22;

console.log(age);

}

console.log(age);

Output

22
ReferenceError

Example with Loop

for(let i=1;i<=3;i++){

console.log(i);

}

console.log(i);

Output

1
2
3
ReferenceError
var ignores block scope
if(true){

var x = 100;

}

console.log(x);

Output

100

This is one reason let and const are preferred over var.

Function Scope vs Block Scope
function test(){

if(true){

var a = 10;

let b = 20;

}

console.log(a);

console.log(b);

}

test();

Output

10
ReferenceError
Interview Question

Which keywords are block scoped?

Answer:

let
const

Which keyword is function scoped?

var
4. Lexical Scope

One of the most important JavaScript concepts.

A child function can access variables of its parent.

But the parent cannot access variables of the child.

Example

function outer(){

let name = "Nikhil";

function inner(){

console.log(name);

}

inner();

}

outer();

Output

Nikhil

Nested Example

let company = "Google";

function department(){

let team = "Frontend";

function employee(){

let emp = "Rahul";

console.log(company);

console.log(team);

console.log(emp);

}

employee();

}

department();

Output

Google
Frontend
Rahul

Parent cannot access child variables

function outer(){

function inner(){

let secret = "JS";

}

console.log(secret);

}

outer();

Output

ReferenceError
Why is it called Lexical Scope?

Because JavaScript determines scope based on where functions are written, not where they are called.

Interview Question

Lexical Scope is the foundation of

Closures
Callbacks
React Hooks
5. Hoisting

Hoisting means JavaScript moves declarations to the top during the creation phase.

Only declarations are hoisted—not initializations.

var Hoisting
console.log(a);

var a = 10;

JavaScript internally treats it like:

var a;

console.log(a);

a = 10;

Output

undefined
let Hoisting
console.log(age);

let age = 20;

Output

ReferenceError
const Hoisting
console.log(name);

const name = "Nikhil";

Output

ReferenceError
Function Hoisting
greet();

function greet(){

console.log("Hello");

}

Output

Hello

Entire function is hoisted.

Function Expression
greet();

const greet = function(){

console.log("Hello");

}

Output

ReferenceError
Hoisting Summary
Keyword	Hoisted	Initial Value
var	Yes	undefined
let	Yes	TDZ
const	Yes	TDZ
Function Declaration	Yes	Entire function
Function Expression	Variable only	TDZ or undefined depending on declaration
6. Temporal Dead Zone (TDZ)

One of the favorite interview questions.

TDZ is the time between

variable creation
variable initialization

during which the variable cannot be accessed.

Example

console.log(age);

let age = 22;

Output

ReferenceError

Timeline

Memory Created
↓

age exists

↓

TDZ

↓

let age = 22

↓

TDZ Ends

Another Example

{

console.log(city);

let city = "Delhi";

}

Output

ReferenceError
Why does TDZ exist?

To prevent accidental usage of variables before they are initialized, making code safer and easier to debug.

var has NO TDZ
console.log(a);

var a = 5;

Output

undefined
Interview Question

Difference between

undefined

and

ReferenceError

var

undefined

let & const

ReferenceError

because of TDZ.

7. Execution Context

Execution Context is the environment in which JavaScript executes code.

Every time JavaScript runs something, it creates an execution context.

There are three main types:

Global Execution Context (GEC)
Function Execution Context (FEC)
Eval Execution Context (rarely used)
Global Execution Context

Created first.

Example

let x = 10;

function greet(){

console.log("Hello");

}

greet();

When execution starts

Global Execution Context Created

It stores

Variables
Functions
Global object
this
Function Execution Context

Every function call creates a new execution context.

Example

function add(a,b){

return a+b;

}

add(2,3);

add(5,6);

Two different function execution contexts are created.

Execution Context has Two Phases
1. Memory Creation Phase

JavaScript scans the code.

Stores:

Variables
Functions

Example

var a;
function greet(){}

Memory

a → undefined

greet → function
2. Execution Phase

Assignments happen.

a = 10;

Now

a → 10
Interview Question

What happens before JavaScript executes code?

Answer:

JavaScript first creates the execution context, allocates memory for variables and functions (creation phase), and then executes the code line by line (execution phase).

8. Call Stack

The Call Stack keeps track of which function is currently executing.

It follows the LIFO (Last In, First Out) principle.

Example

function one(){

two();

}

function two(){

three();

}

function three(){

console.log("Hello");

}

one();

Execution

Call Stack

---------
Global
---------

one()

---------
Global
one
---------

two()

---------
Global
one
two
---------

three()

---------
Global
one
two
three
---------

three finishes

---------
Global
one
two
---------

two finishes

---------
Global
one
---------

one finishes

---------
Global
---------

Output

Hello

Another Example

function a(){

console.log("A");

}

function b(){

a();

console.log("B");

}

b();

Call Stack

Global

↓

b()

↓

a()

↓

a finishes

↓

b finishes

↓

Global Ends

Output

A
B
Stack Overflow

Infinite recursion causes the call stack to keep growing until it runs out of space.

function test(){

test();

}

test();

Output

RangeError:
Maximum call stack size exceeded
Complete Scope Hierarchy
Global Scope

│

├── Function Scope

│      │

│      ├── Block Scope

│      │

│      └── Inner Function (Lexical Scope)

│

└── Another Function
Common Interview Questions
1. What is the difference between Global Scope and Function Scope?
Global Scope: Variables are accessible everywhere.
Function Scope: Variables are accessible only within the function where they are declared.
2. What is Block Scope?

Variables declared with let and const inside {} are only accessible within that block.

3. What is Lexical Scope?

A function can access variables from its outer (parent) scope, but the parent cannot access variables declared inside the child function.

4. What is Hoisting?

Hoisting is JavaScript's behavior of processing declarations before executing code. Function declarations are fully hoisted, while var is initialized with undefined, and let/const remain in the Temporal Dead Zone until initialized.

5. What is the Temporal Dead Zone (TDZ)?

The period between a variable's creation and its initialization during which accessing a let or const variable throws a ReferenceError.

6. What is an Execution Context?

The environment in which JavaScript executes code. It contains variables, functions, the scope chain, and the value of this.

7. What are the two phases of an Execution Context?
Memory Creation Phase – Memory is allocated for variables and functions.
Execution Phase – Code executes line by line and variables receive their assigned values.
8. What is the Call Stack?

A LIFO (Last In, First Out) data structure that tracks function calls. Every function call is pushed onto the stack, and when it finishes, it is popped off.

💡 Interview Tips
Understand the difference between Global, Function, Block, and Lexical Scope—they are frequently asked.
Be able to explain why var behaves differently from let and const.
Remember that hoisting doesn't mean variables are initialized; let and const are hoisted but remain in the TDZ.
Practice tracing the Call Stack and Execution Context step by step, as many interviewers ask you to predict the output of code snippets involving these concepts.