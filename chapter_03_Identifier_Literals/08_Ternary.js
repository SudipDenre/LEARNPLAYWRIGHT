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