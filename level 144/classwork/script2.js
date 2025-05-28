let promise = new Promise((resolve, reject) => {
    
    
    
        let random = Math.random() > 50

        if (random) { 
            resolve("success");
        }
        else {
            reject ("failure");
        }
    }
   

)

promise
.then((res) => {
    console.log("succes:", res);
})
.catch((err) => {
    console.error("Error:", err);
})