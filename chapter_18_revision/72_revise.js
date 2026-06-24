const employee = {
    id: 101,
    name: "Sudip",
    department: "QA"
};

// Print the employee name using:
// Dot notation
// Bracket notation
let employeeName = employee.name;
let {name} = employee;
console.log(employeeName);
console.log(name);
console.log(employee["name"]);


// Add a new property:
const newEmployee = {...employee, salary: 50000};
console.log(newEmployee);

// Update:
employee.department = "Automation QA";
console.log(employee);

// Delete:
delete employee.id;
console.log(employee);






