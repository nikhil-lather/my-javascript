Primitive	
Stores the actual value	
Immutable (cannot be changed)	
Compared by value	
Stored directly in the stack (conceptually)	

Non-Primitive
Stores a reference (memory address)
Mutable (can be changed)
Compared by reference
stored by Reference in stack, actual object in heap (conceptually)

Primitive Data Types (7)
String
let name = "Nikhil";
Number
let age = 22;
Boolean
let isStudent = true;
Undefined
let x;
console.log(x); // undefined
Null
let y = null;
BigInt
let big = 12345678901234567890n;
Symbol
let id = Symbol("id");
Non-Primitive (Reference) Types
1. Object
const person = {
  name: "Nikhil",
  age: 22
};
2. Array
const nums = [1, 2, 3];
3. Function
function greet() {
  console.log("Hello");
}

In JavaScript, arrays and functions are actually special kinds of objects.

Primitive Example
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

b gets its own copy of the value, so changing b does not affect a.

Non-Primitive Example
let obj1 = {
  name: "Nikhil"
};

let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul
console.log(obj2.name); // Rahul

Both variables point to the same object, so changing one affects the other.

Equality
Primitive
let a = 5;
let b = 5;

console.log(a === b); // true

Compared by value.

Non-Primitive
let obj1 = { name: "Nikhil" };
let obj2 = { name: "Nikhil" };

console.log(obj1 === obj2); // false

Even though they contain the same data, they are different objects in memory.

Interview Answer (30 seconds)

"JavaScript has two categories of data types: primitive and non-primitive. Primitive types include String, Number, Boolean, Undefined, Null, BigInt, and Symbol. They store the actual value, are immutable, and are compared by value. Non-primitive types include Object, Array, and Function. They store references to objects in memory, are mutable, and are compared by reference. That's why modifying one reference can affect another variable pointing to the same object."

JavaScript Execution Phases
1. Creation Phase (Memory Creation Phase)

Before executing a single line of code, JavaScript scans the entire code and allocates memory.

What happens?
Memory is allocated for variables.
Function declarations are stored completely in memory.
Variables declared with var are initialized with undefined.
Variables declared with let and const are also allocated memory but remain in the Temporal Dead Zone (TDZ) until execution reaches their declaration.
The value of this is determined.
The scope chain is created.
Example
console.log(a);
greet();

var a = 10;

function greet() {
  console.log("Hello");
}
Memory after Creation Phase
Identifier	Memory
a	undefined
greet	Entire function

No line has executed yet.

2. Execution Phase

Now JavaScript starts executing the code line by line.

Step-by-step
console.log(a);

Prints

undefined

because a was undefined during the creation phase.

greet();

Prints

Hello

because the entire function already exists in memory.

var a = 10;

Now

a = 10
Complete Example
console.log(x);
sayHi();

var x = 5;

function sayHi() {
  console.log("Hi");
}

console.log(x);
Creation Phase

Memory:

x → undefined

sayHi → function

Nothing executes.

Execution Phase
console.log(x);

Output

undefined

↓

sayHi();

Output

Hi

↓

x = 5;

↓

console.log(x);

Output

5

Final Output

undefined
Hi
5
Visual Flow
JavaScript Starts
        │
        ▼
┌────────────────────┐
│ Creation Phase     │
│ • Allocate Memory  │
│ • Hoisting         │
│ • Scope Chain      │
│ • this keyword     │
└────────────────────┘
        │
        ▼
┌────────────────────┐
│ Execution Phase    │
│ Execute line by    │
│ line               │
└────────────────────┘
        │
        ▼
Program Ends
Is this the same as the Event Loop phases?

No. That's a different concept.

JavaScript has:

Execution Context Phases (Creation → Execution) ✅
Event Loop (Call Stack, Web APIs, Callback Queue, Microtask Queue, etc.) ✅
Promise lifecycle (Pending → Fulfilled/Rejected) ✅

These are separate concepts that are often confused in interviews.

For MERN/JavaScript interviews, the Creation Phase and Execution Phase are the ones people usually mean when they ask about JavaScript phases.