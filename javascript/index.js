/**
 * For Loop and Arrays 
 * --------------------
 *          Syn :
 *                  for(initialisation ; condition ; updation){
 *                        // statements
 *                  }  
 *                  initialisation -> baby born
 *                  condition      -> alive / death
 *                  statements     -> cry , milk , sleep
 *                  updation       -> ageing
 */
/**
 * first iteration - only initialisation and condition
 * if condition is true , statements are executed
 * if condition is false , loop is terminated
 * 
 * from second iteration to end of loop
 *          -> updation and condition 
 *         if condition is true , statements are executed
 *         if condition is false , loop is terminated  
 * 
 * 
 * Array in Javascript
 * -------------------
 *      In javascript array is an object which can store any type of datatype without
 *      any length restrictions in a single varaible
 *      Always Array indexes starts from 0 
 *      Arrays stores data in form of continous memory allocation
 *      it can stores homogenous and hetrogenous data
 *      There are several ways to create an Array
 *      --------------------------------------------
 *          1. using [] 
 *          2. using new Array();
 *          3. Array.from();
 *        Syn : 
 *                  variable refVar = [];
 */
var arr = [];
console.log(arr, typeof arr);
console.log(arr.length);

console.clear();

arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
console.table(arr);
console.log(arr.length);
console.log(arr[0]);

console.clear();

arr[0] = 10;

console.log(arr[0]);
console.log(arr);

console.clear();

arr = [1, 2, 3, 4, 5, 6];

arr[4] = arr[1] + arr[3];
console.log(arr);

console.log(arr[0]); // accessing first element
console.log(arr[5]);
console.log(arr.length);
console.log(arr[arr.length - 1]); // accessing last element

console.clear();


arr = ['Devara', 'Akash', 'Krishna',
    12, false, true, 3.0, 3.222222222,
    NaN, undefined, {}, [], function () { }];

console.log(arr);
console.table(arr);

console.clear();

arr = ['Haritha', 'Durga', 'Ramu', 'PK', 'Sai', 'Pranathi', 'Sharuk'];

console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]);

console.log("-----------------------")

for (var i = 0; i <= 6; i++) {
    console.log(arr[i]);
}

console.log("-----------------------")
// 0 to 6
for (var i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
}
console.log("-----------------------")

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

