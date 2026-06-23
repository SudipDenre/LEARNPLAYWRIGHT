const users = [
    { name: "Sudip", age: 25 },
    { name: "Rahul", age: 22 },
    { name: "Priya", age: 24 },
    { name: "Amit", age: 20 }
];

// Create a new array containing users whose age is greater than 22.
// Expected:
// [
//     { name: "Sudip", age: 25 },
//     { name: "Priya", age: 24 }
// ]

let newUsers = users.filter(user => user.age > 22);
console.log(newUsers);


// Create a new array containing users whose name starts with "P".
// Expected:
// [
//     { name: "Priya", age: 24 }
// ]

let requiredUsers = users.filter(user => user.name.startsWith("P"));
console.log(requiredUsers);


