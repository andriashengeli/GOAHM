let person1 = new Promise((resolve, reject) => {
    resolve("im fastest");
});

let person2 = new Promise((resolve, reject) => {
    resolve("im second fastest");
});

let person3 = new Promise((resolve, reject) => {
    resolve("im slowest");
});


Promise.race([
    person1,
    person2,
    person3
]).then(res => console.log(res))
