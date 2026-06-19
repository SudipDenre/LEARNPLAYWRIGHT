let arr = [
    [1,2,3],
    [4,5],
    [7,8,9]
];

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);   
    }
}

for(let row of arr){
    for(let col of row){
        process.stdout.write(col + " ");
    }
    console.log();
}

// forEach
arr.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + " ")
    )
    console.log();
})