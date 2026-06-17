let c = {status : "Pass"};
let d = {status : "Pass"};

if(c===d){
    console.log("TRUE");    
}else{
    console.log("FALSE");
    
}

if(c==d){
    console.log("TRUE");    
}else{
    console.log("FALSE");
    
}

// Here c and d are not pointing to same object in heap memory.

c.status = "Fail";
console.log(c.status); // Fail
console.log(d.status); // Pass

if(c===d){
    console.log("TRUE");    
}else{
    console.log("FALSE");
    
}

if(c==d){
    console.log("TRUE");    
}else{
    console.log("FALSE");
    
}

// === checks strict equality
// == checks loose equality
// But for objects, both compare by reference, not by property values
// So, here === and == both will return false;


