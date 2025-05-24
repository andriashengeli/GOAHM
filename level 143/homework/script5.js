let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data fetched")

    }, 3000); // 2000  milliseconds = 2 seconds
}

);
promise.then(message => {
    console.log(message); // Output after 3 seconds: "data fetched"
});
