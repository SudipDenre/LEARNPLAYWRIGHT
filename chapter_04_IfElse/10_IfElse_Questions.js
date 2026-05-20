// Question1 - Even Odd Check
let num = 45;
if(num%2===0){
    console.log("It's an Even Number.");
}else{
    console.log("It's a Odd Number.");
}


// Question2 - Student Grade Calculator
let score=43;
if(score>=90){
    console.log("Grade - A");
}else if(score>=80){
    console.log("Grade - B");
}else if(score>=70){
    console.log("Grade - C");
}else if(score>=60){
    console.log("Grade - D");
}else{
    console.log("FAIL");
}


// Question3 - Leap Year Check
let year = 2405;
if(year%100===0){
    if(year%400===0){
        console.log("It's a Leapyear.");
    }else{
        console.log("It's not a Leapyear.");
    }
}else{
    if(year%4===0){
        console.log("It's a Leapyear.");
    }else{
        console.log("It's not a Leapyear.");
    }
}
