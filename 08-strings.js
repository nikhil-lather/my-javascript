8. Strings

A string is a sequence of characters used to store text.

let name = "Nikhil";

Strings are immutable.

This means methods like replace(), trim(), etc. do not modify the original string. They return a new string.

Example

let str = "Hello";

str.toUpperCase();

console.log(str);

Output

Hello

Original string is unchanged.

Creating Strings
let a = "Hello";

let b = 'Hello';

let c = `Hello`;

All are valid.

Backticks ( ) are called Template Literals, which we'll discuss later.

Accessing Characters
let str = "JavaScript";

console.log(str[0]);

console.log(str[4]);

Output

J

S

Length

console.log(str.length);

Output

10
Common String Methods
split()

One of the most asked methods.

Converts a string into an array.

Syntax

string.split(separator)

Example

let str = "Apple Mango Banana";

console.log(str.split(" "));

Output

["Apple","Mango","Banana"]

Split by comma

let data = "HTML,CSS,JS";

console.log(data.split(","));

Output

["HTML","CSS","JS"]

Split into characters

let str = "Hello";

console.log(str.split(""));

Output

["H","e","l","l","o"]
Interview

How to reverse a string?

let str = "Hello";

let reverse = str
.split("")
.reverse()
.join("");

console.log(reverse);

Output

olleH
replace()

Replaces text.

Syntax

string.replace(old,new)

Example

let str = "I love Java";

console.log(

str.replace("Java","JavaScript")

);

Output

I love JavaScript

Only first occurrence

let str = "cat cat cat";

console.log(

str.replace("cat","dog")

);

Output

dog cat cat

Replace all

console.log(

str.replaceAll("cat","dog")

);

Output

dog dog dog
trim()

Removes spaces from beginning and end.

let name = "   Nikhil   ";

console.log(name.trim());

Output

Nikhil

Without trim

" Nikhil " === "Nikhil"

Output

false

Interview

Why use trim()?

Very useful for

Login Forms
Signup Forms
Search Inputs
includes()

Checks if substring exists.

Returns

true

or

false

Example

let str = "JavaScript";

console.log(

str.includes("Script")

);

Output

true

Case Sensitive

console.log(

str.includes("script")

);

Output

false
startsWith()

Checks beginning.

let str="JavaScript";

console.log(

str.startsWith("Java")

);

Output

true
endsWith()

Checks ending.

console.log(

str.endsWith("Script")

);

Output

true