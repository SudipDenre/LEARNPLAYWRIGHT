const obj = {a:1, b:3, c:5};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for(const key in obj){
    console.log(`${key} -> ${obj[key]}`);
    
}


