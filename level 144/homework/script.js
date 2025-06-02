let isinStock = true;

const promise = new Promise((resolve, reject) => {
    if (isinStock) {
        resolve("Success: Item is in stock");
    } else {
        reject("Error: Item is out of stock");
    }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});