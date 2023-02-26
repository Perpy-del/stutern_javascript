/* Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
Handle of author
content, 
An image link posted by the author of the post
Number of views, 
Number of likes, 
*/

// Create a constructor function called InstagramPost;
function InstagramPost(authorHandle, content, imageLink, numViews, numLikes) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.numViews = numViews;
  this.numLikes = numLikes;
}


// Create 2 Instagram post objects from the constructor function you created above 

// Creating the first Instagram post object from the constructor function
const post1 = new InstagramPost('Perpydev', 'This is my first Instagram post', 'perpyinstaimg.jpg', 20, 56);

console.log(post1);
/* =================
InstagramPost {
  authorHandle: 'Perpydev',
  content: 'This is my first Instagram post',
  imageLink: 'perpyinstaimg.png',
  numViews: 20,
  numLikes: 56
}
================== */

// Creating the second instagram post from the constructor function
const post2 = new InstagramPost('Mimiluv', 'I am so glad I was able to vote successfully', 'votingpic.jpg', 156, 197);

console.log(post2);
/* ==================
InstagramPost {
  authorHandle: 'Mimiluv',
  content: 'I am so glad I was able to vote successfully',
  imageLink: 'votingpic.jpg',
  numViews: 156,
  numLikes: 197
}
*/


/* Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
ENG - 70
GOVT - 85
LIT - 82
CRK - 94

a) Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 

b) Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above
*/

// Solving the (a) part of the above question

// Creating a factory function called createPerson
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location
    }
}

// Create an object representing Musa from the factory function
const Musa = createPerson('Musa', 19, 'Lekki, Lagos State');

console.log(Musa); // { name: 'Musa', age: 19, location: 'Lekki, Lagos State' }

// Solving the (b) part of the above question
function createJambScores(eng, govt, lit, crk) {
    return {
        ENG: eng,
        GOVT: govt,
        LIT: lit,
        CRK: crk
    }
}

const musaJambScores = createJambScores(70, 85, 82, 94);

console.log(musaJambScores); // { ENG: 70, GOVT: 85, LIT: 82, CRK: 94 }

// Add the object musaJamScores to the Musa object
Musa.JambScores = musaJambScores;

console.log(Musa);
/* ================
{
  name: 'Musa',
  age: 19,
  location: 'Lekki, Lagos State',
  JambScores: { ENG: 70, GOVT: 85, LIT: 82, CRK: 94 }
}
================= */ 


// What are the different ways you can clone an object? Give examples for each of them.

// There is the wrong way to clone an object
const clone = {
    name: 'Perpetual',
    age: 20,
    stack: 'Backend Engineering'
}

console.log(clone); // { name: 'Perpetual', age: 20, stack: 'Backend Engineering' }

// Cloning one:
const clone1 = {};
for (let key in clone) {
    clone1[key] = clone[key];
}

console.log(clone1); // { name: 'Perpetual', age: 20, stack: 'Backend Engineering' }
// This is the old way of cloning an object as this might cause an error when passing a new value to a property of the original object, due to referencing in objects.

// The right way to clone an object by using the Object.assign method. still tryin to clone the clone object above.
const clone2 = Object.assign({}, clone);
console.log(clone2); // { name: 'Perpetual', age: 20, stack: 'Backend Engineering' }

// The second right way to clone an object is using the spread method. still tryin to clone the clone object above.
const clone3 = {...clone};
console.log(clone3);  // { name: 'Perpetual', age: 20, stack: 'Backend Engineering' }


/* As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:

const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}

Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	’Omoyele Sowore is the presidential candidate of AAC’
*/

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

// Using the enumeration method for..in;
for (let candidate in presidentialCandidates) {
    console.log(`${presidentialCandidates[candidate]} is the presidential candidate of ${candidate}`);
}
/* ==================================
Omoyele Sowore is the presidential candidate of AAC
Christopher Imumolen is the presidential candidate of ACCORD
Bola Ahmed Tinubu is the presidential candidate of APC      
Peter Obi is the presidential candidate of LP
Rabiu Kwankwaso is the presidential candidate of NNPP       
Atiku Abubakar is the presidential candidate of PDP
====================================== */

//  Using the for...of enumeration method. As the for...of only loops through an array, the Object.keys method converts an object to an array.
for(let candidate of Object.keys(presidentialCandidates)) {
    console.log(`${presidentialCandidates[candidate]} is the presidential candidate of ${candidate}`);
}

/* =====================================
Omoyele Sowore is the presidential candidate of AAC
Christopher Imumolen is the presidential candidate of ACCORD
Bola Ahmed Tinubu is the presidential candidate of APC
Peter Obi is the presidential candidate of LP
Rabiu Kwankwaso is the presidential candidate of NNPP       
Atiku Abubakar is the presidential candidate of PDP
=================================== */