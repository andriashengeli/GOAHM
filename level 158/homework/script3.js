
const putBreadInToaster = () => new Promise(resolve =>
  setTimeout(() => resolve("Bread in toaster..."), 1000)
);


const toasting = () => new Promise(resolve =>
  setTimeout(() => resolve("Toasting..."), 2500)
);


const butterToast = () => new Promise(resolve =>
  setTimeout(() => resolve("Spreading butter..."), 1000)
);


const makeToast = async () => {
  try {
    const bread = await putBreadInToaster();
    console.log(bread);

    const toasted = await toasting();
    console.log(toasted);

    const buttered = await butterToast();
    console.log(buttered);

    console.log("Toast is ready!");
  } catch (err) {
    console.log("Error:", err);
  }
};


makeToast();