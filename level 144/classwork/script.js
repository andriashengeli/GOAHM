let promise = new Promise((resolve, reject) => {
    let condition = true;
    if (condition)
        resolve("promise resolved successfully");
    else
        reject("promise rejected");
})

promise.then((res) => {
    console.log(res);
})

.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("promise completed")
});