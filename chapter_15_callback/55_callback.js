function print(){
    console.log("Normal function is called...");
}

function placeOrder(item, callback){
    console.log("Hi, Your order is placed...");
    callback();
}

// callback 1
placeOrder("Pizza", print);

// callback 2
placeOrder("Burger", function (){
    console.log("Anonymous function is called...");
});

// callback 3
placeOrder("Burger", () => {
    console.log("Arrow function is called...");
});

