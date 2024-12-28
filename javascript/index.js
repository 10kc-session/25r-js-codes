// async and await 
function generate() {
    return Promise.resolve("Hello World");
}
// generate().then(res => console.log(res));

async function generator() {
    return "Hello World";
}
// console.log(generator());
// generator().then(res => console.log(res));

// console.log(Promise.resolve('Hello').then(res => console.log(res)));

// Promise.resolve("Hello There")
//     .then(res => {
//         console.log(res);
//         return "Promise Object";
//     })
//     .then(res => console.log(res))
//     .then(res => console.log(res));

// const promise = new Promise((resolve, reject) => {
//     resolve('Hello');
// });
// promise
//     .then(res => {
//         console.log(res);
//         return new Promise((resolve, reject) => resolve('World'));
//     })
//     .then(res => console.log(res));
// const promise = Promise.reject('Failure');
// promise.catch(err => console.log(err)).then(() => console.log("Completed"));

// const promise = Promise.resolve('Step 1');
// promise
//     .then(res => {
//         console.log(res);
//         return new Promise((resolve, reject) => {
//         });
//     })
//     .then(res => console.log(res));

// const promise = new Promise((resolve, reject) => {

// });
// promise
//     .catch(err => {
//         console.log(err);
//         return 'Recovered';
//     })
//     .then(res => console.log(res));


// function y() {
//     return promise1.then(res => res);
// }
// y().then(res => console.log(res));

// let promise1 = new Promise(resolve => {
//     resolve("Hello World");
// })

// async function x() {
//     let res = await promise1; // Hello World
//     return res;
// }
// x().then(res => console.log(res));


// fetch("http://localhost:3000/data")
//     .then(response => response.json())
//     .then(data => console.log(data));

// async function getData() {
//     let response = await fetch("http://localhost:3000/data");
//     let data = await response.json();
//     console.log(data);
// }
// getData();


// let promise = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("Hello World");
//     }, 2000);
// })
// promise.then(result => console.log(result));
// console.log("Completed");

async function printData() {
    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello World");
        }, 2000);
    })
    let res = await promise;
    console.log(res);
    console.log("Completed");
}
function print() {
    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello World");
        }, 2000);
    })
    promise.then(res => console.log(res));
    console.log("Completed");
}
print();
// printData();
// console.log("Started");