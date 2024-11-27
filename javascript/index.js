// Research -> join , concat , indexOf
//              ..        -2   -1
var arr = [10, 12, 15, 14, 67, 85];
//         0    1   2   3  4   5
console.log(arr.at(4));
console.log(arr.at(0));
console.log(arr.at(-1));
console.log(arr[arr.length - 1]);
console.log(arr.at(20));

console.clear();

console.log(arr);
arr.unshift(102);
console.log(arr);
var result = arr.unshift(30);  // 30 102 remaining -> 8
console.log(arr);
console.log(result);

var res = arr.unshift(1, 2, 3, 4, 5);
console.log(arr);
console.log(res);

console.clear();

arr = [10, 14, 19, 12, 49];

// arr[arr.length] = 20; // adding element at last

arr.push(10);

var res = arr.push(45, 18, 7);

console.log(res); // 9
console.log(arr);

console.clear();

arr = [10, 12, 94, 32, 14, 56];
console.log(arr);
arr.pop();   // 
var res = arr.pop();
console.log(arr); // 10 12 94 32 
console.log(res);

arr = [];
res = arr.pop();
console.log(res);

console.clear();

arr = [12, 4123, 312, 43, 34, 1, 12, 12];
console.log(arr);
arr.shift();
res = arr.shift();
console.log(arr, res);

console.clear();

arr = [12, 43, 12, 34];
//    [0 , 0 , 0 , 0 ]

// 0 - 3
// for (var i = 0; i < arr.length; i++) {
//     arr[i] = 0;
//     console.log(arr);
// }

arr.fill(0);
console.log(arr);

arr = [12, 43, 12, 34];

arr.fill(0, 1);
console.log(arr);

arr = [12, 43, 12, 34];
arr.fill(0, 1, 3);
console.log(arr);

console.clear();

//Slice and Splice

arr = [12, 43, 54, 67, 8, 44, 2, 2, 4];
console.log(arr.slice());
console.log(arr.slice(2));
console.log(arr);
console.log(arr.slice(3, 7));
console.log(arr.slice(-4));
console.log(arr.slice(3, -2));
console.log(arr.slice(0, -1));
console.log(arr.slice(-14));
console.log(arr.slice(-5, -10));
console.clear();

arr = [1, 4, 6, 1, 3, 4, 5, 9];
res = arr.splice(1);
console.log(arr);
console.log(res);
console.clear();
arr = [2, 3, 45, 2, 4, 3, 21, 321, 3, 5, 5];
arr.splice(0);
console.log(arr);
arr = [2, 3, 45, 2, 4, 3, 21, 321, 3, 5, 5];
arr.splice(4, 1);
console.log(arr);
console.clear();
arr.splice(6, 3);
// 2 3 45 2 3 21 5
console.log(arr);
arr.splice(3, 1, 76);
console.log(arr);
arr.splice(3, 0, 34, 454, 65, 57, 67, 67);
console.log(arr);

console.clear();
