11. Asynchronous JavaScript ⭐⭐⭐⭐⭐

Imagine you're in a restaurant.

Synchronous

The waiter takes one order, cooks it, serves it, then takes the next order.

Everything happens one after another.

Asynchronous

The waiter takes your order, gives it to the kitchen, then immediately serves other customers while your food is being prepared.

When your food is ready, he comes back.

JavaScript works similarly.

1. Synchronous vs Asynchronous ⭐⭐⭐⭐⭐
Synchronous JavaScript

Tasks execute line by line.

The next line waits until the previous one finishes.

Example:

console.log("Start");

console.log("Middle");

console.log("End");

Output

Start
Middle
End

Execution

Start
   ↓
Middle
   ↓
End

No surprises.

Problem with synchronous code

Imagine downloading a 2GB file.

downloadFile();

console.log("Finished");

If JavaScript waited...

Downloading...
(wait 20 seconds)

Finished

The entire application freezes.

Not good.

Asynchronous JavaScript

JavaScript starts a task and continues executing the rest of the code.

Example

console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 2000);

console.log("End");

Output

Start
End
Hello

Because:

Start

↓

Timer starts (2 sec)

↓

Continue immediately

↓

End

↓

2 sec later

↓

Hello
Interview Question

Is JavaScript synchronous or asynchronous?

Best answer:

JavaScript itself is single-threaded and synchronous. However, with the help of browser APIs (or Node.js APIs), it can perform asynchronous operations like timers, API calls, and file handling.

2. Callback Functions ⭐⭐⭐⭐

A callback is simply a function passed as an argument to another function.

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

Flow

processUser()

↓

callback()

↓

greet()
Arrow callback
processUser((name) => {
    console.log("Hello " + name);
});

Very common.

Real examples
setTimeout()

Array.map()

Array.filter()

addEventListener()

fetch()

All use callbacks.

3. Callback Hell ⭐⭐⭐⭐

Imagine

Step 1

↓

Step 2

↓

Step 3

↓

Step 4

Each step depends on the previous one.

With callbacks:

loginUser(function(user){

    getProfile(user,function(profile){

        getPosts(profile,function(posts){

            getComments(posts,function(comments){

                console.log(comments);

            });

        });

    });

});

Looks like:

login
   |
   getProfile
      |
      getPosts
         |
         getComments

Huge nesting.

Problems:

Hard to read
Hard to debug
Difficult to maintain

This is called

Callback Hell

Also known as

Pyramid of Doom

4. Promises ⭐⭐⭐⭐⭐

Promises solve callback hell.

A Promise represents a value that will be available now, later, or never.

Think of ordering food online.

Order placed

↓

Restaurant preparing

↓

Delivered

When ordering

You don't know the result immediately.

That's exactly what a Promise is.

Creating a promise

const promise = new Promise((resolve, reject) => {

    let success = true;

    if(success){
        resolve("Done");
    }else{
        reject("Failed");
    }

});

Using it

promise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});

Output

Done
5. Promise States ⭐⭐⭐⭐⭐

Every promise has three states.

Pending

Still working.

Downloading...
Fulfilled

Success.

Download complete
Rejected

Failed.

Network Error

Diagram

           Promise

              |

        Pending

        /      \

Fulfilled   Rejected
6. Promise Chaining ⭐⭐⭐⭐

Instead of nesting callbacks

login

↓

profile

↓

posts

↓

comments

Use

login()

.then(getProfile)

.then(getPosts)

.then(getComments)

.then(data => {
    console.log(data);
})

.catch(err => {
    console.log(err);
});

Much cleaner.

Example

Promise.resolve(5)

.then(num => num * 2)

.then(num => num + 10)

.then(console.log);

Output

20

Flow

5

↓

10

↓

20
7. async/await ⭐⭐⭐⭐⭐

async/await is just cleaner syntax built on top of Promises.

Instead of

fetch(url)
.then(res => res.json())
.then(data => console.log(data));

Write

async function getData(){

    const res = await fetch(url);

    const data = await res.json();

    console.log(data);

}

Much easier to read.

async

Makes a function return a Promise.

async function hello(){

    return "Hi";

}

Actually returns

Promise.resolve("Hi")
await

Pauses only the async function, not the entire JavaScript program.

const response = await fetch(url);

