let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],      // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],         // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]    // Payment suite
];


let failedTests = [];

for(let i=0;i<suiteResults.length;i++){
    for(let j=0; j<suiteResults[i].length; j++){
        if(suiteResults[i][j].includes("fail")){
            failedTests.push(suiteResults[i][j]);
        }
    }
}

console.log(failedTests);


// suiteResults.forEach(
//     row => {
//         let newArr = row.filter(cell => cell.includes("fail"));
//         console.log(newArr);
//     }
// )

