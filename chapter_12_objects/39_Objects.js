let obj = {};
let obj1 = {
    name : "sudip"
};
console.log(obj);
console.log(obj1);

// obj, obj1 ----> Object Reference
// {} ----> Object
// {"name":"Sudip"} -----> JSON

let a = {status:"Pass"};

console.log(a.status);
console.log(a["status"]);

let b = a; // Copy-By-Reference ---> a and b both are pointing the same object reference.

b.status = "Fail";

console.log(b.status); // Fail
console.log(a.status); // Fail

if(b===a){
    console.log("TRUE");    
}else{
    console.log("FALSE");
    
}

if(b==a){
    console.log("TRUE");    
}else{
    console.log("FALSE");
    
}



