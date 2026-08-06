17. Advanced JavaScript ⭐⭐⭐⭐⭐
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