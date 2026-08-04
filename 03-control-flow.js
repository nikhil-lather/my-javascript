2. Control Flow

Control flow determines which code runs and in what order.

Think of it like traffic signals:

if → Go only if condition is true.
switch → Choose one option from many.
Loops → Repeat something.
break → Stop.
continue → Skip current iteration.
1. if, else if, else

Used to execute code based on conditions.

Syntax
if (condition) {
  // runs if true
} else if (condition2) {
  // runs if first is false and second is true
} else {
  // runs if all conditions are false
}
Example
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

Output

Adult
Multiple Conditions
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

Output

Grade B
Logical Operators
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Can drive");
}
Truthy & Falsy
if ("Hello") {
    console.log("Runs");
}

if (0) {
    console.log("Doesn't run");
}

Falsy values:

false
0
-0
0n
""
null
undefined
NaN

Everything else is truthy.

Interview Question
Difference between if and else if?

if

Every if is checked independently.

if (true) console.log("One");

if (true) console.log("Two");

Output

One
Two

else if

Stops checking once one condition is true.

let num = 5;

if (num > 0)
    console.log("Positive");
else if (num > 2)
    console.log("Greater than 2");

Output

Positive

Second condition isn't checked.

2. switch

Used when comparing one value against many possible cases.

Syntax
switch(expression) {

    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
Example
let day = 3;

switch(day){

case 1:
console.log("Monday");
break;

case 2:
console.log("Tuesday");
break;

case 3:
console.log("Wednesday");
break;

default:
console.log("Invalid");
}

Output

Wednesday
Why break?

Without break, JavaScript continues executing the next cases (fall-through).

Example

let day = 2;

switch(day){

case 2:
console.log("Tuesday");

case 3:
console.log("Wednesday");

default:
console.log("Invalid");
}

Output

Tuesday
Wednesday
Invalid

With break

case 2:
console.log("Tuesday");
break;

Output

Tuesday
Multiple Cases Together
let fruit = "apple";

switch(fruit){

case "apple":
case "mango":
case "banana":
console.log("Fruit");
break;

default:
console.log("Unknown");
}

Output

Fruit
When to use switch?

Good

switch(role){
case "admin":
...
case "user":
...
case "guest":
...
}

Not good

switch(age > 18)

Use if for ranges and complex conditions.

Interview Question
switch vs if
if	switch
Complex conditions	Fixed values
Range checking	Exact match
Flexible	Cleaner for many options
3. Ternary Operator

Short form of if...else.

Syntax
condition ? valueIfTrue : valueIfFalse

Example

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

Output

Adult

Equivalent if

if(age>=18){
result="Adult";
}else{
result="Minor";
}

Nested Ternary

let marks = 80;

let grade =
marks >=90 ? "A"
: marks>=75 ? "B"
: marks>=50 ? "C"
: "Fail";

console.log(grade);

Output

B
Interview

Avoid deeply nested ternary operators because they're hard to read.

4. Loops

Loops repeat code.

for Loop

Used when number of iterations is known.

Syntax
for(initialization; condition; update){

}

Example

for(let i=1;i<=5;i++){

console.log(i);

}

Output

1
2
3
4
5

Even Numbers

for(let i=2;i<=10;i+=2){

console.log(i);

}

Output

2
4
6
8
10

Reverse Loop

for(let i=5;i>=1;i--){

console.log(i);

}

Infinite Loop

for(;;){

}

Never ends unless broken.

while Loop

Runs while condition is true.

Initialization happens before.

Increment happens inside.

Example

let i = 1;

while(i<=5){

console.log(i);

i++;

}

Output

1
2
3
4
5

When to use?

When you don't know how many iterations are needed.

do...while Loop

Runs at least once.

Syntax

do{

}while(condition)

Example

let i = 10;

do{

console.log(i);

i++;

}while(i<5);

Output

10

Even though condition is false, it executes once.

Difference
for	while	do...while
Known iterations	Unknown iterations	Executes at least once
5. break

Stops loop completely.

Example

for(let i=1;i<=10;i++){

if(i===5){

break;

}

console.log(i);

}

Output

1
2
3
4

Loop ends at 5.

break in switch
switch(day){

case 1:
console.log("Monday");
break;
}

Stops execution of further cases.

6. continue

Skips current iteration only.

Example

for(let i=1;i<=5;i++){

if(i===3){

continue;

}

console.log(i);

}

Output

1
2
4
5

3 is skipped, but loop continues.

Another Example

Print odd numbers.

for(let i=1;i<=10;i++){

if(i%2===0){

continue;

}

console.log(i);

}

Output

1
3
5
7
9
break vs continue
break	continue
Ends the entire loop	Skips current iteration
Control exits the loop	Control moves to the next iteration
Used when no further iterations are needed	Used when you want to ignore only certain iterations

Example:

// break
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Output: 1 2

// continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1 2 4 5
Common Interview Questions
1. When should you use switch instead of if?

Use switch when you're comparing a single variable against multiple exact values (e.g., menu options or user roles). Use if for ranges or complex conditions.

2. What's the difference between while and do...while?

while checks the condition before running the loop, so it may execute zero times. do...while runs the loop body once before checking the condition.

3. Can you omit parts of a for loop?

Yes.

let i = 0;

for (; i < 5; ) {
  console.log(i);
  i++;
}

All three parts (initialization, condition, update) are optional, but omitting the condition creates an infinite loop unless you use break.

4. Does break work only in loops?

No. It also works in switch statements to prevent fall-through.

5. Can continue be used in a switch?

No. continue is only valid inside loops (for, while, do...while). Using it directly in a switch (that isn't inside a loop) throws an error.

6. What causes an infinite loop?

A loop whose condition never becomes false, usually because the loop variable is never updated.

let i = 1;

while (i <= 5) {
  console.log(i);
  // Missing i++;
}

This keeps printing 1 forever.