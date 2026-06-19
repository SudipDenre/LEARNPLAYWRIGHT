let str = "Abhimanyu";


// Approach 1
let reversedString = "";
for(let i=str.length-1; i>=0;i--){
    reversedString += str[i];
}
console.log(reversedString);


// Approach 2
let arr = Array.from(str);
for(let i=0; i<Math.floor(arr.length/2); i++){
    let temp = arr[i];
    arr[i] = arr[str.length-i-1];
    arr[str.length-i-1] = temp;
}
//console.log(arr.reduce((a,b)=>a+b, ""));
console.log(arr.join(""));




