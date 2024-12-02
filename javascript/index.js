/**
 *  Operators
 *  ---------
 *      Logical Operators
 *      ---------------
 *          Logical Operator in js are used to evaluate the Boolean Expression , where 
 *          whole expression is true or false based on give operator
 *          and operator , or operator , not operator
 *          && , || , !
 *          
 *          true && true -> true
 *          false && true -> false
 *          true && false -> false
 *          false && false -> false
 * -----------------------------------------------
 *         || 
 *         
 *          true || true -> true
 *          false || true -> true
 *          true || false -> true
 *          false || false -> false 
 */
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(10 == 10 || 11 != 11);
console.log(10 > 10 || 9 != '9');
console.log(10 > '10' || 9 !== '9');
console.clear();

var a = 10;
console.log(a != 11 || ++a);
console.log(a);

console.clear();

console.log(a < 9 || ++a);
console.log(a);
console.log((a > 10 && 10 == a) || a < 11);
console.clear();


console.log((a == 11 && a > 10) || ++a > 11);
console.log(a);

// ! not
console.log(!true)
console.log(!false);

var a = 10;
var b = 20;

console.log((a > b) || (b == a + 10 && b == a));
console.log(!(a > b));

console.clear();

/**
 * Ternary Operator in Javascript
 *      Ternary Operator is used to check condition , ternary operator is short hand 
 *      if and else 
 *      if condition is true , it will execute true part which  is written after ?
 *      if condition is false , it will execute false part which is written after : 
 *      
 *      Syn :
 *              (condition) ? true part : false part; 
 */
var age = 18;
(age >= 18) ? console.log("Eligible for Voting") : console.log("Not Eligible");
var res = (age >= 18) ? "Eligible" : "!";
console.log(res);

// a = 10 , b = 11 -> if a > b -> a is big , b > a -> b is big

console.clear();
var a = 11, b = 12;
res = (a > b) ? "A is Big" : "B is Big";
console.log(res);

res = (b > a) ? "B is Big" : "A is Big";
console.log(res);

res = (a > b) ? "A is big" : (a < b) ? "B is big" : "both are  equal";
console.log(res);

var a = 10, b = 10, c = 10;
// Find the largest b/w a , b , c

res = (a > b && a > c) ? "A is big" : (b > c) ? "B is big" : "c is big";

console.log(res);

var res = (a > b && a > c) ? "a is greater"
    : (b > a && b > c) ? "b is greater"
        : (c > a && c > b) ? "c is greater" : "equal";
console.log(res);

res = (a > b && a > b) ? 'a is big' : (b > a && b > c) ? "b is big" : 'c is big';
console.log(res);
console.clear();

a = 10, b = 20;
console.log(`Before Swaping a = ${a} , b = ${b}`);

c = a; // 10
a = b; // 20
b = c; // 10

console.log(`After Swaping a = ${a} , b = ${b}`);

// swap both numbers without using extra varaible


