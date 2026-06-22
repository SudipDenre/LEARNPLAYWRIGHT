// whenever a function will return a promise,
// we should use async while creating that function
// and we should use await while calling it.
// await -> until the promise is resolved or rejected, it will wait.

function getToken(){
    return Promise.resolve("pass");
}

async function run() {
    let token = await getToken();
    console.log(token);   
}

run();
