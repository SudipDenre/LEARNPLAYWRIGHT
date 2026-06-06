// Sorting
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

let nums = [3,1,4];
nums.sort();
console.log(nums);

let number = [10,1,2,21];
//number.sort();
//console.log(number); // [ 1, 10, 2, 21 ] - Lexicographic sorting

number.sort((a,b)=> a-b);
console.log(number); // [ 1, 2, 10, 21 ] - Ascending order

number.sort((a,b)=> b-a);
console.log(number); // [ 21, 10, 2, 1 ] - Descending order

