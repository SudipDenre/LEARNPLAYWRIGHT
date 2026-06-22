const users = [
    { name: "Sudip", age: 25 },
    { name: "Rahul", age: 22 },
    { name: "Priya", age: 24 }
];

// Create a new array containing only the names.
let names = users.map(user => user.name);
console.log(names);

// Create a new array containing:
// [
//   "Sudip-25",
//   "Rahul-22",
//   "Priya-24"
// ]

let userdetails = users.map(user => `${user.name}-${user.age}`);
console.log(userdetails);

