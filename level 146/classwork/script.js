let promise = new Promise((resolve, reject) => {
    resolve("Hi from Alice");
});

let promise2 = new Promise((resolve, reject) => {
    resolve("Hi from Bob");
});


let promise3 = new Promise((resolve, reject) => {
    resolve("Hi from Charlie");
});


Promise.all([
    promise,
    promise2,
    promise3
]).then(res => console.log(res))
