let age = 12;
let voter_eligibility = age>=18 ? "Yes" : "No";
console.log(voter_eligibility);

let responseTime=850;
let sla=1000;
let slaStatus = responseTime<=sla ? "Within SLA" : "SLA Breached";
console.log(`Response: ${responseTime}ms - ${slaStatus}`);


// Nested Ternary
let statusCode=404;
let category = statusCode<300 ? "Success" :
    statusCode<400 ? "Redirect" :
        statusCode<500 ? "Client Error" : "Server Error";

console.log(`Status Code ${statusCode} - ${category}`);


// Maximum number between two numbers

let x=78, y=98;
let max = x>y ? x : y;
console.log(`Maximum = ${max}`); // Maximum = 98

// maximum between three numbers

let a=21, b=45, c=22;
let maximum = (a>b && a>c) ? a : 
    (b>a && b>c) ? b : c;
console.log(`Maximum = ${maximum}`); // Maximum = 45

// ------------------------

let k = 5; 
console.log(k++ + ++k - --k + k-- + ++k); //18
console.log(k); //6

