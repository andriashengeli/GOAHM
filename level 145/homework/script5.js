let promise = new Promise((resolve, reject) => {
    reject("This is an error message");
});
promise.catch((error) => {
    console.error("Caught an error:", error);
});

let promise2 = new Promise((resolve, reject) => {
    reject("This is another error message");
});

promise2.catch((error) => {
    console.error("Caught another error:", error);
});


let promise3 = new Promise((resolve, reject) => {
    reject("This is yet another error message");
});

promise3.catch((error) => {
    console.error("Caught yet another error:", error);
});

Promise.any([promise, promise2, promise3])


// ეს გამოიტანს AggregateError რადგან ყველა პრომისი უარყოფილია