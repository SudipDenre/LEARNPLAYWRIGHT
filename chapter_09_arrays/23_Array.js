let tests = ["smoke", "sanity", "regression"];

// for...of
for(test of tests){
    console.log(test);
}

// forEach
tests.forEach((test,index) => {
    console.log(test, index);
});

// for...in
for(let test in tests){
    console.log(test+"->"+tests[test]);
}

// Map
let marks = [45,89,93,61,75];

let grades = marks.map(x => x>70 ? "Pass" : "Fail");
console.log(grades);

// Filter
let passing = marks.filter(x => x>70);
console.log(passing);

// reduce
let total = marks.reduce((a,b) => a+b, 0);
console.log(total);

// flat
let nested = [[1,2], [3,4], [5]];
console.log(nested.flat());
