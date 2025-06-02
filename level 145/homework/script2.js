let promise = new Promise((resolve, reject) => {
    resolve("how are you?");
});
promise
    .then((message) => {
        console.log(message);
    })

let promise2 = new Promise((resolve, reject) => {
    reject("error occurred");
});

promise2
    .catch((error) => {
        console.error(error);
    });


Promise.all([promise, promise2])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.error("One or more promises failed:", error);
    });