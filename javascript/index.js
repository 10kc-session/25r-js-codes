/**
 *  String 
 *  ------
 *      The Set of Characters Combined together to form a text is known as string
 *      Strings are represented in three ways 
 *          1. ''  (Single Quote)
 *          2. ""  (Double Quote)
 *          3. ``  (Backticks) / Template Literals
 *      How Many Ways to create String ? 
 *          1. '' , 2. "" 3. `` 4. new String();
*       https://devdocs.io/javascript/
 */

// String literal
var str1 = 'Hello World';
// console.log(str1);

var str2 = "Hello World";
// console.log(str2);

var str3 = `Hello World`;
// console.log(str3);

// Dynamic Creation
var str4 = new String("Hello World");
// console.log(str4);

var str5 = "Hello";
var str6 = "There";

var str7 = str5 + ' ' + str6;
// Hello There 
// console.log(str7);

var str8 = "Srinu";
var str9 = "Chicken";
var str10 = "Thumbsup";

// Srinu has ate chicken with combination of Thumbsup

var str11 = str8 + " has ate " + str9 + " with combination of " + str10;
// console.log(str11);

// I am srinu from hyderabad , i stay in hostel and on sundays in my hostel
// chicken is available and i purchase thumbsup for kick

var str12 = 'I am ' + str8 + " from hyderabad , i stay in hostel and on sundays in my hostel "
    + str9 + " is available and i purchase " + str10 + " for kick";
// console.log(str12);

// '' "" ``

var str13 = `I am ${str8} from hyderabad , i stay in hostel and on sundays in my hostel ${str9} is available and i purchase ${str10} for kick`;
// console.log(str13);

var a = 10;
var b = 20;
var c = a + b;
// The Sum of a and b is 30
// console.log("The sum of a + b is", c);
// console.log("The sum of a + b is", a + b);
// console.log("The sum of a + b is " + c);
// console.log("The sum of a + b is " + a + b);
// console.log("The Sum of a + b is " + (a + b));
// console.log(`The Sum of a + b is ${a + b}`);



// console.log(2 + 2);   // 4
// console.log(2 + "2");   // 22
// console.log("100" - 2);  // 98
// console.log("2" + 4);    // 24
// console.log("2" + true);  // 2true
// console.log("false" + true); // falsetrue
// console.log(2 / "2");         // 1
// console.log("2" + 2 + "10" + (100 + 30));  // 2210130
// console.log("10 " + 10);   // 1010
// console.log("2" * 2);             // error , 22 , 4 , 2
// console.log("10" / -2);        // -5 , error 
console.log("10" + 100 + +"100");  // error 10100100  100100 10100 10100 100 110100 10200
console.log(10 + +"2" + 100);  // 102100
console.log(10 + +"100" * 2);  // 20200 10200 
console.log(typeof +"100");   // string ,  error , typeof100
console.log(100 + + "100");


