let isLoggedIn = true;
let promise = new Promise((resolve, reject) => {
    if (isLoggedIn) {
        resolve("Success: User is logged in");
    }else {
        reject("Error: User is not logged in");
    }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});

promise.finally(() => {
    console.log("Promise has been settled (either resolved or rejected)");
});