let promise = new Promise((resolve, reject) => {
    resolve("Hello, World!");
});
promise.then((message) => {
    console.log(message);
});

let promise2 = new Promise((resolve, reject) => {
    reject("this is an error message");
});
promise2.catch((error) => {
    console.error(error);
});

let promise3 = new Promise((resolve, reject) => {
    resolve("This is a third promise");
});
promise3.then((message) => {
    console.log(message);
});

Promise.any([promise, promise2, promise3])
    .then((results) => {
        console.log("At least one promise resolved:", results);
    })
    .catch((error) => {
        console.error("All promises were rejected:", error);
    });