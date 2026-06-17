let a = 10;
let b = a;
b = 99;
console.log(b); // 99
console.log(a); // 10

// Incase of Primitive, there is no concept of reference.
// Reference --> Object, Array, function

let c = {browser : "chrome"};
let d = c;
d.browser = "Edge";
console.log(d); // {browser : "Edge"}
console.log(c); // {browser : "Edge"}