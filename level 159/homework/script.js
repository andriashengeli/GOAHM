const crackeggs = () => new Promise(resolve => setTimeout(() => resolve("eg is cracked!"), 1000));
const whisk = () => new Promise(resolve => setTimeout(() => resolve("eg is whisked!"), 1000));
const cookonpan = () => new Promise(resolve => setTimeout(() => resolve("Cooking omelette..."), 3000));

const makeomelette = async () => {
    try{
        const crackedEggs = await crackeggs();
        console.log(crackedEggs);
        console.log("egg is ready to be whisked");

        const whiskedEggs = await whisk();
        console.log(whiskedEggs);
        console.log("eggs are ready to be cooked");

        const cookedOmelette = await cookonpan();
        console.log(cookedOmelette);
        console.log("Omelette is ready to be served!");


        console.log("Enjoy your meal!");
    }
    catch(err){
        console.log(err);
    }
}

makeomelette();