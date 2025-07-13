
const boilWater = () => new Promise(resolve =>
  setTimeout(() => resolve("Water boiling..."), 2000)
);


const addPasta = () => new Promise(resolve =>
  setTimeout(() => resolve("Pasta added..."), 1000)
);

// Step 3: Cook pasta
const cookPasta = () => new Promise(resolve =>
  setTimeout(() => resolve("Cooking pasta..."), 5000)
);


const cookItalianPasta = async () => {
  try {
    const boiling = await boilWater();
    console.log(boiling);

    const added = await addPasta();
    console.log(added);

    const cooking = await cookPasta();
    console.log(cooking);

    console.log("Pasta is ready!");
  } catch (err) {
    console.log("Error in the kitchen:", err);
  }
};


cookItalianPasta();