
const startEngine = () => new Promise(resolve =>
  setTimeout(() => resolve("Engine started..."), 1000)
);


const drive = () => new Promise(resolve =>
  setTimeout(() => resolve("Driving..."), 4000)
);


const trafficJam = () => new Promise(resolve =>
  setTimeout(() => resolve("Stuck in traffic..."), 3000)
);


const morningCommute = async () => {
  try {
    const engine = await startEngine();
    console.log(engine);

    const driving = await drive();
    console.log(driving);

    const traffic = await trafficJam();
    console.log(traffic);

    console.log("You have arrived!");
  } catch (err) {
    console.log("Error during commute:", err);
  }
};

// Run it
morningCommute();