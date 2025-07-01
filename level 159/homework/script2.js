const pickupclothes = () => new Promise(resolve => setTimeout(() => resolve("picking up clothes..."), 1500));
const vacuumflor = () => new Promise(resolve => setTimeout(() => resolve("vacuuming"), 2000));
const makebad = () => new Promise(resolve => setTimeout(() => resolve("making bed..."), 1000));


const cleanroom = async () => {
    try {
        const clothes = await pickupclothes();
        console.log(clothes)
        console.log("clothes is picked")

        const floor = await vacuumflor();
        console.log(floor)
        console.log("floor is vaccumed")

        const bad = await makebad();
        console.log(bad)
        console.log("bed is ready")


        console.log("your room is clean enjoy!")
    } catch(err) {
        console.log(err)
    }
}

cleanroom()