let promise = new Promise((resolve, reject) => {
    resolve("hello friend");
});

promise.then((message) => {
    console.log(message);
    
});

let promise2 = new Promise((resolve, reject) => {
    resolve("how are you?");
});

promise2.then((message2) => {
    console.log(message2);
    
});

let promise3 = new Promise((resolve, reject) => {
    reject("I am not well");
});


promise3
    .catch((error) => {
        console.error("Error:", error);
    });


Promise.any([promise, promise2, promise3])
    .then((res) => {
        console.log("First resolved promise:", res);
    })
    .catch((error) => {
        console.error("All promises were rejected:", error);
    });


