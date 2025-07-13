const grindBeans = () => new Promise(resolve =>
  setTimeout(() => resolve("Grinding beans..."), 1500)
);



const boilWater = () => new Promise(resolve =>
  setTimeout(() => resolve("Water is boiling..."), 2000)
);


const brewCoffee = () => new Promise(resolve =>
  setTimeout(() => resolve("Brewing coffee..."), 3000)
);


const makeCoffee = async () => {
  try {
    const ground = await grindBeans();
    console.log(ground);

    const boiled = await boilWater();
    console.log(boiled);

    const brewed = await brewCoffee();
    console.log(brewed);

    console.log("Coffee is ready!");
  } catch (err) {
    console.log("Error:", err);
  }
};


makeCoffee();