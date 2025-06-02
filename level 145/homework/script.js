let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("anna");
    }, 2000);
});

promise.then((name) => {
    console.log(name);
    
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ben");
    }, 3000);
});


promise2.then((name2) => {
    console.log(name2);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("charlie");
    }, 1000);
});


promise3.then((name3) => {
    console.log(name3);
});


Promise.all([promise, promise2, promise3])
    .then(res => {
        console.log("im first:", res);
    })