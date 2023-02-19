/* Task 3:

Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.

The subjects for each class group are as follows:

Science Subjects - Physics, Chemistry, Biology, Technical Drawing 

Social Science Subjects - Accounting, Commerce, Marketing, Geography

Arts Subjects - Government, Economics, Literature, History

General Subjects - English, Mathematics

Using if…else conditional statement, write a program that will help Bolatito determine the subjects she will be taking for the session using her class group. Also, in the case of an invalid class group, your output should be the General subjects. 
*/

// Initializing and assigning each class group to their subjects.
let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";

let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";

let artsSubjects = "Government, Economics, Literature, History";

let generalSubjects = "English, Mathematics";

// Noting that all students still have to take the general subject.
scienceSubjects = generalSubjects + ', ' + scienceSubjects;

socialScienceSubjects = generalSubjects + ', ' + socialScienceSubjects;

artsSubjects = generalSubjects + ', ' + artsSubjects;

// Bolatito is in the ARTS 
let bolatito = 'ARTS';

// Using if/else statement to write a program that will help Bolatito determine the subject she will be taking.
function Subjects() {
    if (bolatito == 'SCIENCE') {
        console.log(scienceSubjects);
    } else if (bolatito == 'ARTS') {
        console.log(artsSubjects);
    } else if (bolatito == 'SOCIAL-SCIENCE') {
        console.log(socialScienceSubjects);
    } else {
        console.log(generalSubjects);
    }

// Using the switch case statement instead

    // switch (bolatito) {
    //     case 'SCIENCE':
    //         console.log(scienceSubjects)
    //         break;
    //     case 'ARTS':
    //         console.log(artsSubjects)
    //         break;
    //     case 'SOCIALSCIENCE':
    //         console.log(socialScienceSubjects)
    //         break;
    //     default:
    //         console.log(generalSubjects)
    // }
}

// Using the arrow function instead;
// const Subjects = () => {
//     if (bolatito == 'SCIENCE') {
//         console.log(scienceSubjects);
//     } else if (bolatito == 'ARTS') {
//         console.log(artsSubjects);
//     } else if (bolatito == 'SOCIAL-SCIENCE') {
//         console.log(socialScienceSubjects);
//     } else {
//         console.log(generalSubjects);
//     }
// }

Subjects(); // This returns 'English, Mathematics, Government, Economics, Literature, History' as the subjects Bolatito has to take in the Arts class.


/* Task 5:
Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
“The number (pwr) is the power of 2 nearest to (num).”

If there are two candidate values, display the smaller one. For example, 2 and 4 4 are both the powers of 2 nearest to 3. The function should display 2 because it’s smaller than 4.

For example,
If num = 40, pwr = 32. Then you log to your console in this format:
“The number 32 is the power of 2 nearest to 40.”

If num = 50, pwr = 64.. Then you log to your console in this format:
“The number 64 is the power of 2 nearest to 50.”
*/

// This is a function that takes in a positive number(num)

// initializing and assigning the variable pwr
let pwr;
let firstValue;
function nearestPowerOf2(num) {
    for (let i = 0; i < num; i++) {
        // finding the power of 2 raised to the number
        pwr = 2 ** i;
        if (pwr < num) {
        // Getting the result of the smaller value and assigning it to the variable firstValue;
            firstValue = pwr;
        }
    }
    // Using ternary operator to assign the smaller value to pwr;
    pwr = num - firstValue > (firstValue * 2) - num ? firstValue * 2 : firstValue;
    // Log the result of pwr to the console to be sure;
    console.log(pwr); // This logs 3 for the first test case, 32 for the second test case and 64 for the third test case.

    // Then logging the final result in this format “The number (pwr) is the power of 2 nearest to (num).”
    console.log(`The number ${pwr} is the power of 2 nearest to ${num}`); 
}

// Calling the function
console.log(nearestPowerOf2(3)); // Using the first test case where num = 3, Result is 'The number 2 is the power of 2 nearest to 3'.

console.log(nearestPowerOf2(40)); // Using the second test case where num = 40, Result is 'The number 32 is the power of 2 nearest to 40'.

console.log(nearestPowerOf2(50)); // Using the second test case where num = 50, Result is 'The number 50 is the power of 2 nearest to 50'.