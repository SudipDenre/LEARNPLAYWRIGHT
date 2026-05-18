// Example1
let a = 10;
let b = "10";
console.log(a == b); // true
console.log(a === b); // false

// Example2
let x = 5;
console.log(x++); //5
console.log(++x); //7
console.log(x); //7

// Example3
console.log(0 || "Hello"); // Hello -> || will take first truthy value, if all are false then will take last value
console.log("" && "JavaScript"); // "" -> && will take first falsy value, if all are true then will take last value
console.log(null ?? "Default"); // Default -> ?? - Nullish Coalescing Operator - Returns right value if left is null or undefined

// Example4
console.log("5" + 2); //52
console.log("5" - 2); //3
console.log(true + 1); //2
console.log(false == 0); //true

// Example5
console.log([] == false); //true

// Example6
console.log([] + []); //""
console.log([] + {}); //"[Object Object]"
console.log({} + []); //"[Object Object]"

// Different Operators
console.log(11**3); // 11^3 = 1331

console.log(5=="5"); //true
console.log(5!="5"); //false

console.log(5==="5"); //false
console.log(5!=="5"); //true


console.log(5 & 1); // 1
console.log(5 & 7); //5
console.log(6 | 9); //15
console.log(13 | 7); //



// increment operator
let num=10;
console.log(++num + num);

let num1=10;
console.log(num1++ + ++num1); // 10+12
console.log(num1);
