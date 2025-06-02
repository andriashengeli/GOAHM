let  isRaining = false;

const weatherPromise = new Promise((resolve, reject) => {
    if (isRaining) {
        resolve("Success: It is raining");
    } else {
        reject("Error: It is not raining");
    }
});

weatherPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("Weather check has been completed (either resolved or rejected)");
});