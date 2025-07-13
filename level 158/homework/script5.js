const washClothes = () => new Promise(resolve =>
  setTimeout(() => resolve("Washing..."), 3000)
);


const rinseClothes = () => new Promise(resolve =>
  setTimeout(() => resolve("Rinsing..."), 2000)
);


const spinClothes = () => new Promise(resolve =>
  setTimeout(() => resolve("Spinning..."), 1500)
);


const doLaundry = async () => {
  try {
    const washed = await washClothes();
    console.log(washed);

    const rinsed = await rinseClothes();
    console.log(rinsed);

    const spun = await spinClothes();
    console.log(spun);

    console.log("Laundry complete!");
  } catch (err) {
    console.log("Laundry failed:", err);
  }
};

// Run it
doLaundry();