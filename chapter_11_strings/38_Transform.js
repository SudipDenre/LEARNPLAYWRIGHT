let str = " hello world ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

console.log(str.replace("l","k"));
console.log(str.replaceAll("l","k"));
console.log(str.replace(/l/g, "k"));

console.log("sudip"+" "+"denre");
console.log("sudip".concat(" denre"));

let r = "pass,fail,skip".split(",");
console.log(r);

let rr = "pass_fail_skip".split("_").join(".");
console.log(rr);

// toString()

console.log((200).toString());
console.log(true.toString());
console.log(Number("34"));

console.log(parseInt("42px"));
console.log(parseFloat("3.14rem"));
