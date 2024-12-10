/**
 *  Functions 
 *  ---------
 *      To perform specific operations
 *      reusability
 *      organise
 *      Syn : 
 *              function functionName([parameters]){
 *                  // statements
 *                  [return value]
 *              }
 *              functionName([arguments]);
 */
function maagie(maagiePacket) {
    console.log(`Removed ${maagiePacket} and Cooked`);
}
maagie("2 packets of maggie");

console.clear();

function generateBill(quantity, price) {
    console.log(`Total Bill : ${price * quantity}`);
}
generateBill(2, 120);

console.clear();

function sumOfTwoNumbers(a, b) {
    console.log(`Sum of two numbers : ${a + b}`);
}
sumOfTwoNumbers(10, 20);

function modOfTwoNumbers(a, b) {
    console.log(`Mod of two numbers: ${a % b}`);
}
modOfTwoNumbers(20, 5);

console.clear();

function sumOfThreeNumber(a, b, c) {
    console.log(a + b + c);
}
sumOfThreeNumber(1, 2, 3);

console.clear();


function funOne(a, b) {
    console.log(a + "" + b);
    funTwo(a, b);
}
function funTwo(a) {
    console.log(a);
}
funOne(12, 14);

console.clear();

function one(a, b, c) {
    console.log(a, b + c);
    two(a + b, b + c);
    console.log("one completed");
}
function two(a, b) {
    console.log("two started");
    console.log(a + b);
    console.log("two ended");
}
one(10, 30, 21);

console.clear();

function devara(hero, mainCharacter) {
    console.log("Devara");
    pushpa(hero + mainCharacter);
    console.log(hero, mainCharacter);
    pushpa("Allu Arjun", "PK");
}
function pushpa(hero, villian) {
    console.log("Pushpa");
    console.log(hero + " " + villian);
}

function pushpa(hero) {
    console.log(hero);
}

function pushpa() {
    console.log("Hey");
}

devara("NTR", "Prakash Raj");


function x(a, b, c, d) {
    console.log(a, b, c, d);
}
x(10, 20);

console.clear();

// return keyword
function print() {
    return "Printed";
}
var result = print();
console.log(result);

console.log(print());

/**
 * if function is returning a value then we need
 * to store the data in any variable or just print 
 * it
 * 
 * Syn : 
 *       varaible identifier =  functionName([arguments]);
 *       console.log(functionName([arguments]));
 */

console.clear();

function demo() {

}
console.log(demo());
// if any function is not returning a value
// then output will be undefined

console.clear();

function sample(a) {
    return a + 10;
}
var result = sample(10);
// console.log(result);
// console.log(sample(10));


function sumOfTwoNumbers(a, b) {
    return (a + b);
}
var sumResult = sumOfTwoNumbers(10, 20) ;
console.log(sumResult);
