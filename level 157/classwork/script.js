let promise1 = new Promise((resolve, reject) => {
    // აქ კი გვიწერია რომ ჩვენს გვაქვს ნაყინი
    let isicecreamAvaliable = true;
    // აქ ვამოწმებთ გვაქვს თუ არა ნაყინი 
    if (isicecreamAvaliable) {
        resolve("yes we have icecream you can take it ");
    } else {
        reject("sorry we dont have icecream today ");
    }
});
promise1
    .then(res => console.log("Success:", res))   
    .catch(err => console.log("Failure:", err))

// მე აქ შევქმენი კოდი რომელიც ნახავს ნაყინიგვაქვს თუ არა ამ შემთხვევაში ჩვენ ნაყინი გვაქვს რაც გამოიტანს resloves ანუ "yes we have icecream you can take it "

let promise3 = new Promise(function(resolve, reject) {
  // ახალი პრომისი
  setTimeout(function() {
    // 2 წამის შემდგეგ გამოიტანს ეს კოდი
    resolve("2 წამის შემდეგ შესრულდა");
    // 2 წამში resolve შესრულდება
  }, 2000);
});

// აქ კოდი გამოვა 2 წამის შემდეგ რადგან გამოვიყენე settimeot

let promise4 = new promise((resolve,reject) => {
    reject("Error")
})

promise4
    .then(err => console.log("failure",res))

    // აქ გამოვა error რადგან მე გამოვიყენე reject ამიტომ პირობა არის false