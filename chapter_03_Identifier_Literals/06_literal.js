// Example1
let name = "Sid";
console.log(`Hello ${name}`);  // `` used for Template Literal
                                // ${} is called Template Interpolation

// Exanple2
let a = null;
let b;
console.log(typeof a); // Object
console.log(typeof b); // Undefined

// Example3
let language = "JavaScript";
let version = 2025;
console.log('I am learning ${language} version ${version}'); // I am learning ${language} version ${version}
console.log(`I am learning ${language} version ${version}`); // I am learning JavaScript version 2025

// Example4
let x = null;
let y = undefined;
console.log(x == y); // true
console.log(x === y); // false
/* ==(Double Equal)
   Checks values after type conversion (if needed)
   It is loose equality
   ===(Triple Equal)
   Checks values and data types
   It is Strict Equality 
*/

// Example5
let age = 25;
console.log("My age is " + age);
console.log(`My age is ${age}`); // it is preferred in modern JS

// Example6
let user = "Sudip";
console.log("Hello\nSudip");
console.log(`Hello
${user}`); // Template literals support:✅ multiline strings directly

// Example7
let price = 100;
let tax = 18;
console.log(`Total price is ${price + tax}`); // 118
console.log("Total price is " + price + tax); // 10018
console.log("Total price is " + (price + tax)); //118



