// let checkAuth = Promise.resolve("Auth Ok");
// let checkDB = Promise.resolve("DB Ok");
// let checkCache = Promise.resolve("Cache Ok");

// Promise.all([checkAuth, checkDB, checkCache]).then(
//     function(results){
//         console.log("Everything is fine...");   
//     }
// )

// Promise.all([
//     Promise.resolve("Auth Ok"),
//     Promise.reject("DB down"),
//     Promise.resolve("Cache Ok")
// ]).then(function(resolve){
//     console.log("All Ok...");
// }).catch(function(error){
//     console.log("Failed :"+error);
// }).finally(function(){
//     console.log("closing all resources.");
// })

Promise.allSettled([
    Promise.resolve("Auth Ok"),
    Promise.reject("DB down"),
    Promise.resolve("Cache Ok")
]).then(function(results){
    results.forEach((r, i) => {
        console.log(`Test ${i+1} -> ${r.status}(${r.value || r.reason})`);
    })
})