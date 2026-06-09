function retry(testName, maxRetries=5, delay=1000){
    console.log(`Retrying ${testName} upto ${maxRetries} times, ${delay}ms apart...`);
}

retry("Login Test");
// Retrying Login Test upto 5 times, 1000ms apart...
// we can set default value for parameters during defining a function.
// If we want to change we can also provide other value during calling.
retry("Logout Test", 3, 3000);