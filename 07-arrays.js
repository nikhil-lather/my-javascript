6. Arrays
Creating Arrays
Common Methods
push
pop
shift
unshift
slice
splice
concat
join
includes
indexOf
7. Array Iteration Methods (Very Important)
forEach()
map()
filter()
find()
findIndex()
some()
every()
reduce()
sort()

This section is one of the most important JavaScript topics for interviews, especially for MERN Stack and React. In React, you'll use map(), filter(), find(), and reduce() almost every day.

6. Arrays

An array is a special object used to store multiple values in a single variable.

Arrays are ordered and zero-indexed.

Example

const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);

Output

["Apple", "Mango", "Banana"]
1. Creating Arrays
Method 1 (Most Common)
const nums = [10,20,30];
Method 2
const nums = new Array(10,20,30);

Output

[10,20,30]
Mixed Data Types
const data = [

"Hello",

10,

true,

null,

{name:"Nikhil"},

[1,2,3]

];

console.log(data);

Arrays can store any data type.

Accessing Elements
const fruits=["Apple","Mango","Banana"];

console.log(fruits[0]);

console.log(fruits[2]);

Output

Apple

Banana
Updating Elements
fruits[1]="Orange";

console.log(fruits);

Output

["Apple","Orange","Banana"]
Length
console.log(fruits.length);

Output

3
Interview Question

Are arrays objects?

Yes.

typeof []

Output

"object"
Common Array Methods
push()

Adds element(s) to the end.

const nums=[1,2];

nums.push(3);

console.log(nums);

Output

[1,2,3]

Multiple elements

nums.push(4,5);

Output

[1,2,3,4,5]

Returns

New Length
pop()

Removes the last element.

const nums=[1,2,3];

const removed=nums.pop();

console.log(nums);

console.log(removed);

Output

[1,2]

3

Returns

Removed Element
shift()

Removes first element.

const nums=[1,2,3];

nums.shift();

console.log(nums);

Output

[2,3]
unshift()

Adds element to beginning.

const nums=[2,3];

nums.unshift(1);

console.log(nums);

Output

[1,2,3]
slice()

Returns a portion of an array.

Does NOT modify original array.

Syntax

array.slice(start,end)

Example

const nums=[1,2,3,4,5];

console.log(nums.slice(1,4));

Output

[2,3,4]

Original

[1,2,3,4,5]

Still unchanged.

Negative Index

console.log(nums.slice(-2));

Output

[4,5]
splice()

Changes original array.

Can

Remove
Add
Replace

Syntax

array.splice(start,deleteCount,item1,item2...)

Remove

const nums=[1,2,3,4];

nums.splice(1,2);

console.log(nums);

Output

[1,4]

Add

const nums=[1,4];

nums.splice(1,0,2,3);

console.log(nums);

Output

[1,2,3,4]

Replace

const nums=[1,2,5];

nums.splice(2,1,3);

console.log(nums);

Output

[1,2,3]
slice vs splice
slice	splice
Doesn't modify original	Modifies original
Returns new array	Returns removed elements
Read-only	Insert/Delete/Replace
concat()

Combines arrays.

const a=[1,2];

const b=[3,4];

console.log(a.concat(b));

Output

[1,2,3,4]

Spread alternative

const c=[...a,...b];

Preferred in modern JavaScript.

join()

Converts array into string.

const fruits=["Apple","Mango"];

console.log(fruits.join("-"));

Output

Apple-Mango

Another Example

console.log(fruits.join(" "));

Output

Apple Mango
includes()

Checks if value exists.

Returns

true

or

false
const nums=[1,2,3];

console.log(nums.includes(2));

Output

true
indexOf()

Returns index.

const nums=[5,8,10];

console.log(nums.indexOf(8));

Output

1

Not found

console.log(nums.indexOf(100));

Output

-1