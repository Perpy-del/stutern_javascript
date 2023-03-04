# Arrays & Functions

This is an assignment to give a better understanding of the concept of JavaScript arrays & functions and how they are applied in use cases.

## *Please find the solution to task 1 below in this README file while the rest can be found in the [index.js](./index.js) file.*

### Task 1:
What are the differences between mutating array methods and non-mutation array methods in JavaScript? List 5 array methods that fall under each of them.

### Solution to Task 1:
Methods can either be mutating or non-mutating. Mutating array methods in JavaScript are methods that when applied to an array change the original value(s) or state of the array. 

Non-mutating array methods on the other hand, are methods that when applied to an array do not change the original value(s) or state of the array.

Array methods that fall under each category are:

| Mutating Array Methods | Non-Mutating Array Methods |
| ---------------------- | ---------------------- |
| ` array.push() ` // This is used to add an item to the end of the array. | ` array.concat() ` // This is a non-mutating method used to add item to the end of the array. |
| ` array.unshift() ` // This is used to addan item to the start of the array. | ` ...array ` // The spread operator is used to add an item to the array from the beginning or the end. |
| ` array.pop() ` // This is used to remove an item from the end of the array and return the item. | ` array.filter() ` // This is a non-mutating method used to filter through the array. It takes a function that is called over each item in the array where if it returns true then the item is included in the new array. 
| ` array.shift() ` // This is a method that deletes an item from the beginning of the array and return the deleted item. | ` array.slice() ` // This takes 2 parameters, the first is the starting index where the copy of the array should begin and the second is the ending index where the copy of the array should end, which is not inclusive. It copies the item and return a new array.
| ` array.splice() ` // This is a metthod that takes two important parameters, the first is the starting index and second being the number of items to be removed. It removes the items indicated. | ` array.map() ` // This method returns a new array containing a transformed copy of the original array depending on the function that is called on each item. It takes a function just like array.filter method.


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

*valTimesIndex([1,2,3]) // [0,2,6]*,
     
*valTimesIndex([5,10,15]) // [0,10,30]*

## *Task 2 to 5 are in this[index.js](./index.js) file.