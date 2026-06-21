let order = new Promise(
    function (resolve, reject){
        let foodready = true;
        if(foodready){
            resolve("Hey....Your Food is ready. It will be delivered soon.");
        }else{
            reject("Your order is cancelled due to rain.");
        }
    }
)

order.then(
    function(message){
        console.log(message);
    }
).catch(
   function(error){
        console.log(error);
    } 
)

