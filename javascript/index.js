/**
 * Strings
 * -------
 *       '' , "" , `` , new String();
 *   class X {
 *      start(newTitle){
            this.title = newTitle;
 *      }
 *   }
 *      var ref = new X();
 *      ref.start();
 *      var str = 'Hello Wol'     
 *      var str = new String("Hello World");
 * 
 *  What is Method ?
 *  -----------------
 *       Javascript Builtin - Methods
 *       -----------------------------
 *          The Methods are used to manipulate the object data.
 *          The Methods are stored in properties of Object to perform
 *          operations on same object
 *              Ex : 
 *                      var obj = {
 *                              "name" : "Rahul",
 *                              "print" : function(){
 *                                  console.log(this.name);
 *                              }
 *                      }
 *       There are two types of javascript in-built in methods 
 *          1. non static methods
 *                  The methods which are invoked by reference or literal are known 
 *                  as non static methods
 *                  Ex : 
 *                          var str = "Hello World"; // Literal
 *                          console.log(str.toUpperCase());
 *                          
 *                          var str = new String("Hello World"); // Dynamic in Nature
 *                          console.log(str.toLowerCase()); 
 *          2. static methods
 *                  The Methods which are invoked by class name are known as static
 *                  methods
 *                      Ex : 
 *                              console.log(Array.from("123"));
 */
// declaration + assignment
var a; // dec
var str = "Hello World"; // initil
// str.replace(target , newValue);
console.log(str.replace("Hello", "HELLO"));

str = "Hello World Hello World Hello World";
console.log(str.replace("World", "There"));
console.log(str.replaceAll("World", "There"));
console.log(str);

console.log(str[0]);
console.log(str.length);
console.log(str[str.length - 1]);
console.log(str[-1]);

console.log(str.at(-1));
console.log(str.at(5));
console.log(str.at(-4));
console.log(str.charAt(5));
console.clear();

console.log(str.charAt(20));
console.log(str.charAt(45));
console.log(str.charAt(-4));
console.log(str.at(30));

console.clear();

// https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html

console.log(str.charCodeAt(14));

// Javascrip
console.clear();

// console.log(str.slice(starting , ending));
// console.log(str.slice(-4 , -1));
// console.log(str.slice(4 , -5));
// console.log(str.slice(0 , -12));
// console.log(str.slice(4));
// console.log(str.slice(4, 10));
// console.log(str.slice(0,10));
// Java is Awesome
// console.log(str.slice(0,4) + str.slice(10));
// console.log(str.slice(-2));
// console.log(str.slice(-7));

// console.log(str.substring());
// console.log(str.substring(4));
// console.log(str.substring(4, 4));
// console.log(str.substring(-1));
// console.log(str.substring(-4));
// console.log(str.substring(-6 , 5));
// console.log(str.substring(5, 0));
// console.log(str.substring(5 , -1));

// console.log(str.substr());
// console.log(str.substr(4 , 11));
// console.log(str.substring(4));
// console.log(str.slice(4));
// console.log(str.substr(-1, 10));


console.log(str.toUpperCase());
// console.log(str.toLowerCase());

console.log(str.split());
console.log(str.split(" "));
console.log(str.split(""));
console.log(str.split("a"));
console.log(str.split("", 5));
console.log(str.split(" ", 1));
console.clear();

str = "javascript is awesome";
// Javascript Is Awesome

console.log(str.at(0).toUpperCase()
    + str.slice(1, 11)
    + str.at(11).toUpperCase()
    + str.slice(12, 14)
    + str.at(14).toUpperCase()
    + str.slice(15));

console.log(str.at(0).toUpperCase().concat(str.slice(1, 11)));




