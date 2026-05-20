//Question 5 — Login Lockout After Failed Attempts

let attempt=23;

switch(attempt){
    case 0 : console.log("Login successful");
             break;
    case 1 : console.log("2 attempts left before lockout");
             break;
    case 2 : console.log("1 attempt left before lockout");
             break;
    case 3 : console.log("🔒 Account Locked — Contact support");
             break;
    default : console.log("🔒 Account already Locked");
}
