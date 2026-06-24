const order = new Promise((resolve, reject) => {
    let foodReady = true;

    if (foodReady) {
        resolve("Food Delivered");
    } else {
        reject("Order Cancelled");
    }
});

console.log(order);

order.then(message => console.log(message));