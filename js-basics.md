# Welcome to Javascript Basics

## Section 1. Getting started

### What is JavaScript?

JavaScript is a programming language initially designed to interact with elements of web pages. Typically, you use JavaScript with HTML and CSS to enhance a web page’s functionality, such as validating forms, creating interactive maps, and displaying animated charts.  
When a web page is loaded, i.e., after HTML and CSS have been downloaded, the JavaScript engine in the web browser executes the JavaScript code.

### Client-side vs. Server-side JavaScript

JavaScript can run on both web browsers and servers. A popular JavaScript server-side environment is [Node.js](https://www.javascripttutorial.net/nodejs-tutorial/). Unlike client-side JavaScript, server-side JavaScript executes on the server that allows you to access databases, file systems, etc.

### Prerequisites

Download Node.js and install it on your computer:
[Official Website](https://nodejs.org/en/download/)

### Meet the Console Tab of Web Development Tools

Provides you with a basic introduction to the Console window on the web browsers.

### First program in JavaScript

```javascript
console.log("Hello, detective!");
```

To print the value of a variable or expression to the Console window, use the console.log() method.

```javascript
let message = "Good Morning!";
console.log(message);
```

### Using JS in HTML

The JavaScript code in the `<script>` element is interpreted from top to bottom.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript Hello World Example</title>
    <script>
      alert("Hello, World!");
    </script>
  </head>
  <body></body>
</html>
```

In the `<script>` element, we use the `alert()` function to display the `Hello, World!` message.

BTW the JavaScript code is executed before the HTML page is loaded. Also the JavaScript code is executed before the `<script>` element is removed from the HTML page.

But this isn't a good practice since the code becomes too verbose. Hene we use JS externally.

```html
<head>
  <script src="js/app.js"></script>
</head>
```

### Using Node environment

```zsh
node js/app.js
```

## Section 2. Fundamentals

### Syntax – JavaScript syntax, including whitespace, keywords, expressions, and comments

The following JavaScript code doesn’t use whitespace:

```javascript
let formatted = true;
if (formatted) {
  console.log("The code is easy to read");
}
```

It’s is equivalent to the following code that uses whitespace. Hence, this code is much easy to read:

```javascript
let formatted = true;

if (formatted) {
  console.log("The code is easy to read");
}
```

**Statements**
A statement is a code that declares a variable or instructs the JavaScript engine to do a task. A simple statement is terminated by a semicolon (`;`).

**Single-line comments**

```javascript
// this is a single-line comment
```

**Block comments**

```javascript
/* This is a block comment
that can span multiple lines */
```

**Expressions**

An expression is a piece of code that evaluates to a value. For example:

`2 + 1`

### Variables

**Declaring a variable**

```javascript
var message;
let name;
message = 'Bruh';
name='Ananth';
let variable = 42;
console.log(message, " ", name, " ", variable);
let blank;
console.log(blank);//undefined
console.log(typeof variable);//number
console.log(notDeclaredVar);
ReferenceError: notDeclaredVar is not defined
```

A variable name can be any valid identifier. By default, the message variable has a special value undefined if you have not assigned a value to it.

Variable names follow these rules:

- Variable names are case-sensitive. This means that the message and Message are different variables.
- Variable names can only contain letters, numbers, underscores, or dollar signs and cannot contain spaces. Also, variable names must begin with a letter, an underscore (\_) or a dollar sign ($).
- Variable names cannot use the reserved words.

JavaScript is a dynamically typed language. This means that you don’t need to specify the variable’s type in the declaration like other static typed languages such as Java or C#.

### Data types – introduction to the JavaScript data types, including primitive and reference types

JavaScript has the common primitive data types:

1. `null`
2. `undefined`
3. `boolean`
4. `number`
5. `string`
6. `symbol` – available only from ES2015
7. `BigInt` – avaible from ES2020
8. `undefined`
9. `null`
10. `NaN`
    and one complex data type called `object`.

```javascript
let counter = 120;
console.log(typeof counter); // "number"

counter = false;
console.log(typeof counter); // "boolean"

counter = "Hi";
console.log(typeof counter); // "string"

let blank;
console.log(blank); // undefined
console.log(typeof blank); // undefined

console.log(null == undefined); // true
```

The `undefined` type is a primitive type that has only one value `undefined`. By default, when a variable is declared but not initialized, it is assigned the value `undefined`.

### Number

JavaScript uses the `number` type to represent both integer and floating-point numbers.

JavaScript automatically converts a floating-point number into an integer number if the number appears to be a whole number.

```javascript
let num = 100;
let price = 12.5;
let discount = 0.05;

let price = 200.0; // interpreted as an integer 200

console.log("a" / 2); // NaN;

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

console.log(NaN / 2); // NaN
console.log(NaN == NaN); // false
```

The `NaN` has two special characteristics:

- Any operation with `NaN` returns `NaN`.
- The `NaN` does not equal any value, including itself.

### Boolean

The boolean type has two values: true and false in lowercase.

```javascript
let inProgress = true;
let completed = false;

console.log(typeof completed); // boolean

console.log(Boolean("Hi")); // true
console.log(Boolean("")); // false

console.log(Boolean(20)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(0)); // false

console.log(Boolean({ foo: 100 })); // true on non-empty object
console.log(Boolean(null)); // false
```

### Object

In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair.

```javascript
let emptyObject = {};
let person = {
  firstName: "John",
  lastName: "Doe",
  ID: 50,
};

//Nested objects
let contact = {
  firstName: "Ananth",
  lastName: "Raghavan",
  email: "ananth.raghavan@lmao.com",
  phone: "(408)-555-9999",
  address: {
    city: "Hyderabad",
    country: "India",
  },
  key: "value",
};
console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact.address.city);
contact["key"]; // value
delete contact.firstName;
console.log(contact); // you'll find that Ananth has been deleted
console.log("firstName" in contact);
```

For more information on javascript data types, refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

### String

avaScript strings are primitive values. Also, strings are immutable. It means that if you modify a string, you will always get a new string. The original string doesn’t change.

```javascript
let str = "Hi";
let greeting = "Hello";

let mesage = `"I'm good". She said"`;

let name = "John";
message = `Hi, I'm ${name}.\nI'm learning JavaScript.`;

console.log(message);

let result = "a" < "b";
console.log(result); // true

let status = false;
let str = status.toString(); // "false"
let back = Boolean(str); // true

// concatenation
let name = "John";
let str = "Hello " + name;

console.log(str); // "Hello John"
```

To compare two strings, you use the comparison operator `>`, `>=`,`<`,`<=`, and `==` operators.

### Array

In JavaScript, an array is an ordered list of values.

```javascript
let athletes = new Array(3); // creates an array with initial size 3
let scores = new Array(1, 2, 3); // create an array with three numbers 1,2 3
let signs = new Array("Red"); // creates an array with one element 'Red'

// let arrayName = [element1, element2, element3, ...];
let colors = ["red", "green", "blue"];

//accessing elements
// arrayName[index]
let mountains = ["Everest", "Fuji", "Kilimanjaro"];
mountains[2] = "K2";

console.log(mountains);
```

### Array methoda

Popular aray methods:

- Array.length
- Array.push()
- Array.pop()
- Array.unshift()
- Array.indexOf()
- Array.isArray()

## Section 3. Operators

### Arithmetic operators

| Operator       | Sign |
| -------------- | ---- |
| Addition       | +    |
| Subtraction    | -    |
| Multiplicaiton | \*   |
| Division       | /    |
| Modulus        | %    |

---

```javascript
let sum = 10 + 20;
console.log(sum); // 30

let x = "10",
  y = "20";
let result = x + y; //1020

console.log(result);

let result = "5" * 2;
console.log(result); //10 -- same for division

let remainder = 5 % -2;
console.log(remainder); // -1

remainder = 5 % -2;
console.log(remainder); // 1
```

### Assignment operator

```Javascript
let a = 10, b = 20, c = 30;

b = c; // b is 30
a = b; // a is also 30 
```

### Logical operattrs

- The NOT operator (``!``) negates a boolean value. The (``!!``) converts a value into its real boolean value.
- The AND operator (&``&``) is applied to two Boolean values and returns true if both values are true.
- The OR operator (|``|``) is applied to two Boolean values and returns true if one of the operands is true.
- Both ``&&`` and ``||`` operator are short-circuited. They cab be also applied to non-Boolean values.
- The logical operator precedence from the highest to the lowest is ``!``, `&&` and ``||``.

```javascript
let eligible = false,
console.log(!eligible);

console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false


let result = (a=true) && (b=false);//false
result = (a=true) || (b=false);//true

```

### Comparison operators

```javascript
let r1 = 20 > 10; // true
let r2 = 20 < 10; // false
let r3 = 10 == 10; // true

console.log("10" == 10); // true
console.log("10" === 10); // false
```

## Section 4. Control flow Statements

### Conditionals

**if statement**

![if condition](https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-if.svg)

```javascript
let age = 18;
if (age >= 18) {
  console.log('You can sign up');
}

let age = 16;
let state = 'CA';
//nested if
if (state == 'CA') {
  if (age >= 16) {
    console.log('You can drive.');
  }
}

let age = 16;
let state = 'CA';

if (state == 'CA' && age == 16) {
  console.log('You can drive.');
}


```

**if else statement**

![if else](https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-if-else.svg)

```javascript
let age = 16;

if (age >= 18) {
  console.log('You can get in dude');
} else {
  console.log('Kid you are too young');
}

```


**if else if statement**

```javascript
let weight = 70; // kg
let height = 1.72; // meter

// calculate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = 'Overweight';
} else {
  weightStatus = 'Obesity';
}

