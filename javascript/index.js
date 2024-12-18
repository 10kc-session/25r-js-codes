function add(val, callback) {
    callback(val + 10);
}
function sub(val, callback) {
    callback(val - 5);
}

function mul(val, callback) {
    callback(val * 5);
}

function div(val, callback) {
    callback(val / 2);
}
add(20, (addRes) => {
    sub(addRes, (subRes) => {
        mul(subRes, (mulRes) => {
            div(mulRes, (divRes) => {
                console.log(divRes);
            })
        })
    })
})

function placeOrder(dispatch) {
    console.log("Order Placed");
    dispatch("Failed to Dispatch", false);
}
function shipping(outOfDelivery) {
    console.log("Shipping Success");
    outOfDelivery("Your Order is Out of Delivery");
}
placeOrder((message, status) => {
    if (status) {
        console.log(message);
        shipping((outMessage) => {
            console.log(outMessage);
        });
    } else {
        console.log(message);
    }
})

class X {
    constructor(callback) {
        callback(10, 30);
    }
}
let x = new X((a, b) => {
    console.log(a, b);
});