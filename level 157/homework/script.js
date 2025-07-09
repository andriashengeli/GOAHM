let age = new Promise((resolve, reject) => {
    let age = 20; {
        if (age >= 18) {
            resolve("You are an adult.");
            alert("You are an adult.");
        } else {
            reject("You are not an adult.");
        }
    }
})

age.then((message) => {
    console.log(message);
})

age.catch((error) => {
    console.error(error);
})



let Promise1 = new Promise((resolve, reject) => {
    let idk = true;
    if (idk){
        resolve("Promise resolved successfully.");
    } else {
        reject("Promise failed.");
    }
})


Promise1.then((message) => {
    console.log(message);
}

).catch((error) => {
    console.error(error);
})