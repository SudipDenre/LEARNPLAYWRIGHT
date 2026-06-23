// Write a function that accepts any number of arguments and returns their sum.

// Example:

// console.log(sum(10, 20, 30));

function getSum(...nums){
    let sum = nums.reduce((a,b)=> a+b, 0);
    return sum;
}

console.log(getSum(10,20,30,40));
