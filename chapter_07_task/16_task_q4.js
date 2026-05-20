//Question 4 — Build Health Reporter

let buildPassed = 65;
if(buildPassed===100){
    console.log("🟢 Green Build");
}else if(buildPassed>=90 && buildPassed<=99){
    console.log("🟡 Stable — Investigate failures");
}else if(buildPassed>=70 && buildPassed<=89){
    console.log("🟠 Unstable");
}else{
    console.log("🔴 Broken Build — Block deployment");
}