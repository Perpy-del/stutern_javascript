/* Task 2:
Here is an array of languages: 
[‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. 
Perform this operation on them 
1. Add ‘Kotlin’ to the end of the array
2. Add ‘Java’ after ‘Ruby’
3. Remove the first item in the array
4. Add ’Scala’ and ‘Swift’ to the beginning of the array
5. Replace ‘PHP’ with ‘Go’ and ‘Rust’
*/

const arrLanguages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Adding a new language to the end of the array
const newArrLanguages = arrLanguages.push('Kotlin');

console.log(newArrLanguages); // 6 
/* (This logs the number of items in the array. 
    Equivalent to arrLanguages.length) */
console.log(arrLanguages.length); // 6
console.log(arrLanguages); // [ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]


// TASK 2.2: ADDING 'Java' AFTER 'Ruby'

// Getting out the index of 'Ruby'
console.log(arrLanguages.indexOf('Ruby')); // 2

// Adding 'Java' after index 2 which is the index of Ruby
arrLanguages.splice(3, 0, 'Java');
console.log(arrLanguages); // [ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]


// TASK 2.3: REMOVE THE FIRST ITEM IN THE ARRAY
arrLanguages.shift();
console.log(arrLanguages); // [ 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]


// TASK 2.4: ADD 'Scala' and 'Swift' to the beginning of the array
arrLanguages.unshift('Scala', 'Swift');
console.log(arrLanguages); 
/* 
[
  'Scala',      'Swift',
  'JavaScript', 'Ruby',
  'Java',       'PHP',
  'Python',     'Kotlin'
]
*/


// TASK 2.5: REPLACE 'PHP' WITH 'Go' and 'Rust'

// Getting the index of PHP in the array
console.log(arrLanguages.indexOf('PHP')); // 5

// Replacing 'PHP' with 'Go' and 'Rust'
arrLanguages.splice(5, 1, 'Go', 'Rust');
console.log(arrLanguages);
/*
[
  'Scala',      'Swift',
  'JavaScript', 'Ruby',
  'Java',       'Go',
  'Rust',       'Python',
  'Kotlin'
]
*/


/* TASK 3: What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
    function changeFruit( fruit ) {
        fruit[2] = "orange";
        return fruit;
    }
*/
// [ 'apple', 'mango', 'orange' ]
/* This is because within the function changeFruit
the bracket notation that indicates the index 2 of fruit
(fruit[2]) and assigns this another value called 'orange'
would change the value of fruit[2] to 'orange' 
when the function is called.
*/


/* TASK 4: WRITE A FUNCTION THAT ACCEPTS AN ARRAY OF NUMBERS
AS AN ARGUMENT. RETURN THE MAXIMUM VALUE IN THE ARRAY */

// Declaring a function called maxValueArray
// that takes an array of numbers called arrNum
function maxValueArray(arrNum) {
    // initialize the maximum value with maxValue variable
    let maxValue = 0;
    // loop through the array starting from index 0
    for (let i = 0; i < arrNum.length - 1; i++) {
        // if a given index is greater than the max value,
        // assign the value back to the maxValue variable.
        if (arrNum[i] > maxValue) {
            maxValue = arrNum[i];
        }
    }
    // return the maximum value
    return maxValue;
}

console.log(maxValueArray([10, 5, 10, -2])); // 10


/* TASK 5: WRITE A FUNCTION CALLED valTimesIndex which
accepts an array of numbers and returns a new array with
each value multiplied by the index it is at in the array.
*/

// Writing a one-line function expression that accepts an 
// array and returns a new array with each value multiplied by the index
// using the arrow function.

// Using the map method
const valTimesIndex = arrOfNum => arrOfNum.map((value, index) => value * index);

console.log(valTimesIndex([1, 2, 3])); // [ 0, 2, 6 ]
console.log(valTimesIndex([5, 10, 15])); // [ 0, 10, 30 ]

// Using the function expression with the map method
// function valTimesIndex(arrOfNum) {
//     return arrOfNum.map(function(value, index) {
//         return value * index;
//     })
// }