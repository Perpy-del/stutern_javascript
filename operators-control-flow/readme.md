# Javascript Operators & Control Flow

## Create a folder and name it ‘operators-control-flow’. Put the answers to Questions 1, 2 and 4 in a file named ‘readme.md’. For the coding questions, create a file and name it ‘index.js’. Use comments to label your answers.

### Task 1 & 2: List the symbols for each of the below Javascript operators and write 2 examples each.

-   **Arithmetic Operators** - used to assign values to variables.
The symbols are: =, +=, -=, *=, /= and %=.

*Example1:*
`let firstName = "Perpetual";`  // This assigns the string Perpetual to the variable firstName.

*Example2:*
`let num = 10;`  // This assigns the number 10 to the variable num.


-   **Assignment Operators** - used to perform primary arithmetic operations.
The symbols are: +, -, *, / and %.

*Example1:*
`let add = num1 + num2;`  // This adds the value assigned to num1 and num2 and assigns it to the variable add.

*Example2:*
`let x += 2;`  // This adds the number 2 to the value assigned to x and assigns the result to x.


-   **Comparison Operartors** - used to determine equality or difference between variables or values. They are used to test for true or false.
The symbols are: ==, ===, !=, !==, >, <, >=, <=.

*Example1:*
```javascript
 let x = 2;
 let y = 12;

 lessThan = (x < y) ? 'x is less than y' : 'x is greater than y';

 console.log(lessThan); 
 ```
 // This logs 'x is less than y' to the console, as the value 2 is less than the value 12.

*Example2:*
```javascript
equalTo = (2 === "2") ? 'The number 2 is equal to the string 2' : 'The number 2 is not equal to the string 2';

console.log(equalTo);
```
// This logs 'The number 2 is not equal to the string 2' as the expression is false.


-   **Logical Operators** - Used to determine the logic between variables or values.
Symbols are: &&, ||, !

*Example1:*
```javascript
let eligibleToVote = 13;
let haveVotersCard = true;

logAnd = (eligibleToVote >=18 && haveVotersCard) ? 'voting candidate' : 'not ready to vote';

console.log(logAnd);
```
// This returns 'not ready to vote' as one of the conditions is false. The logical and (&&) returns true only if both conditions are true.

*Example2:*
```javascript
let realMadridScore = 15;
let arsenalScore = 15;

victoryCup = (!(arsenalScore == realMadridScore)) ? 'One team is the winner' : 'It is a draw';

console.log(victoryCup);
```
// This returns 'It is a draw' as the logical not (!) returns the opposite result of the condition given and the first value is equal to the second value in this case meaning true, the not returns this as false and logs 'It is a draw' to the console.

-   **Bitwise Operators** - used to convert 32 bits numbers into a JavaScript number that stores numbers as 64 bits.
Symbols are: &, |, ~, ^, <<, >>, >>>

*Example1:*
``` javascript
let x = 5 & 1; // 5 = 0101; 1 = 0100

console.log(x);
```
// This returns the number 1 to the console as the Bitwise AND (&) returns 1 if the corresponding bits of both operands are 1.

*Example1:*
``` javascript
let x = 5 | 1; // 5 = 0101; 1 = 0100

console.log(x); 
```
// This returns the number 5 to the console as the Bitwise OR () returns 1 if one of the corresponding bits of the operands is 1.

#### Task 3: The question and the solution can be found in the file 'index.js'.

#### Task 4: What is the result when the following program is executed?

```javascript
for (let i = 1; i < 20; i += 7) {
    console.log(i);
}
```

This function returns the result;
1
8
15

This is because for every value of i starting from the value 1 that is less than 20, the program adds the number 7 and returns it to the variable i.

