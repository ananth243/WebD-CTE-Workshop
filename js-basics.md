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
    console.log('Hello, detective!');
```

To print the value of a variable or expression to the Console window, use the console.log() method.

```javascript
let message = 'Good Morning!';
console.log(message);
```

### Using JS in HTML

The JavaScript code in the ``<script>`` element is interpreted from top to bottom.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Hello World Example</title>
    <script>
        alert('Hello, World!');
    </script>
</head>
<body>
</body>
</html>
```

In the ``<script>`` element, we use the `alert()` function to display the ``Hello, World!`` message.

BTW the JavaScript code is executed before the HTML page is loaded. Also the JavaScript code is executed before the ``<script>`` element is removed from the HTML page.

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
let formatted = true; if (formatted) {console.log('The code is easy to read');}
```

It’s is equivalent to the following code that uses whitespace. Hence, this code is much easy to read:

```javascript
let formatted = true;

if (formatted) {
  console.log('The code is easy to read');
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

```2 + 1```

### Variables


### Data types – introduce to you the JavaScript data types, including primitive and reference types

### Number – how JavaScript use the Number type to represent the integer and floating-point numbers

### Boolean – the Boolean type

### Object – the object type

### Primitive and reference values – two value types in JavaScript, including primitive and reference values, and the differences between them

### String – string type and the basic string operations

### Array – the Array type and how to manipulate array elements

## Section 3. Operators

## Section 4. Control flow Statements
