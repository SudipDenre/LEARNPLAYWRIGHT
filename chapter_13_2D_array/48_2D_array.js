let scores = [
    [85, 90, 78],
    [60, 45, 70],
    [95, 88, 92]
]

// [253, 175, 275]

// Approach 1
let totalMarks = [];
for(let i=0; i<scores.length; i++){
    let sum=0;
    for(let j=0; j<scores[i].length; j++){
        sum+=scores[i][j];
    }
    totalMarks.push(sum);  
}
console.log(totalMarks);


// Approach 2
let newMarks = scores.map(row => row.reduce((a,b) => a+b, 0));
console.log(newMarks);


// Approach 3
let scoreSum = scores.map(
    row => {
        let sum=0;
        row.map(cell => sum+=cell)
        return sum;
    }
)
console.log(scoreSum);


