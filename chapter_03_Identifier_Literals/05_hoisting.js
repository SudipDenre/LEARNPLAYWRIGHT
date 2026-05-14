console.log(greeting); //Undefined -> Behind The Scenes -> Hoisted with Undefined
var greeting = "Hello";
console.log(greeting);


//console.log(l); //  TDZ - ReferenceError: Cannot access 'l' before initialization
let l=30; // TDZ ends
console.log(l);



//console.log(c); // TDZ - ReferenceError: Cannot access 'c' before initialization
const c="Hi";  // TDZ ends
console.log(c);


// Example
console.log(x); // undefined
var x = 5;
function test1() {
    console.log(x); // undefined
    var x = 10;
}
test1();

// Example
var a = 1;
function test2() {
    console.log(a); // undefined
    if (true) {
        var a = 2;
    }
    console.log(a); // 2
}
test2();


