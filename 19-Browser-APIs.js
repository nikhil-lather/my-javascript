18. Browser APIs

These are APIs provided by the browser (not JavaScript itself) that JavaScript can use.

1. setTimeout()

Runs a function once after a specified delay.

console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 2000);

console.log("End");

Output

Start
End
Hello

Even with a delay of 0, the callback runs after the current call stack is empty.

2. setInterval()

Runs a function repeatedly at a fixed interval.

let count = 1;

const id = setInterval(() => {
    console.log(count++);
}, 1000);

Stop it with:

clearInterval(id);
3. localStorage

Stores data in the browser with no expiration.

Data persists even after closing the browser.

localStorage.setItem("name", "Nikhil");

const value = localStorage.getItem("name");

console.log(value);

localStorage.removeItem("name");

localStorage.clear();
4. sessionStorage

Similar to localStorage, but data is cleared when the browser tab is closed.

sessionStorage.setItem("theme", "dark");

console.log(sessionStorage.getItem("theme"));
localStorage vs sessionStorage
localStorage	sessionStorage
No expiration	Cleared when tab closes
Shared across tabs of same origin	Separate per tab
Larger persistent storage	Temporary session storage
5. Cookies (Basic)

Cookies are small pieces of data stored by the browser and sent to the server with HTTP requests.

Common uses:

Login sessions
Authentication
User preferences
Tracking

Create a cookie:

document.cookie = "username=Nikhil";

With expiration:

document.cookie =
  "theme=dark; expires=Fri, 07 Aug 2026 12:00:00 UTC";

Read cookies:

console.log(document.cookie);

Difference from localStorage:

Cookies are automatically sent to the server.
localStorage stays only in the browser unless you send it manually.
6. Fetch API

Used to make HTTP requests (GET, POST, PUT, DELETE, etc.).

Basic GET request:

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

Using async/await:

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers();

Common interview points:

fetch() returns a Promise.
response.json() also returns a Promise because parsing JSON is asynchronous.
7. JSON

JSON (JavaScript Object Notation) is a lightweight text format used to exchange data between a client and a server.

JSON syntax:

{
  "name": "Nikhil",
  "age": 22,
  "isStudent": false
}

Notice:

Keys must be in double quotes.
JSON supports strings, numbers, booleans, arrays, objects, and null.
It does not support functions or undefined.

JavaScript object:

const user = {
    name: "Nikhil",
    age: 22
};

Convert object to JSON:

const json = JSON.stringify(user);

console.log(json);

Output:

{"name":"Nikhil","age":22}

Convert JSON back to an object:

const obj = JSON.parse(json);

console.log(obj);

Output:

{ name: "Nikhil", age: 22 }
⭐ Interview Rapid-Fire (Very Important)
What is the difference between Debouncing and Throttling?
Debouncing: Executes after the user stops triggering the event.
Throttling: Executes at fixed intervals while the event is still happening.
What is Memoization?

Caching the result of expensive function calls so repeated calls with the same inputs return the cached result.

What is Currying?

Transforming a function with multiple arguments into a chain of functions that each take one argument.

What is a Pure Function?

A function that always returns the same output for the same input and has no side effects.

What is a Higher-Order Function?

A function that accepts another function as an argument or returns a function.

What is the difference between Generators and Iterators?

Generators (function*) create iterators using yield, while iterators are objects with a next() method used to traverse values.

// ===============================
// localStorage vs sessionStorage vs Cookies
// ===============================

/*
| Feature         | localStorage                | sessionStorage              | Cookies                          |
|----------------|-----------------------------|-----------------------------|----------------------------------|
| Expiration     | Never (until cleared)       | Until tab is closed         | Configurable                     |
| Sent to Server | ❌ No                        | ❌ No                        | ✅ Yes                           |
| Storage Size   | ~5–10 MB                    | ~5–10 MB                    | ~4 KB                            |
| Best Use       | Persistent preferences      | Temporary tab data          | Authentication/Session handling  |
*/

A Promise that resolves to a Response object.

