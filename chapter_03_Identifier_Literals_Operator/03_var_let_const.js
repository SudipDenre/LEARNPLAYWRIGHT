var v=10;
let l=30;
const c=3.14;

var browser="Chrome";
var browser="Firefox"; // Redeclaration
browser="Edge";    // Reassignment

var a=10; // Global Scope
console.log(a);

function printHello(){
    console.log("Hello Sudip");
    var a=20;  // Local Scope
    console.log(a);
}

printHello();

console.log(a);


// let
let s=10;
console.log(s);

//let s=5; -> throws SyntaxError as Redeclaration is not allowed for let variable

s=34;  // Reassigned
console.log(s); 

if(true){
    let temp=56;
    console.log(temp);
}

// console.log(temp); -> ReferenceError as let is Block-scoped


// const -> used for constant variable
const status="pending";
console.log(status);

//const status="failed"; -> throws SyntaxError as Redeclaration is not allowed

//status="inprogress"; -> throws TypeError as Reassignment is not allowed





