const user1 = {
    name: "Sudip",
    age: 25
};

// Create a new object called user2 containing all properties of user1 plus:
// city: "Kolkata"

const user2 = {...user1, city: "Kolkata"};
console.log(user2);


const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

let newNums = [...nums1, ...nums2];
console.log(newNums);

