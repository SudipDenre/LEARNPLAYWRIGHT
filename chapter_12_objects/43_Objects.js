const calculator = {
    value:0,
    add(n){

    },
    subtract(n){

    }
};

// Objects can contain functions also inside it.

// Basic Destructuring
const user = {name1:"Sudip", age:25, city:"NYC", country:"USA"};

// const {name1, age} = user;

// console.log(name1);
// console.log(age);

// Renaming variables
const {name1: userName, age: userAge} = user;
console.log(userName);
console.log(userAge);

// Default values --> if country is present in user, then will return the exact value.
// But, if country isn't present in user, it will return the default value as Kolkata.
const {country="Kolkata"} = user;
console.log(country);


const data = {
    user :
    {
        name : "Sudip",
        address :
        {
            city : "Tarakeswar"
        }
    }
}

console.log(data.user.name);
console.log(data.user.address);
console.log(data.user.address.city);


