async function testApi(){

    try{
        let result = await Promise.reject("404 error");
    }catch(error){
        console.log("error:",error);
    }finally{
        console.log("Clean up!!!");
    }    
}

testApi();