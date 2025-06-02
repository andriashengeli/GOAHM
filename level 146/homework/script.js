let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello friend");
    }, 2000);
});

promise
    .then((message) => {
        console.log(message);
        return "how are you?";
    })