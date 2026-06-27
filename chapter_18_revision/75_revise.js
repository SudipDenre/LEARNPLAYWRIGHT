// console.log("Start");

// const promise = Promise.resolve("Promise Resolved");

// promise.then(data => {
//     console.log(data);
// });

// console.log("End");

//
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Promise");
    });

console.log("End");