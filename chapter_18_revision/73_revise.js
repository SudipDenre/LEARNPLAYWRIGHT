function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

function sayBye() {
    console.log("Bye");
}

greet("Sudip", sayBye);


// example
function orderFood(item, callback){
    console.log(`You have selected ${item}`);
    callback();
}

function deliverFood(){
    console.log("You food is prepared and will be delivered soon...");
}

orderFood("Pizza", deliverFood);