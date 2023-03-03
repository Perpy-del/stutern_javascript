# Arrays & Functions

This is an assignment to give a better understanding of the concept of JavaScript arrays & functions and how they are applied in use cases.

## *The solution to task 1 is here in the below in this README file while the rest can be found in the [index.js](./index.js) file.*

### Task 1:
What are the differences between mutating array methods and non-mutation array methods in JavaScript? List 5 array methods that fall under each of them.


### Task 2:
Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
-   Add ‘Kotlin’ to the end of the array
-   Add ‘Java’ after ‘Ruby’
-   Remove the first item in the array
-   Add ’Scala’ and ‘Swift’ to the beginning of the array
-   Replace ‘PHP’ with ‘Go’ and ‘Rust’


### Task 3:
What will be the value of fruit after calling the function **changeFruit**?

```javascript
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
        fruit[2] = "orange";
        return fruit;
}
```


### Task 4:
Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
*e.g., max([4, 5, 10, -2]) // maximum value is 10*


### Task 5:
Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
e.g.,
     *valTimesIndex([1,2,3]) // [0,2,6]*
     
     *valTimesIndex([5,10,15]) // [0,10,30]*