// Asynchronous callback
console.log("Test 1 : started...");

setTimeout(() => {
    console.log("Test 2 : API response received...");   
}, 3000); // it will be registered in macrotask queue

console.log("Test 3 : moving to next test...");

// Synchronous callback
let testResults = ["pass", "fail", "pass", "skip"];

testResults.forEach((result, index) => {
    console.log("Test"+index+"=>"+result);
})
