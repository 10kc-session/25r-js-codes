/**
 *  Loops in Javascript
 *  -------------------
 *      if(condition){
 *              // statements
 *      }
 *      for(initilisation ; condition ; updation){  
 *          
 *      }
 *      Types of Loops 
 *      ---------------
 *      1. for loop
 *              for(ini ; condition ; updation){
 *                  // statement
 *              }
 *      2. while loop
 *              while(condition){
 *                  // statements
 *              }
 *      3. do while loop
 *      4. for...of loop  
 *      5. for..in loop
 */
// for (i = 1; i <= a; i++)
// {
//     console.log(i);
// }
var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// question , print even number from 1 to 20 using while loop

console.clear();
var i = 2;
while (i <= 20) {
    console.log(i);
    i = i + 2;
}
console.clear();
// javascript , tpircsavaj -> while loop

var str = "javascript";
var res = '';
var i = str.length - 1;
while (i >= 0) {
    res += str[i];
    i--
}

console.log(res);

console.clear();

var arr = [1, 4, 3, 5, 3, 5, 6, 7, 8];
// []; -> pop();

var length = arr.length;
while (length > 0) {
    arr.pop();
    length--;
}
console.log(arr);

// debugger
arr = ["kamal", "raghu", "rahul", "jansi", "Ramu", "Reshma"];
for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    if (str[0] == 'r' || str[0] == 'R') {
        arr[i] = str.toUpperCase();
    }
}
console.log(arr);

/**
 * do while;
 *      do{
 *          // statements
 *      }while(condition);
 */

var i = 1;
while (--i > 0) {
    console.log("while");
}
i = 1;
do {
    console.log("Do While");
} while (--i > 0);

console.clear();

// 1 - 5 print

var i = 1; // 2 3 4 5 6

do {
    console.log(i);
    i++;
} while (i <= 5);

console.clear();

var i = 1;
do {
    console.log(++i);
} while (++i <= 10);

console.clear();
var i = 1; // 2 3 4 5 6 7 8
do {
    console.log(i + 3); // 4 5 6 7 8 9 10 11
}
while (i++ * 2 <= 14);


