/**
 *      / -> quoent 
 *      % -> remainder
 *      
 */
var a = 10;
var b = 2;
console.log(`${a / b}`);
console.log(a % b);
console.log(a % b + 2);
console.log(b % a * 3);
console.log(b++ % a == 0);
console.log(b);
console.clear();

// Research 
console.log((2 % 3 == b++) + 10);
console.log(0.1 + 0.2 == 0.3);
console.log(0.2 + 0.5 == 0.7);

console.clear();

/**
 * Logical Operators
 * ----------------
 *      && -> and, || -> or , ! -> not
 *      and 
 *      
 *      true && true -> true
 *      false && false -> false
 *      true && false ->  false
 *      fasle && true  -> false
 */
console.log(true && true);
console.log(false && false);
console.log(true && false);
console.log(false && true);

// ==  <= < > >=
console.log(10 == '10' && false);
console.log(10 >= 1 && 1 <= 10);
console.log(3 > 1 && 10 < 10);

console.clear();

var gender = "MALE";
var age = 21;
// console.log(gender == 'Female' && age >= 21);
// console.log(gender == 'female' && age >= 21);
// console.log(gender == 'Female' && age < 21);
// console.log(gender == 'Male' && age >= 24);
console.log(gender == "MALe" && true);
console.log(0 && 1);
console.log(1 && 1);
console.log(1 && 0);
console.log(0 && 0);
console.log("str" && null);
console.log(10 && -1);
console.log(true && '0');
console.log('0' && true);
console.clear();
var a = 10;
var b = 11;
console.log(a == 10 && b++ == 11);
console.log(b);
console.log(a != 10 && ++b == 12);
console.log(b);
console.log(b++ !== false && ++a == 11);
console.log(b , a);
console.log(a++ == a && b++ == a && true);
console.log((true && 10 == 10) && true);
console.log(a , b);






