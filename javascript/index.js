let arr = ["hemanth", "pavan kalyan", "haritha", "maruthi"];

// let resArr = [];
// arr.forEach(ele => resArr.push(ele.toUpperCase()));
// console.log(resArr);

let resArr = arr.map(ele => ele.toUpperCase());
// console.log(resArr);

let arr2 = [1, 2, 3, 4, 5];

let res = arr2.filter(ele => ele % 2 == 0);
console.log(res);
console.log(arr2.map(ele => ele % 2 == 0));


function isEven(ele) {
    return ele % 2 === 0;
}

console.log(arr2.map(isEven));

// res = []; // 2 , 4

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 == 0) {
//         res.push(arr2[i]);
//     }
// }
// console.log(res);

// res = [odd , even , odd , even , odd];

// res = [];
// for (let index = 0; index < arr2.length; index++) {
//     if (arr2[index] % 2 == 0) {
//         res.push("Even");
//     } else {
//         res.push("Odd");
//     }
// }
// console.log(res);

// console.log(arr2.map(ele => ele % 2 == 0 ? "Even" : "Odd"));



console.clear();
// console.log(arr2);
// arr2.filter(ele => ele % 2 == 0).map(ele => ele ** 2)
//     .forEach(ele => console.log(ele));

// res = [];
// for (let i = 0; i < arr2.length; i++) {
//     res[i] = (arr2[i] * arr2[i]);
// }
// console.log(res);


// arr.forEach(value => console.log(value.toUpperCase()));

// console.log(arr);

// arr.forEach((value, index, arr) => {
//     arr[index] = value[0].toUpperCase().concat(value.substring(1));
// })

// console.log(arr);


arr = [1, 1, 1, 1, 3, 4, 5];

count = 0;
arr.forEach(ele => {
    if (ele === 1) {
        count++;
    }
})
console.log(count);

console.log(arr.filter(ele => ele === 1).length);
