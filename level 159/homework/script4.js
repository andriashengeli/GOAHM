const chooseclothes = () => new Promise(resolve => setTimeout(() => resolve("picking clothes"), 1500));
const packsuitcase = () => new Promise(resolve => setTimeout(() => resolve("Packing..."), 2000));
const doubleckecklist = () => new Promise(resolve => setTimeout(() => resolve("Checkingitems"), 1000));

const travel = async() => {
    try{
        const clothes = await chooseclothes()
        console.log(clothes)
        console.log("your clothes are ready ");

        const Case= await packsuitcase()
        console.log(Case)
        console.log("your suitcase is packed and ready!!!")

        const checklist = await doubleckecklist()
        console.log(checklist)
        console.log("everything is ready and cheaked")

        console.log("you are ready to travel goodbye!!!!")
    } catch(err) {
        console.log(err)
    }
}

travel()


