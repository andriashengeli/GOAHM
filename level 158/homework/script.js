const boilWater = () => new Promise(resolve =>
  setTimeout(() => resolve("Water is boiling..."), 2000)
);


const addTeaBag = () => new Promise(resolve =>
  setTimeout(() => resolve("Tea bag added."), 1000)
);


const steepTea = () => new Promise(resolve =>
  setTimeout(() => resolve("Tea is steeping..."), 3000)
);


const makeTea = async () => {
  try {
    const water = await boilWater();
    console.log(water);

    const teaBag = await addTeaBag();
    console.log(teaBag);

    const steeped = await steepTea();
    console.log(steeped);

    console.log("Tea is ready to drink!");
  } catch (err) {
    console.log("Something went wrong:", err);
  }
};
makeTea();