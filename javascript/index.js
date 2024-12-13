/**
 *     Callbacks in js
 *     -----------------
 *          function defination which as argument to another function , method or 
 *          constructor parameter is known as callbacks
 */
// function one(callback) {
//     console.log(callback);
//     callback();
// }
// function two() {
//     console.log("Two");
// }
// one(two);

// Higher order function

function one(callback) {
    callback(10, 20);
}
function two(a, b) {
    console.log(`A + b = ${a + b}`);
}
one(two);

console.clear();


function funOne(a, b, c) {
    console.log(c(a, b));
}
function getSum(a, b) {
    return a + b;
}
funOne(10, 30, getSum);

console.clear();

function funThree(a, b, c) {
    var result = b(a) + c(a + 5);
    console.log(result);
}
function funFour(x) {
    return x * 2;
}
function funFive(x) {
    return x * 5;
}

funThree(14, funFive, funFour);

console.clear();


function test(callback1, callback2) {
    callback1();
    console.log("2");
    callback1();
    console.log("8");
    callback2();
    console.log("9");
    callback2();
}
test(function x() {
    console.log("3");
}, function y() {
    console.log("6");
});
/**
 * Anonymous functions in Javascipt
 * ---------------------------------
 *      The function which is not having any function name is known anonymous function
 *      these functions are used to pass as argument to another functions , 
 *      methods , events and timing functions (setTimeout and setInterval);
 *      These functions can store in variable or can be passed as arguments
 *      SYn : 
 *              function(parameter1, .... , paramterN){
 *                      // statements
 *                    [return value]
 *              }
 *              variable referenceVariable = function([parameter]){
 *                      // statements
 *                      [return value];
 *              }
 *              referenceVaraible([arguments]);
 * 
 */
console.clear();

// First Class Functions

// var y = function() {
//     console.log("Hello World");
// }
// // x();
// console.log(y);
// y();

var print = function (a, b) {
    console.log("Demo Function Called", a + b);
}
console.log(print);
print(10, 30);


console.clear();

var printer = function (a, b, c) {
    console.log(a + b + c);
}
printer(10, 40, 50);

console.clear();

var sample = function (a, b) {
    console.log("Hey");
    return a + b;
}
console.log(sample(10, 30));

console.clear();

function demo1(callback) {
    callback();
}
demo1(function () {
    console.log("Anonymous Function");
});

// demo1(() => console.log("Arrow Function"));


/**
 * function funOne(a, b, c) {
    console.log(c(a, b));
}
function getSum(a, b) {
    return a + b;
}
funOne(10, 30, getSum);
 */

function funOne(a, b, c) {
    console.log(c(a, b));
}
funOne(10, 30, function (a, b) {
    return a + b;
})

console.clear();


var funThree = function (a, b, c) {
    var result = b(a) + c(a + 5);
    console.log(result);
}
funThree(14, function (x) {
    return x * 5;
}, function (x) {
    return x * 2;
});