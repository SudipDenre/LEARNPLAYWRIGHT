let result = Array.isArray([1,2,3]);
console.log(result);

let res = Array.isArray("e");
console.log(res);

// every and some

let check = [70,80,90].every(s => s>=70);
console.log(check); // true
let check1 = [70,80,90].every(s => s>=80);
console.log(check1); // false


let check2 = [70,80,90].some(s => s===70);
console.log(check2); // true
let check3 = [70,80,90].some(s => s<60);
console.log(check3); // false