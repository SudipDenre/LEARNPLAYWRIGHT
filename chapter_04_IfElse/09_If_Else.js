// Example1
let age=12;
if(age>=18){
    console.log("You are allowed to vote!");
}else{
    console.log("You are not allowed to vote!");
}

// Example2
let score=43;

if(score>=90){
    console.log("Excellent");
}else if(score>=80){
    console.log("Very Good");
}else if(score>=70){
    console.log("Good");
}else if(score>=60){
    console.log("Average");
}else{
    console.log("Failed");
}

// Example3
let isLoggedIn = false;
let userRole = "xyx";

if(isLoggedIn){
    if(userRole==="Admin"){
        console.log("You are Admin - You can access everything!");
    }else if(userRole==="Editor"){
        console.log("You are Editor - Edit access is granted!");
    }else if(userRole==="Viewer"){
        console.log("You are Viewer - Only read access is granted!");
    }else{
        console.log("Your role is not verified!");
    }
}else{
    console.log("You are not Logged in!");
}


// Example4
if("Hello") console.log("String is truthy");
if(45) console.log("Number is truthy");
if({}) console.log("curly braces is truthy");
if([]) console.log("Empty object is truthy");

if("") console.log("Empty string is falsy");
if(null) console.log("Null is falsy");
if(undefined) console.log("Undefined is falsy");
if(NaN) console.log("NaN is falsy");
if(0) console.log("0 is falsy");


