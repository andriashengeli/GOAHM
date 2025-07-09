const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is a resolved promise after 2 seconds.");
  }, 2000);
});

promise.then((message) => {
  console.log(message);
});

promise.catch((error) => {
  console.error(error);
});


const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This is a rejected promise after 3 seconds.");
  }, 3000);
});

promise2.then((message) => {
    console.log(message);
    }).catch((error) => {
    console.error(error);
    })