function reverseString(str){
    let reversedString = "";
    for(let i=str.length-1; i>=0;i--){
        reversedString += str[i];
    }
    return reversedString;
}

let str = "abcdcba";

let newString = reverseString(str);

if(str===newString){
    console.log("Palindrome.");
}else{
    console.log("Not Palindrome.");
}