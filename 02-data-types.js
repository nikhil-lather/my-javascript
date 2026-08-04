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