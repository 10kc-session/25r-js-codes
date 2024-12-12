// function funOne(a, b, c) {
//     console.log("One");
//     return funThree(a + 10) + funThree(a + b + c);
// }
// function funTwo(a, b) {
//     console.log("Two");
//     return funThree(funOne(a, 32, b));
// }
// function funThree(a) {
//     console.log("Three");
//     return a + 10;
// }
// console.log(funTwo(10, 30));

/**
 *      Callbacks in javascript
 *      -----------------------
 *      The function defination which is passed as argument to another function or 
 *      method or constructor parameter is known as callbacks
 *      Mainly callbacks are used in asynchronous operations , array methods ,
 *      promises and events
 *      Callbacks can be in form of named functions , arrow functions and anonymous
 *      functions
 *            Syn : 
 *                      function functionName(parameter){
 *                             // statements
 *                              parameter([arguments]);
 *                      }
 *                      functionName(anotherFunctionDefination);
 */

// debugger
function sayHi(callback) {
    console.log("Hi");
    console.log(callback);
    callback();
}
function goodbye() {
    console.log("Bye");
}
sayHi(goodbye);

console.clear();

function x(callback1, callback2) {
    console.log(callback1, callback2);
    callback1();
    callback2();
}
function y() {
    console.log("Y Function");
}
function z() {
    console.log("Z Function");
}
x(y, z);