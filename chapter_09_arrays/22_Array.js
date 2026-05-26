// Array - searching
let results = ["pass", "fail", "pass", "error", "fail"];

console.log(results.indexOf("fail")); // 1
console.log(results.indexOf("skip")); // -1

console.log(results.lastIndexOf("fail")); // 4

console.log(results.includes("error")); // true
console.log(results.includes("skip")); // false

let nums = [10,45,30,29];
let filteredNums = nums.find(x => x>20); // will return the first element where the condition will be true
console.log(filteredNums); // 45

let index = nums.findIndex(x => x>20);
console.log(index); // 1

let lastNum = nums.findLast(x => x>20);
console.log(lastNum); // 29

let lastIndex = nums.findLastIndex(x => x>20);
console.log(lastIndex); // 3



