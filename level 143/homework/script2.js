let promise = new Promise((resolve, reject) => {
  reject("Error: something went wrong!");
});

promise.catch(error => {
  console.error(error);
});