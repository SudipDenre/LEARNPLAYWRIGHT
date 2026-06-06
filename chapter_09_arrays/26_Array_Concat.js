let a = [2,3];
let b = [4,5];

//let c = a.concat(b);
let c = [...a, ...b]; // spread (modern way)
console.log(c);

let arr = ["pass", "fail", "skip"].join("|");
console.log(arr); // pass|fail|skip
