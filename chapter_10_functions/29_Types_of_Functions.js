// without Param, without return
function greet1(){
    console.log("Hi Sudip");
}

greet1();

// with Param, without return
function greet(name){
    console.log("Hi ", name);
}

greet("Abhi");

// without Param, with return
function greetMe(){
    return "Hi Kartik";
}

let c = greetMe();
console.log(c);

// With Param, with return
function add(a,b){
    return a+b;
}

let sum = add(4,5);
console.log(sum);

// functions as expression
const doSomething = function (work){
    return `${work}ing...`;
}

console.log(doSomething("Study"));

// Arrow Function
const showStatus = status => status;
console.log(showStatus("In-Progress"));
