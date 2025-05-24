let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2 seconds have passed");
  }, 2000); // 2000 milliseconds = 2 seconds
});

promise.then(message => {
  console.log(message); // Output after 2 seconds: "2 seconds have passed"
});