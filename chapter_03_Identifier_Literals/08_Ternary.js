let age = 12;
let voter_eligibility = age>=18 ? "Yes" : "No";
console.log(voter_eligibility);

let responseTime=850;
let sla=1000;
let slaStatus = responseTime<=sla ? "Within SLA" : "SLA Breached";
console.log(`Response: ${responseTime}ms - ${slaStatus}`);
