let arr = [];

let fruits = ["apple", "banana", "cherry"];

console.log(fruits.length);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
// another way to access elements in an array
console.log(fruits.at(-3));
console.log(fruits.at(-2));
console.log(fruits.at(-1));

console.log(fruits[4]); // Undefined

let num = [10, 20, 30, 40];

console.log(typeof fruits); // Object

let mixed = [1, "rabbit" , false, 4.5];

let scores = new Array(3);
console.log(scores);

let scores1 = new Array(1,2,3);
console.log(scores1);

let scores2 = Array.of(1,2,3,4);
console.log(scores2);

let chars = Array.from("SUDIP");
console.log(chars);

//Modify
let test = ["pass", "fail", "skip"];
console.log(test);
test[1] = "reject";
console.log(test);


// Adding Element at Last
let rolls = [3,6,2];
rolls.push(7);
rolls.push(9,8);
console.log(rolls);

// Removing Element from Last
rolls.pop();
console.log(rolls);

// Adding in the start
let marks = [45, 34, 21];
marks.unshift(98);
marks.unshift(100, 76);
console.log(marks);

// Removing from the start
marks.shift();
console.log(marks);

// splice
let rules = [1,2,3,4];
console.log(rules);

//rules.splice(2,1); // index-based deletion - 2-> start index, 1-> delete count
//console.log(rules);  // [1,2,4]

// rules.splice(2,0,99); // index-based insertion
// console.log(rules); // [1,2,99,3,4]

rules.splice(2,1,87); // will delete 2-indexed element -> then add 87 in that place
console.log(rules); // [1,2,87,4];




