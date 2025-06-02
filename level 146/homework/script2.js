let promise = new Promise((resolve, reject) => {
    resolve("Anna");
});

promise.then((name) => {
    console.log(name);})



let promise2 = new Promise((resolve, reject) => {
    resolve("Ben");
});

promise2.then((name2) => {
    console.log(name2);
})


let promise3 = new Promise((resolve, reject) => {
    resolve("Charlie");
});

promise3.then((name3) => {
    console.log(name3);
})


Promise.all([promise, promise2, promise3])
    .then(res=> {
        console.log("All promises resolved:", res);
    })