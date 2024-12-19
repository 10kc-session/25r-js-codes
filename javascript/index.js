
// class X {
//     constructor(callback) {
//         callback(() => { this.then() }, () => { this.catch() });
//     }
//     then(callback) {
//         callback()
//     }
//     catch(callback) {
//         callback();
//     }
// }

// let promise1 = new Promise((resolve, reject) => {
//     console.log("Promise 1");
//     setTimeout(() => {
//         resolve("Promise 1 success");
//     }, 4000);
// })
// let promise2 = new Promise((resolve, reject) => {
//     console.log("Promise 2");
//     setTimeout(() => {
//         resolve("Promise 2 Success");
//     }, 3000)
// })
// let promise3 = new Promise((resolve, reject) => {
//     console.log("Promise 3");
//     setTimeout(() => {
//         resolve("Promise 3 Success");
//     }, 1500)
// })
// promise1.then(res => console.log(res));
// promise2.then(res => console.log(res));
// promise3.then(res => console.log(res));

// promise1.then(res => {
//     console.log(res);
//     promise2.then(res => {
//         console.log(res);
//         promise3.then(res => console.log(res));
//     })
// })

// function add(val) {
//     return new Promise((resolve, reject) => {
//         reject("Promise Rejected");
//     });
// }

// function sub(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val - 10);
//     });
// }
// function mul(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val * 10);
//     });
// }
// function div(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val / 2);
//     });
// }

// add(20)
//     .then(addRes => sub(addRes))
//     .then(subRes => mul(subRes))
//     .then(mulRes => div(mulRes))
//     .then(divRes => console.log(divRes))
//     .catch(err => console.log(err));

function placeOrder(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order ${orderId} placed.`);
            resolve();
        }, 1000);
    })
}
function dispatchOrder(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order ${orderId} dispatched.`);
            resolve();
        }, 1000)
    });
}
function shipOrder(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(`Order ${orderId} shipped.`);
            // resolve();
            console.log("Failed to Shipped");
            reject();
        }, 1000);
    })
}

function outForDelivery(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order ${orderId} is out for delivery.`);
            resolve();
        }, 1000);
    });
}

function deliverOrder(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order ${orderId} delivered.`);
            resolve();
        }, 1000);
    });
}

placeOrder(12345)
    .then(() => dispatchOrder(12345))
    .then(() => shipOrder(12345))
    .then(() => outForDelivery(12345))
    .then(() => console.log("Order tracking completed!"))
    .catch(() => console.log("Error"));

// async function call() {
//     await dispatchOrder(12345);
//     await shipOrder(12345);
//     await outForDelivery(12345);
//     console.log("Order Completed");
// }
// call();