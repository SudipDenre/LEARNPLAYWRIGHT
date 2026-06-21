let apiCall = new Promise(
    function(resolve, reject){
        resolve(
            {status : 200, body : "user data"}
        )
    }
);

apiCall.then(
    function(response){
        console.log(response.status);   
    }
).catch(
    function(error){
        console.log(error);
    }
).finally(
    function(){
        console.log("I will always be executed...");
    }
)