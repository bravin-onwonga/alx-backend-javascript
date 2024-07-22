# 0x00. ES6 Basics
Overview of the new standards introduced in the newer ES6 version.

## Key Points
- **What ES6 is**

An ***ECMA Script*** is a standard for scripting languages including JS, JScript and ActionScript. For JS it is used to ensure interoperability of web-pages across different web browsers and ***ECMA Script 6/ ECMA Script 2015*** is the latests version to be released.

### New Features
- The let keyword
- The const keyword
- Arrow Functions
- The {a,b} = Operator
- The [a,b] = Operator
- The ... Operator
- For/of
- Map Objects
- Set Objects
- Classes
- Promises
- Symbol
- Default Parameters
- Function Rest Parameter
- String.includes()
- String.startsWith()
- String.endsWith()
- Array entries()
- Array.from()
- Array keys()
- Array find()
- Array findIndex()
- Math.trunc
- Math.sign
- Math.cbrt
- Math.log2
- Math.log10
- Number.EPSILON
- Number.MIN_SAFE_INTEGER
- Number.MAX_SAFE_INTEGER
- Number.isInteger()
- Number.isSafeInteger()
- New Global Methods
- JavaScript Modules

- Difference between a constant and a variable

constant | variable
-------- | ----------
Cannot be reasigned within the scope in which it is declared | Can be reassigned within the scope in which it is declared
Declared using the ```const``` key word | Declared using the ```var``` or ```let``` keyword
Must be initialized during declaration | Can be declared without being intiatialized

### Block-scoped variables
When a variable is declared in a block (```if...else```, ```while loop```, ```function```) as shown below:
>
> let x = 10;
>
> let n = true;
>
> if (n) {
>   let x = 4;
>   console.log(x); // 4
>}
>
> console.log(x); // 10
>

### Arrow functions and function parameters default
- **Arrow functions**
Arrow function allows for short syntax using it inplace of the ```function``` keyword. You can omit the curly brackets and ```return``` keyword only for function covering one line.

> const fullname = (firstname, lastname) => (firstname + " " + lastname)

- **Default Parameters**
Default parameters have an initial value initialized to them incase the argument is not passed when calling the function. Using the example above:

> const fullname = (firstname, lastname = "Doe") => (firstname + " " + lastname)

In this case it the function is called with only the firstname it won't result in it being ```undefined```.

## Rest and spread function parameters

## String templating in ES6


### Files in this project

