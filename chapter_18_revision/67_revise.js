const users = [
    { id: 1, name: "Sudip" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" }
];

// Find the user whose id is 2.
// Expected:
// { id: 2, name: "Rahul" }

let newUser = users.find(user => user.id===2);
console.log(newUser);

// Find the user whose name is "Priya".
// Expected:
// { id: 3, name: "Priya" }

let requiredUser = users.find(user => user.name==="Priya");
console.log(requiredUser);





