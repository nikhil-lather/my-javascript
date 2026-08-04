explain in same way 
5. Objects
Creating Objects
Accessing Properties
Methods
this Keyword
Object Destructuring
Object Methods (keys, values, entries, assign)
Optional Chaining (?.)

Absolutely! This is another high-frequency JavaScript interview topic. Understanding Objects is essential because almost everything in JavaScript is an object (except primitive values).

5. Objects

An object is a collection of key-value pairs.

Keys are called properties.
Values can be anything:
String
Number
Boolean
Array
Object
Function (called a method)

Example:

const person = {
    name: "Nikhil",
    age: 22,
    isStudent: true
};

console.log(person);

Output

{
  name: "Nikhil",
  age: 22,
  isStudent: true
}
1. Creating Objects

There are multiple ways to create objects.

Method 1 (Most Common) - Object Literal
const person = {
    name: "Nikhil",
    age: 22,
    city: "Delhi"
};

console.log(person);
Method 2 - new Object()
const person = new Object();

person.name = "Nikhil";
person.age = 22;

console.log(person);

Output

{
  name: "Nikhil",
  age: 22
}
Method 3 - Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p1 = new Person("Nikhil", 22);

console.log(p1);

Output

Person { name: "Nikhil", age: 22 }
Method 4 - Object.create()
const person = {
    greet() {
        console.log("Hello");
    }
};

const user = Object.create(person);

user.greet();

Output

Hello
Interview Question

Which way is used most?

Answer:

Object Literal

because it is simple and readable.

2. Accessing Properties

There are two ways to access object properties.

Dot Notation
const person = {
    name: "Nikhil",
    age: 22
};

console.log(person.name);

Output

Nikhil
Bracket Notation
console.log(person["name"]);

Output

Nikhil
Why Bracket Notation?

Useful when the property name is dynamic.

const key = "age";

console.log(person[key]);

Output

22
Adding Properties
person.city = "Delhi";

console.log(person);
Updating Properties
person.age = 23;
Deleting Properties
delete person.city;
Dot vs Bracket
Dot	Bracket
Simple	Dynamic
Faster to type	Uses variables
person.name	person[key]
Interview Question

When should you use bracket notation?

Whenever the property name is stored inside a variable.

3. Methods

A method is simply a function inside an object.

Example

const person = {

    name: "Nikhil",

    greet: function(){

        console.log("Hello");

    }

};

person.greet();

Output

Hello
ES6 Method Syntax
const person = {

    name: "Nikhil",

    greet(){

        console.log("Hello");

    }

};

Method with parameters

const person = {

    greet(name){

        console.log("Hello " + name);

    }

};

person.greet("Rahul");

Output

Hello Rahul
4. this Keyword

One of the most important interview topics.

this refers to the object that is calling the method.

Example

const person = {

name: "Nikhil",

greet(){

console.log(this.name);

}

};

person.greet();

Output

Nikhil
Without this
const person = {

name: "Nikhil",

greet(){

console.log(name);

}

};

person.greet();

Output

ReferenceError
Arrow Function Problem
const person = {

name:"Nikhil",

greet:()=>{

console.log(this.name);

}

};

person.greet();

Output

undefined

Arrow functions don't have their own this.

Correct Way
const person = {

name:"Nikhil",

greet(){

console.log(this.name);

}

};
this in Normal Function
function test(){

console.log(this);

}

test();
Browser (non-strict mode): window
Strict mode: undefined
Node.js: depends on module context
Interview Question

Why avoid arrow functions for object methods?

Because arrow functions inherit this from their surrounding scope instead of binding it to the object.

5. Object Destructuring

Extract properties into variables.

Without destructuring

const person = {

name:"Nikhil",

age:22

};

const name = person.name;

const age = person.age;

With destructuring

const {name,age}=person;

console.log(name);

console.log(age);

Output

Nikhil
22
Rename Variables
const {name:fullName}=person;

console.log(fullName);
Default Values
const {city="Delhi"}=person;

console.log(city);

Output

Delhi
Nested Destructuring
const person={

name:"Nikhil",

address:{

city:"Delhi"

}

};

const{

address:{city}

}=person;

console.log(city);

Output

Delhi
6. Object Methods
Object.keys()

Returns all keys.

const person={

name:"Nikhil",

age:22

};

console.log(Object.keys(person));

Output

["name","age"]
Object.values()

Returns all values.

console.log(Object.values(person));

Output

["Nikhil",22]
Object.entries()

Returns key-value pairs.

console.log(Object.entries(person));

Output

[
["name","Nikhil"],
["age",22]
]

Loop using entries

for(const [key,value] of Object.entries(person)){

console.log(key,value);

}

Output

name Nikhil

age 22
Object.assign()

Copies or merges objects.

const obj1={

a:1

};

const obj2={

b:2

};

const obj3=Object.assign({},obj1,obj2);

console.log(obj3);

Output

{
a:1,
b:2
}
Better Alternative (Spread Operator)
const obj3={

...obj1,

...obj2

};
Interview Question

Difference between Object.assign() and Spread?

Both merge objects.

Spread is cleaner and preferred in modern JavaScript.

7. Optional Chaining (?.)

Introduced in ES2020.

Safely access nested properties without throwing errors.

Without optional chaining

const person={};

console.log(person.address.city);

Output

TypeError

With optional chaining

const person={};

console.log(person.address?.city);

Output

undefined

No error occurs.

Deep Example

const user={

profile:{

name:"Nikhil"

}

};

console.log(user.profile?.name);

console.log(user.address?.city);

Output

Nikhil

undefined

Optional Chaining with Methods

const person={};

person.greet?.();

If greet doesn't exist, nothing happens instead of throwing an error.

Interview Question

What problem does Optional Chaining solve?

It prevents runtime errors when trying to access properties or methods that may not exist.