Waits until the Promise settles.

8. try...catch ⭐⭐⭐⭐⭐

Used to handle errors.

Without it

const data = await fetch(url);

If the API fails

Application crashes.

Instead

async function getData(){

    try{

        const res = await fetch(url);

        const data = await res.json();

        console.log(data);

    }

    catch(error){

        console.log(error);

    }

}

Now errors are handled safely.

9. Event Loop ⭐⭐⭐⭐⭐

This is one of the most frequently asked interview questions.

JavaScript has

One Call Stack

One Thread

Yet it can perform asynchronous tasks.

How?

Through the Event Loop.

Main components

Call Stack

↓

Browser APIs

↓

Callback Queues

↓

Event Loop

↓

Call Stack

Example

console.log("A");

setTimeout(() => {
    console.log("B");
},0);

console.log("C");

Output

A
C
B

Why?

Execution

A

↓

setTimeout()

↓

Browser Timer

↓

C

↓

Timer complete

↓

Queue

↓

Event Loop

↓

B
Event Loop Process

Imagine

Call Stack empty?

↓

YES

↓

Take first callback

↓

Execute

↓

Repeat

That's literally the Event Loop's job.

10. Microtask Queue ⭐⭐⭐⭐⭐

Microtasks have higher priority than macrotasks.

Contains:

Promise .then()
.catch()
.finally()
queueMicrotask()
MutationObserver (browser)

Example

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

Output

Start
End
Promise

Flow

Start

↓

Promise goes to Microtask Queue

↓

End

↓

Call Stack empty

↓

Run Microtask
11. Macrotask Queue ⭐⭐⭐⭐⭐

Contains tasks like:

setTimeout
setInterval
setImmediate (Node.js)
I/O callbacks
UI events

Example

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
},0);

console.log("End");

Output

Start
End
Timeout
Microtask vs Macrotask ⭐⭐⭐⭐⭐

Example

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
},0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

What do you think the output is?

Output

Start
End
Promise
Timeout

Why?

Call Stack

↓

Start

↓

Timer → Macrotask Queue

↓

Promise → Microtask Queue

↓

End

↓

Call Stack empty

↓

Run ALL Microtasks

↓

Run one Macrotask

↓

Done
Complete Event Loop Diagram
                JavaScript Engine

                   Call Stack
                       │
                       │
              (Stack becomes empty)
                       │
                       ▼
                 Event Loop checks
                       │
         ┌─────────────┴─────────────┐
         │                           │
  Microtask Queue              Macrotask Queue
 (Higher Priority)            (Lower Priority)
         │                           │
         │                           │
 Promise.then()               setTimeout()
 catch()                      setInterval()
 finally()                    UI Events
 queueMicrotask()             I/O callbacks
         │                           │
         └─────────────┬─────────────┘
                       ▼
              Callback pushed to
                  Call Stack
Interview Questions ⭐⭐⭐⭐⭐
1. Is JavaScript synchronous or asynchronous?

JavaScript is single-threaded and synchronous, but it can handle asynchronous operations using browser/Node APIs, the event loop, and callback queues.

2. What is a callback?

A function passed as an argument to another function that is executed later.

3. What is callback hell?

Deeply nested callbacks that make code hard to read, debug, and maintain.

4. Why were Promises introduced?

To avoid callback hell and provide better handling of asynchronous operations.

5. What are the three Promise states?
Pending
Fulfilled
Rejected
6. Difference between .then() and await?
.then() handles Promises using callbacks.
await pauses execution inside an async function until the Promise settles, making asynchronous code look synchronous.
7. Does await block JavaScript?

No. It only pauses the execution of the current async function. The rest of the program continues running.

8. What is the Event Loop?

The Event Loop continuously checks whether the call stack is empty. If it is, it first executes all pending microtasks, then takes the next macrotask and pushes it onto the call stack.

9. Which runs first: Promise or setTimeout?

A Promise callback (.then()) runs first because it is placed in the Microtask Queue, which has higher priority than the Macrotask Queue.

10. Explain the execution of this code.
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

Output:

1
4
3
2

Reason:

1 prints immediately.
setTimeout callback goes to the Macrotask Queue.
Promise callback goes to the Microtask Queue.
4 prints.
The call stack becomes empty.
All microtasks execute (3).
Then the next macrotask executes (2).