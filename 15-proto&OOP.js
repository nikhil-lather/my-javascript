14. Prototypes & OOP ⭐⭐⭐⭐
Prototype
Prototype Chain
Constructor Functions
Classes
Inheritance
Encapsulation
Polymorphism

5. Inheritance ⭐⭐⭐⭐⭐

Inheritance means

One class or object can reuse properties and methods from another.

Example

class Animal{

    eat(){

        console.log("Eating");

    }

}

Now create another class.

class Dog extends Animal{

    bark(){

        console.log("Woof");

    }

}

Usage

const d = new Dog();

d.eat();

d.bark();

Output

Eating
Woof

Memory

Dog

↓

Animal

↓

Object
Using super()
class Animal{

    constructor(name){

        this.name = name;

    }

}

class Dog extends Animal{

    constructor(name){

        super(name);

    }

}

super() calls the parent class constructor.

14. Prototypes & OOP ⭐⭐⭐⭐⭐
First, What is OOP?

OOP (Object-Oriented Programming) is a programming paradigm where we organize code using objects.

Instead of writing separate variables and functions:

let name = "Nikhil";
let age = 22;

function greet() {
    console.log("Hello");
}

We group related data and behavior together.

const user = {

    name: "Nikhil",

    age: 22,

    greet() {
        console.log("Hello");
    }

};

Now everything related to a user is inside one object.

JavaScript is Prototype-Based ⭐⭐⭐⭐⭐

Unlike Java or C++, JavaScript does not use classical inheritance internally.

It uses Prototypes.

Even though JavaScript now has class syntax, behind the scenes it still uses prototypes.

Interview Answer:

JavaScript is a prototype-based language. ES6 classes are syntactic sugar over the prototype system.

1. Prototype ⭐⭐⭐⭐⭐
What is a Prototype?

Every JavaScript object has an internal link to another object called its prototype.

If JavaScript cannot find a property on the current object, it looks in its prototype.

Think of it like this:

Student

↓

Teacher

↓

Principal

If the student doesn't know the answer,

he asks the teacher.

If the teacher doesn't know,

he asks the principal.

JavaScript works the same way.

Example

const person = {

    greet() {

        console.log("Hello");

    }

};

const user = {

    name: "Nikhil"

};

Object.setPrototypeOf(user, person);

user.greet();

Output

Hello

Question:

Where is greet()?

Not inside user.

JavaScript searched the prototype.

Memory

user

name

↓

Prototype

↓

person

↓

greet()
Every object has a prototype
const obj = {};

console.log(obj.__proto__);

or the modern way:

console.log(Object.getPrototypeOf(obj));
2. Prototype Chain ⭐⭐⭐⭐⭐

If JavaScript doesn't find a property,

it keeps searching upward.

Example

const animal = {

    eats() {

        console.log("Eating");

    }

};

const dog = {

    bark() {

        console.log("Woof");

    }

};

Object.setPrototypeOf(dog, animal);

const puppy = {

    name: "Tommy"

};

Object.setPrototypeOf(puppy, dog);

puppy.eats();

Output

Eating

Search process

puppy

↓

dog

↓

animal

↓

Object.prototype

↓

null

This search path is called the Prototype Chain.

Property Lookup
const person = {

    age: 22

};

const user = {

    name: "Nikhil"

};

Object.setPrototypeOf(user, person);

console.log(user.age);

JavaScript checks

user.age ?

↓

Not Found

↓

person.age ?

↓

Found

↓

22
Prototype Chain Ends at null

Every prototype chain eventually ends.

Object

↓

Object.prototype

↓

null

null means there is no further object to search.

3. Constructor Functions ⭐⭐⭐⭐⭐

Before ES6 classes,

JavaScript used constructor functions.

Example

function Person(name, age) {

    this.name = name;

    this.age = age;

}

Creating objects

const user1 = new Person("Nikhil",22);

const user2 = new Person("Rahul",24);

Output

Person {

name: "Nikhil",

age:22

}
What does new do?

When you write

const user = new Person("Nikhil",22);

JavaScript performs these steps:

Creates a new empty object

{}

Links it to

Person.prototype

Sets

this

to that new object.

Returns the object automatically.

Adding Methods

Bad approach

function Person(name) {

    this.name = name;

    this.greet = function() {

        console.log("Hello");

    };

}

Problem

Every object gets its own copy of greet().

Memory Waste

User1

greet()

---------------

User2

greet()

---------------

User3

greet()

Better approach

function Person(name) {

    this.name = name;

}

Person.prototype.greet = function(){

    console.log("Hello");

};

Now

All objects share one method.

User1

↓

Prototype

↓

greet()

↑

User2

↑

User3

Much more efficient.

4. Classes ⭐⭐⭐⭐⭐

ES6 introduced Classes.

Instead of

function Person(name){

    this.name = name;

}

Write

class Person{

    constructor(name){

        this.name = name;

    }

