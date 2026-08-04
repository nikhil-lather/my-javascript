JavaScript Revision Roadmap (Basic → Advanced)
Phase 1 - JavaScript Fundamentals

1. Introduction to JavaScript
   What is JavaScript?
   How JS works in browser
   JS Engine
   ECMAScript
   Interpreter vs Compiler vs JIT
   Notes

JavaScript is a high-level, interpreted programming language used to create interactive web pages.

It can run on:

Browser
Server (Node.js)

Example

console.log("Hello World"); 2. Variables

Topics

var
let
const
Variable Naming
Scope
Hoisting

Notes

var

Function scoped
Can be redeclared
Can be updated
Hoisted and initialized with undefined
var a = 10;

let

Block scoped
Cannot redeclare
Can update
let age = 22;
age = 23;

const

Block scoped
Cannot redeclare
Cannot reassign
const PI = 3.14;

Difference

var let const
Function Scope Block Scope Block Scope
Redeclare ✅ ❌ ❌
Reassign ✅ ✅ ❌ 3. Data Types

Primitive

Number
String
Boolean
Undefined
Null
BigInt
Symbol

Non-primitveReference

Object
Array
Function

Example

let name = "Nikhil";
let age = 22;
let isStudent = true;
let user = {
city:"Delhi"
} 4. Operators

Topics

Arithmetic

-

*

- /
  %
  \*\*

Comparison

# ==

!=
!==
<

> # <=

Logical

&&
||
!

Assignment

=
+=
-=
\*=

Ternary

condition ? true : false 5. Type Conversion

Implicit

"5" + 2
// "52"

Explicit

Number("25")
String(25)
Boolean(1) 6. Truthy and Falsy

Falsy Values

false
0
-0
0n
""
null
undefined
NaN

Everything else is Truthy.

7. Control Flow

if

if(age>=18){
console.log("Adult");
}

if else

Nested if

switch

switch(day){

} 8. Loops

for

while

do while

for...of

for...in

Example

for(let i=0;i<5;i++){
console.log(i);
} 9. Functions

Topics

Function Declaration

Function Expression

Arrow Function

Anonymous Function

Callback Function

IIFE

Higher Order Function

Default Parameters

Rest Parameters

Spread Operator

Arguments Object

Return Keyword

Function Declaration

function greet(){
console.log("Hello");
}

Arrow Function

const greet=()=>{
console.log("Hello");
} 10. Scope

Global Scope

Function Scope

Block Scope

Lexical Scope

11. Hoisting

Variables and functions are moved to the top before execution.

console.log(a);

var a=5;

Output

undefined 12. Closures ⭐

Definition

A closure is when a function remembers variables from its outer function even after the outer function has finished executing.

Example

function outer(){

let count=0;

return function(){

count++;

console.log(count);

}

}

const counter=outer();

counter();

counter();

Output

1
2 13. Execution Context

Topics

Global Execution Context

Function Execution Context

Call Stack

Memory Creation Phase

Execution Phase

14. Call Stack

LIFO structure

Functions execute one by one.

15. Objects

Create Object

Access Properties

Nested Object

Methods

Object.keys()

Object.values()

Object.entries()

Destructuring

Spread

Freeze

Seal

16. Arrays

Topics

push()

pop()

shift()

unshift()

slice()

splice()

concat()

includes()

indexOf()

find()

findIndex()

filter()

map()

reduce()

every()

some()

sort()

reverse()

flat()

flatMap()

Array.from()

Array.of()

17. Strings

Methods

length
slice
substring
replace
replaceAll
split
trim
includes
startsWith
endsWith
repeat
toUpperCase
toLowerCase 18. Numbers

Math Object

Math.floor
Math.ceil
Math.round
Math.random
Math.max
Math.min
Math.abs 19. Dates

Create Date

Current Date

Formatting

Timestamp

Phase 2 Intermediate JavaScript
DOM

Topics

Selecting Elements

getElementById

