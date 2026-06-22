const users = ["Sudip", "Rahul", "Amit", "Priya"];

// Print all users using a loop.
for(let i=0;i<users.length;i++){
    console.log(users[i]);
}

// Print only users whose name length is greater than 5.
for(let i=0;i<users.length;i++){
    let nameLength = users[i].length;
    if(nameLength>5){
        console.log(users[i]);    
    }
}


// Count how many users are present in the array.
console.log(users.length);

// Print the array in reverse order.
for(let i=users.length-1;i>=0;i--){
    console.log(users[i]);
}