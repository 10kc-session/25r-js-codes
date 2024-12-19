function placeOrder(orderId, callback) {
    setTimeout(() => {
        if (true) {
            console.log(`Order ${orderId} placed.`);
            callback();
        }
        else
            console.log("Orderer placed failed")
    }, 1000);
}
function dispatchOrder(orderId, callback) {
    setTimeout(() => {
        if (true) {
            console.log(`Order ${orderId} dispatched.`);
            callback();
        }
        else
            console.log("Dispatch Failed");
    }, 1000);
}
function shipOrder(orderId, callback) {
    setTimeout(() => {
        console.log(`Order ${orderId} shipped.`);
        callback();
    }, 1000);
}
function outForDelivery(orderId, callback) {
    setTimeout(() => {
        console.log(`Order ${orderId} is out for delivery.`);
        callback();
    }, 1000);
}

function deliverOrder(orderId, callback) {
    setTimeout(() => {
        console.log(`Order ${orderId} delivered.`);
        callback();
    }, 1000);
}

placeOrder("12345", () => {
    dispatchOrder("12345", () => {
        shipOrder("12345", () => {
            outForDelivery("12345", () => {
                deliverOrder("12345", () => {
                    console.log("Order tracking completed!");
                });
            });
        });
    });
});
