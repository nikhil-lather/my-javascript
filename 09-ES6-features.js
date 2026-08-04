1. Destructuring ⭐⭐⭐⭐⭐

Already covered in Arrays and Objects.

It extracts values into variables.

Array

const nums = [10,20];

const [a,b] = nums;

console.log(a);

console.log(b);

Output

10

20

Object

const person = {

name:"Nikhil",

age:22

};

const {name,age}=person;

Used heavily in React

const User = ({name,age}) => {

}
2. Spread Operator (...) ⭐⭐⭐⭐⭐

One of the most important ES6 features.

Used to expand arrays or objects.

Arrays

const a=[1,2];

const b=[3,4];

const c=[...a,...b];

console.log(c);

Output

[1,2,3,4]

Copy Array

const copy=[...a];

Objects

const person={

name:"Nikhil"

};

const user={

...person,

age:22

};

Output

{

name:"Nikhil",

age:22

}

Interview

Why not

const copy = arr;

Because it copies the reference, not the actual array.

3. Rest Operator (...) ⭐⭐⭐⭐

Looks exactly like Spread.

Difference is in where it's used.

Spread

Expand

Rest

Collect

Example

const nums=[1,2,3,4];

const[a,...rest]=nums;

console.log(rest);

Output

[2,3,4]

Function

function sum(...nums){

console.log(nums);

}

sum(1,2,3);

Output

[1,2,3]

Interview

Spread expands.

Rest collects.

4. Default Parameters ⭐⭐⭐

Already covered.

function greet(name="Guest"){

console.log(name);

}

greet();

Output

Guest
5. Template Literals ⭐⭐⭐⭐⭐

Another extremely common interview topic.

Uses backticks.

`

Instead of

"

Without Template Literals

let name="Nikhil";

console.log(

"Hello "+name

);

With Template Literals

console.log(

`Hello ${name}`

);

Output

Hello Nikhil

Multiple Lines

const msg=`

Hello

Welcome

`;

Interview

Why use Template Literals?

Cleaner string interpolation and multiline strings.

6. Enhanced Object Literals ⭐⭐

Rarely asked directly.

Know only basics.

Old

const name="Nikhil";

const person={

name:name

};

New

const person={

name

};

Same output.

Method shorthand

Old

const obj={

greet:function(){

}

}

New

const obj={

greet(){

}

}
7. Optional Chaining ⭐⭐⭐⭐⭐

Already covered in Objects.

Safely access nested properties.

user.address?.city

Instead of

user.address.city
8. Nullish Coalescing ⭐⭐⭐⭐

Already covered.

const name = null;

console.log(

name ?? "Guest"

);

Output

Guest

Difference

||

vs

??

Remember

??

only checks

null

undefined
Most Important ES6 Features

⭐⭐⭐⭐⭐

Destructuring
Spread
Template Literals
Optional Chaining

⭐⭐⭐⭐

Rest
Nullish Coalescing

⭐⭐⭐

Default Parameters

⭐⭐

Enhanced Object Literals