// *****
// ****
// ***
// **
// *

let n=5;
for(let i=1;i<=n;i++){
    let pat = "";
    for(let j=i;j<=n;j++){
        pat += "*";
    }
    console.log(pat);  
}


//   *
//  ***
// *****

let x=3;

for(let i=1;i<=x;i++){
    let str = "";
    for(let j=1;j<=x-i;j++){
        str += " ";
    }
    for(let k=1;k<=i;k++){
        str += "*";
    }
    for(let l=1;l<i;l++){
        str += "*";
    }
    console.log(str);
}

// Pyramid - New Approach

for(let i=1;i<=x;i++){
    let str = "";
    for(let j=1;j<=x-i;j++){
        str += " ";
    }
    for(let k=1;k<=2*i-1;k++){
        str += "*";
    }
    console.log(str);
}

// Pyramid - Best approach

for(let i=1;i<=x;i++){
    let spaces = " ".repeat(x-i);
    let stars = "*".repeat(2*i-1);
    console.log(spaces + stars); 
}

