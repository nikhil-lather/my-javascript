12. Closures ⭐⭐⭐⭐⭐
What is a Closure?

A closure is created when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.

Simple Definition (Interview)

A closure is a function that has access to its outer function's variables even after the outer function has returned.

Why do Closures exist?

Normally, local variables disappear after a function finishes.

Example:

function test() {
    let x = 10;
}

test();

// x no longer exists

But what if another function still needs x?

Closures make that possible.

Lexical Environment ⭐⭐⭐⭐⭐

Before understanding closures, understand Lexical Environment.

Lexical means

Where the function was written, not where it was called.

JavaScript determines variable access based on where the code is written.

Example

let city = "Delhi";

function outer() {

    let name = "Nikhil";

    function inner() {

        console.log(name);
        console.log(city);

    }

    inner();
}

outer();

Output

Nikhil
Delhi

Why?

Global Scope

city

↓

outer()

name

↓

inner()

Can access

name ✔

city ✔

The inner() function first looks inside itself.

If not found,

it checks the outer function,

then global scope.

This searching process is called the Lexical Scope Chain.

First Closure Example ⭐⭐⭐⭐⭐
function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;

}

const fn = outer();

fn();

Output

Hello
What happened?

Step 1

outer()

↓

message = "Hello"

Step 2

return inner

Notice:

We didn't execute it.

We returned the function itself.

return inner

NOT

return inner()

Step 3

const fn = outer();

Now

fn

↓

points to inner()

Step 4

Later

fn();

Even though outer() already finished,

inner() still remembers

message = "Hello"

This remembered memory is called a Closure.

Memory Diagram
outer()

message = "Hello"

↓

returns inner

↓

outer removed from Call Stack

↓

Closure keeps

message alive

↓

fn()

↓

Hello
Another Closure Example
function counter() {

    let count = 0;

    return function () {

        count++;

        console.log(count);

    };

}

const increment = counter();

increment();
increment();
increment();

Output

1
2
3

Question:

How is count not resetting to 0?

Because of the closure.

The returned function remembers the same count variable.

Memory

count = 0

↓

increment()

count = 1

↓

increment()

count = 2

↓

increment()

count = 3
Multiple Closures
const c1 = counter();

const c2 = counter();

c1();

c1();

c2();

c2();

Output

1
2
1
2

Why?

Each call to counter() creates a new closure.

Closure 1

count = 2

---------------

Closure 2

count = 2

Both are independent.

Practical Uses of Closures ⭐⭐⭐⭐⭐
1. Data Privacy
function bankAccount() {

    let balance = 5000;

    return {

        deposit(amount) {

            balance += amount;

            console.log(balance);

        }

    };

}

const account = bankAccount();

account.deposit(1000);

Notice

balance

cannot be accessed directly.

Only through the returned methods.

This provides data privacy.

2. Counters
function counter() {

    let count = 0;

    return () => ++count;

}

const c = counter();

console.log(c());

console.log(c());

console.log(c());

Output

1
2
3
3. Timers
function greet(name) {

    setTimeout(() => {

        console.log(name);

    },2000);

}

greet("Nikhil");

Even after greet() finishes,

setTimeout() remembers name.

Closure!

4. React

Hooks like

useState()

useEffect()

useRef()

internally rely on closures to remember state across renders.

Interview Questions ⭐⭐⭐⭐⭐
What is a Closure?

A closure is a function that remembers variables from its lexical environment even after the outer function has completed execution.

Why are Closures useful?
Data hiding
Private variables
Counters
Memoization
Event handlers
React Hooks
Can Closures cause memory leaks?

Yes.

If a closure unnecessarily keeps references to large objects that are no longer needed, memory cannot be garbage-collected.

Difference between Lexical Scope and Closure?

Lexical Scope

Defines where variables can be accessed based on where functions are written.

Closure

Allows an inner function to remember those variables even after the outer function has finished.