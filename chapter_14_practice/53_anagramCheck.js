let str1 = "cheat";
let str2 = "teach";

let result = str1.split("").sort().join("") === str2.split("").sort().join("");

if(result){
    console.log("Anagram.");
}else{
    console.log("not Anagram.");  
}