/**
 *  What is Array ?
 *  How to Access Elements from Array ?
 *  Why Index starts from 0 ?
 *  how to apply styles for console
 *  
 *      for loop
 */
// + - / * 
console.log(10 + 10);
console.log(20 + 30);
console.log(20 < 30); // True
console.log(20 >= 20); // True
console.log(20 <= 30); // True
console.log(20 == 20); // True (only checks the data)
console.log(20 === 20); //  True    (checks the data and as well as type of data)
console.log(20 == '20'); // False , true
console.log(20 === '20'); // True  , False
console.clear();

var a = 10;
var b = '10';
console.log(a >= b); // f , t a > b , a == b
console.log(a == b); // f , t
console.log(a <= b); // f  , t a < b , a == b
console.log(a > b);  // F
console.log(a < b);  // f
console.log(b > a);  // f
console.log(b >= a);  //  f , t b > a  b == a
console.log(b === a); // f  
console.log(b == a);  // t
console.clear();

var a = 10;
a = a + 1; // re assingment

console.log(a); // 11

a = a + 10;
console.log(a);

a += 10;
console.log(a);

console.clear();

/**
 *   increment and decrement
 *   ------------------------
 *      post increment 
 *          suffix
 *      pre  increment
 *          prefix
 *      post decrement
 *          suffix
 *      pre decrement
 *          prefix
 *      ++ , --
 *      var a = 10;
 *      a++; 10++
 */
var x = 32; // 31
var y = 12;  //  10

//             32  +  32 + 32  + 12  + 12  - 12 - 31 + 12 + 12 + 10 + 31
// console.log(x++ + --x + x-- + y++ + --y - y - x + y + y-- + --y + x++);