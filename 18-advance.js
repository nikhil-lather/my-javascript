17. Advanced JavaScript ⭐⭐⭐⭐⭐
Debouncing
Throttling
Memoization
Currying
Pure Functions
Higher-Order Functions
Generators (basic)
Iterators (basic)

1. Debouncing
Interview Definition

Debouncing ensures that a function executes only after a specified delay once the user stops triggering the event.

It ignores repeated calls until the user pauses.

Why do we use it?

Imagine searching on Amazon.

Every key press shouldn't call the API.

Instead,

N
Ni
Nik
Nikh
Nikhi
Nikhil

Without debounce

6 API calls

With debounce

Only 1 API call
(after user stops typing)

Huge performance improvement.

Visual

Without debounce

Typing

|A|B|C|D|

API
↑ ↑ ↑ ↑

With debounce

Typing

|A|B|C|D|

(wait)

API
      ↑
Real-world Uses
Search bar
Auto-save
Resize event
Form validation
Example
function debounce(fn, delay) {
    let timer;

    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);

    };
}

function search(value) {
    console.log("Searching:", value);
}

const debouncedSearch = debounce(search, 1000);

debouncedSearch("N");
debouncedSearch("Ni");
debouncedSearch("Nik");
debouncedSearch("Nikhil");

Output

(after 1 second)

Searching: Nikhil
Interview Question

Why clearTimeout()?

Because every new event cancels the previous timer.

Only the latest timer runs.

2. Throttling
Definition

Throttling allows a function to execute only once during a specified time interval.

Even if called 100 times.

Example

Scroll event

Without throttle

Scroll
Scroll
Scroll
Scroll

200 function calls

With throttle

Only every 500ms
Difference

Debounce

Runs AFTER user stops

Throttle

Runs DURING activity
Visual
Events

|||||||||||||||||

Throttle

|----|----|----|
Example
function throttle(fn, delay) {

    let lastTime = 0;

    return function (...args) {

        const now = Date.now();

        if (now - lastTime >= delay) {
            fn(...args);
            lastTime = now;
        }

    };

}

function scrollHandler() {
    console.log("Scrolling");
}

const throttled = throttle(scrollHandler, 1000);

window.addEventListener("scroll", throttled);
Real-world
Scroll
Mouse movement
Window resize
Game controls

Debounce vs 
Debounce	Throttle
Waits until activity stops	
Search	
Auto-save
Last event matters	

Throttle
Runs at fixed intervals
Scroll
Mouse move
Continuous updates matter
3. Memoization
Definition

Memoization stores previously calculated results so repeated calls with the same inputs return instantly.

Instead of recalculating.

Without memoization

5+5

calculate

again

5+5

calculate again

With memoization

5+5

calculate

store

5+5

return stored answer
Example
function memoize(fn) {

    const cache = {};

    return function (num) {

        if (cache[num]) {
            console.log("From cache");
            return cache[num];
        }

        console.log("Calculating");

        cache[num] = fn(num);

        return cache[num];
    };

}

function square(n) {
    return n * n;
}

const memoSquare = memoize(square);

console.log(memoSquare(5));
console.log(memoSquare(5));

Output

Calculating
25

From cache
25
Used in
React (useMemo)
Dynamic Programming
Expensive calculations
4. Currying
Definition

Currying transforms a function with multiple arguments into a sequence of functions that each take one argument.

Normal

function add(a, b) {
    return a + b;
}

console.log(add(2,3));

Curried

function add(a) {

    return function (b) {
        return a + b;
    }

}

console.log(add(2)(3));

Output

5

Another Example

const multiply = a => b => c => a * b * c;

console.log(multiply(2)(3)(4));

Output

24

Why use currying?

Reusable functions
Partial application
Functional programming
5. Pure Functions
Definition

A pure function:

Returns the same output for the same input.
Has no side effects.

Pure

function add(a,b){
    return a+b;
}
add(2,3)

Always

5

Impure

let total = 0;

function add(num){
    total += num;
}

It changes external data.

Side effect.

Another impure example

let count = 0;

function increment() {
    count++;
}

Pure functions are easier to:

Test
Debug
Predict
Reuse
6. Higher-Order Functions
Definition

A higher-order function is a function that:

takes another function as an argument, OR
returns another function.

Example

function greet(name){
    console.log("Hello", name);
}

function process(callback){
    callback("Nikhil");
}

process(greet);

Output

Hello Nikhil

Returns a function

function outer(){

    return function(){

        console.log("Inside");

    };

}

const fn = outer();

fn();

Built-in HOFs

map()

filter()

reduce()

forEach()

find()

some()

every()

All take callback functions.

Interview Question

Is every callback a higher-order function?

No.

The function that accepts the callback is the higher-order function.

The callback itself is just a function.

7. Generators (Basic)
Definition

A generator is a special function that can pause and resume execution.

Declared using function*.

Example

function* numbers() {

    yield 1;
    yield 2;
    yield 3;

}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

Output

{ value: 1, done: false }

{ value: 2, done: false }

{ value: 3, done: false }

{ value: undefined, done: true }

How it works

yield 1

pause

↓

next()

↓

yield 2

pause

↓

next()

↓

yield 3

Used for

Lazy evaluation
Large data processing
Custom iterators
8. Iterators (Basic)
Definition

An iterator is an object that lets you access elements one by one.

It has a next() method.

Example

const arr = [10,20,30];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

Output

{ value: 10, done: false }

{ value: 20, done: false }

{ value: 30, done: false }

{ value: undefined, done: true }

Every array has an iterator.

for...of

uses

iterator internally.
Generator vs Iterator
Generator	Iterator
Created using function*	Any object with next()
Uses yield	Uses next()
Can create iterators	Used to traverse data