console.log(weightStatus);
```

### Ternary operator

The ternary operator takes three operands: 
- a condition followed by a question mark (?).
- an expression to execute if the condition is truthy, followed by a colon :
- finally the expression to execute if the condition is falsy.

Ternary operators can do exactly what if elses do, this is just a concise way of doing things.

- **Falsy** : false, 0, -0, "", '', null, false, undefined, NaN.
- **Truthy** : everything that is not falsy

Syntax:
```javascript
  condition ? exprIfTrue : exprIfFalse
```

Example:
```javascript
  let age = 26;
  let beverage = (age >= 21) ? "Beer" : "Juice";

  console.log(beverage); // "Beer"
```

## Loops

Loops offer a quick and easy way to do something repeatedly.
There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times.

**Example of loops**

### For loops
  - We initialize a variable in ```initialExpression``` the and execute a statement as long a ```conditionExpression``` is true.

Syntax:
```javascript
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement
```
Example:
  - Here, ```step < 5``` is the condition and ```step++``` is the iteration happening, i.e. value of i increases by 1 after every iteration.
```javascript
for (let step = 0; step < 5; step++) {
  console.log('Walked one step ahead.');
}
```

### While loops
 - A statement is executed as long the condition is true.
 - As soon as the the condition is false, we break out of the loop.
Syntax:
```javascript
while (condition){
  statement
}
```
Examples:
  - A loop to print whole numbers less than 11.
  - How does an infinite loop look.
    - **Note**: If you ever use ```while(true)```, always make sure to write a break statement.
```javascript

let n = 0;
while (n < 11) {
  n++;
  console.log(n);
}

// Infinite loops which never stop
while (true) {
  console.log('Hello, world!');
}

```

### do-while Loop
  - Their basic logic of working is like While loops.
  - But, here statement is always executed once before the condition is checked.
  - If condition is true, the statement executes again.

Syntax:
```javascript
  do{
      statement
  }while (condition);

```

Example:
  - Below code will print 1, 2, 3, 4, 5.
```javascript
  let i = 0;
  do {
    i += 1;
    console.log(i);
  } while (i < 5);

```

### Break vs continue statement

  - Break leaves the loop completely and executes the statements after the loop.
  - Continue leaves the current iteration and executes with the next value in the loop. 
  - Break completely exits the loop.
  - Continue skips the statements after the continue statement and keeps looping.

Example:
```javascript

a = [1,2,5,3,4,1,7]
for (let i = 0; i < a.length; i++) {
  if (a[i] + a[i+1] === 5) {
    console.log(a[i],a[i+1]);
    break;
  }
}
//4,1

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12

```