querySelector

querySelectorAll

Modify Elements

innerHTML

innerText

textContent

Attributes

setAttribute

removeAttribute

Create Elements

Append

Remove

Clone

Replace

ClassList

Dataset

Events

Topics

onclick

addEventListener

Event Object

preventDefault

stopPropagation

Event Bubbling

Event Capturing

Event Delegation ⭐

BOM

Window

Location

History

Navigator

Screen

Timers
setTimeout()

setInterval()

clearTimeout()

clearInterval()
Local Storage

Session Storage

Cookies

JSON

JSON.stringify()

JSON.parse()
Phase 3 Advanced JavaScript
Objects Deep Dive

this keyword

call()

apply()

bind()

Prototype

Prototype Chain

Object.create()

Constructor Functions

ES6 Classes

Inheritance

Private Fields

Static Methods

Error Handling
try

catch

finally

throw

Custom Errors

Modules

CommonJS

ES Modules

import

export

default export
Asynchronous JavaScript ⭐⭐⭐

Callbacks

Callback Hell

Promises

Promise States

Promise Chaining

catch

finally

async await

fetch API

Axios

XMLHttpRequest (basic idea)

Promise.all

Promise.race

Promise.allSettled

Promise.any

AbortController

Event Loop ⭐⭐⭐⭐⭐

Must Know

Call Stack

Web APIs

Microtask Queue

Callback Queue

Rendering

Execution Order

Interview Questions

console.log(1);

setTimeout(()=>{

console.log(2);

},0);

Promise.resolve().then(()=>{

console.log(3);

});

console.log(4);

Output

1
4
3
2

Know why this happens.

Memory Management

Stack Memory

Heap Memory

Garbage Collection

Memory Leaks

Advanced Functions

Currying

Partial Application

Memoization

Debouncing ⭐

Throttling ⭐

Higher Order Functions

Pure Functions

Factory Functions

Composition

Regular Expressions

Pattern Matching

Validation

Replace

Search

Groups

Flags

Advanced Array Methods
reduce()

reduceRight()

flat()

flatMap()

entries()

keys()

values()
Iterators

Generator Functions

function\* demo(){

yield 1;

yield 2;

}
Symbol

Unique Properties

BigInt

Large Numbers

WeakMap

WeakSet

Optional Chaining
user?.address?.city
Nullish Coalescing
let age = value ?? 18;
Destructuring

Object

Array

Nested

Spread

Rest

Template Literals
Short Circuiting
&&

||

??
Strict Mode
"use strict";
JavaScript Interview Topics (Must Revise)
Difference between == and ===
null vs undefined
let vs var vs const
Hoisting
Scope
Closures
Execution Context
Call Stack
Event Loop
Callback Queue
Microtask Queue
Promises
Async/Await
this keyword
call(), apply(), bind()
Prototype & Prototype Chain
Event Delegation
Event Bubbling vs Capturing
Debouncing vs Throttling
Shallow Copy vs Deep Copy
Pass by Value vs Pass by Reference
Map vs Object
Set vs Array
Local Storage vs Session Storage vs Cookies
Arrow Function vs Normal Function
for...of vs for...in
slice() vs splice()
map() vs forEach()
find() vs filter()
Object.freeze() vs Object.seal()
CommonJS vs ES Modules
Promise.all() vs Promise.race() vs Promise.allSettled() vs Promise.any()
Recommendation for your MERN preparation

Based on your previous messages, you're aiming to become interview-ready for MERN development. I recommend studying one JavaScript topic per day in this order:

Fundamentals (variables, data types, operators)
Functions, scope, hoisting, closures
Objects and arrays (including all important methods)
DOM and events
Asynchronous JavaScript (callbacks, promises, async/await, fetch)
Event Loop and execution context
Prototypes, this, call, apply, bind
ES6+ features (destructuring, spread, modules, optional chaining, etc.)
Advanced concepts (debouncing, throttling, generators, memory, regex)