    greet(){

        console.log("Hello");

    }

}

Creating objects

const user = new Person("Nikhil");

user.greet();

Output

Hello
Constructor

The constructor runs automatically when creating an object.

class Person{

    constructor(name){

        this.name = name;

    }

}
Constructor Function vs Class

Constructor Function

function Person(name){

    this.name = name;

}

Class

class Person{

    constructor(name){

        this.name = name;

    }

}

Both create objects.

The class syntax is cleaner and easier to read.

Behind the scenes, classes still use prototypes.

5. Inheritance ⭐⭐⭐⭐⭐

Inheritance means

One class or object can reuse properties and methods from another.

Example

class Animal{

    eat(){

        console.log("Eating");

    }

}

Now create another class.

class Dog extends Animal{

    bark(){

        console.log("Woof");

    }

}

Usage

const d = new Dog();

d.eat();

d.bark();

Output

Eating
Woof

Memory

Dog

↓

Animal

↓

Object
Using super()
class Animal{

    constructor(name){

        this.name = name;

    }

}

class Dog extends Animal{

    constructor(name){

        super(name);

    }

}

super() calls the parent class constructor.

6. Encapsulation ⭐⭐⭐⭐

Encapsulation means

Keeping data and methods together while hiding unnecessary details.

Think of an ATM.

You can

Withdraw

Deposit

Check Balance

But you cannot directly access its internal software.

Modern JavaScript supports private fields using #.

class Bank{

    #balance = 0;

    deposit(amount){

        this.#balance += amount;

    }

    showBalance(){

        console.log(this.#balance);

    }

}

const b = new Bank();

b.deposit(1000);

b.showBalance();

Output

1000

Trying this

console.log(b.#balance);

Produces an error because #balance is private.

7. Polymorphism ⭐⭐⭐⭐

Polymorphism means

The same method name behaves differently for different objects.

Example

class Animal{

    speak(){

        console.log("Animal sound");

    }

}

Child class

class Dog extends Animal{

    speak(){

        console.log("Woof");

    }

}

Another child

class Cat extends Animal{

    speak(){

        console.log("Meow");

    }

}

Usage

const dog = new Dog();

const cat = new Cat();

dog.speak();

cat.speak();

Output

Woof
Meow

Same method

speak()

Different behavior.

That's polymorphism.

Complete OOP Flow
Class

↓

Constructor

↓

Object Created

↓

Prototype

↓

Methods Shared

↓

Inheritance

↓

Polymorphism

↓

Encapsulation
Real MERN Example

Imagine you're building an e-commerce application.

class User{

    login(){

        console.log("Login");

    }

}

class Admin extends User{

    deleteProduct(){

        console.log("Deleted");

    }

}

class Customer extends User{

    placeOrder(){

        console.log("Ordered");

    }

}

Now

const admin = new Admin();

admin.login();

admin.deleteProduct();

Admin inherits login functionality from User and has its own additional method.

Frequently Asked Interview Questions ⭐⭐⭐⭐⭐
1. What is a Prototype?

A prototype is an object that another object inherits properties and methods from. If a property isn't found on the object itself, JavaScript searches its prototype.

2. What is the Prototype Chain?

The prototype chain is the sequence JavaScript follows when searching for a property:

Object

↓

Prototype

↓

Prototype

↓

Object.prototype

↓

null

The search stops when the property is found or the chain reaches null.

3. Difference between Constructor Function and Class?
Constructor Function	Class
Introduced before ES6	Introduced in ES6
Uses function syntax	Uses class syntax
Methods usually added to prototype manually	Methods are placed on the prototype automatically
More verbose	Cleaner and easier to read
4. Does JavaScript support OOP?

Yes.

JavaScript supports OOP through its prototype-based inheritance. ES6 classes provide a cleaner syntax but internally still rely on prototypes.

5. What is Inheritance?

A child class or object acquires the properties and methods of a parent class or object, allowing code reuse.

6. What is Encapsulation?

Encapsulation is the practice of combining data and methods into a single unit and restricting direct access to internal data. In modern JavaScript, private fields (#) help achieve this.

7. What is Polymorphism?

Polymorphism allows the same method name to have different implementations in different classes or objects.

8. Difference between __proto__ and prototype? ⭐⭐⭐⭐⭐

This is one of the most common interview questions.

prototype	__proto__
Property of constructor functions/classes	Property of object instances
Used to define shared methods for future objects	Points to the object's prototype
Exists on functions	Exists on objects

Example:

function Person() {}

const user = new Person();

console.log(Person.prototype);      // Prototype object used for new instances
console.log(user.__proto__);        // Same object as Person.prototype

console.log(user.__proto__ === Person.prototype); // true
9. Why put methods on the prototype instead of inside the constructor?

Putting methods on the prototype means all instances share a single copy of the method, reducing memory usage. If methods are defined inside the constructor, every object gets its own copy.