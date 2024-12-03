/**
 *     Conditional Statements in Javascript
 *     -------------------------------------
 *      Conditional Statements are used to perform/execute block of block based on 
 *      condition 
 *      1. simple if
 *              syn : 
 *                      if(condition){
 *                      }
 *      2. if else
 *      3. ladder if
 */
var srinivasHasLaptop = false;
if (srinivasHasLaptop) {
    console.log("Srinivas Can Attend Zoom Meeting");
}
if (!srinivasHasLaptop) {
    console.log("Srinivas Cannot Attend Meeting");
}

var grade = 'A';
var percentage = 78;
// if ((grade === 'A' || grade === 'B') && percentage > 75) {
//     console.log("Eligible");
// }
// if (!((grade === 'A' || grade === 'B') && percentage > 75)) {
//     console.log("Not Eligible");
// }
if ((grade === 'A' || grade === 'B') && percentage > 75) {
    console.log("Eligible");
}
else {
    console.log("Not Eligible");
}

console.clear();

var a = 10, b = 5;
if (a > b) {
    console.log("A is Big");
} else {
    console.log("B is Big");
}

console.clear();

var gender = 'Male';
var age = 24;


if (gender === 'Male' && age >= 21) {
    console.log("Eligible For Ma");
}
else {
    console.log("!");
}


console.clear();


/**
 * Classify a person based on their age:
- If the age is less than 13, they are a “Child”.
- If the age is between 13 and 19 (inclusive), they are a “Teenager”.
- Otherwise, they are an “Adult”.
 */
var age = 23;
if (age < 13) {
    console.log("Child");
}
else if (age >= 13 && age <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
console.clear();
/**
 * Assign a letter grade based on a student’s score:
- Scores 90 and above: "A".
- Scores between 80 and 89: "B".
- Scores between 70 and 79: "C".
- Scores below 70: "Fail".
 */

var score = 65;
if (score >= 90 && score <= 100) {
    console.log("A");
}
else if (score >= 80 && score <= 89) {
    console.log("B");
}
else if (score >= 70 && score <= 79) {
    console.log("C")
}
else if (score >= 0 && score < 70) {
    console.log("Fail");
}
else {
    console.log("Invalid Marks")
}

