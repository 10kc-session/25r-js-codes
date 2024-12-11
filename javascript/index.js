/**
 * Functions with return keyword
 * ------------------------------
 *      function funcName([parameters]){
 *          // statements
 *          [return value]
 *      }
 *      variable identifier = funcName([arguments]);
 *      console.log(funcName([arguments]));
 */

var age = 18;
if (age >= 18) {
    console.log("Rahul");
    // break;
}
if (age < 21) {
    console.log("Ravi");
}

console.clear();

// for (var j = 0; j < 2; j++) {
//     for (i = 0; i < 5; i++) {
//         console.log("One");
//         break;
//     }
//     break;
// }
console.clear();

function demo() {
    var i = 10;
    console.log(i);
}
// demo();
// console.log(i);

console.clear();

function sample() {
    console.log(x, y);
    return 10;
    var x;
    function y() {
        console.log('y')
    }
}
// sample();

console.log(x);
console.log(demo1);
var x = 10;
var y = 10;
function demo1() {
    console.log(y);
    console.log(x);
    var x = 30;
    return x;
    console.log(x);
}
// demo1();

console.clear();

function xyz() {
    for (var i = 1; i <= 5; i++) {
        return i;
    }
    console.log(i);
}
// console.log(xyz());

console.clear();

function abc(a, b, c) {
    console.log(a + b + c);
    return pqr(a, b);
}
function pqr(a, b) {
    console.log(a - b);
    return a + b;
}
console.log(abc(3, 2, 1));
