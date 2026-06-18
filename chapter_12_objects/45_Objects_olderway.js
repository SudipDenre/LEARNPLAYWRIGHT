const user = {
    firstName : "Sudip",
    lastName : "Denre",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
    
}

console.log(user.lastName);
console.log(user.fullName);
user.fullName = "Karthik Tyagi";
console.log(user.fullName);

// This is older way
