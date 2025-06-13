 let aboutme = `[
    {
        "name": "andria",
        "lastname": "smith",
        "age": 15,
        "hobbies": ["reading", "gaming", "coding"],
        "favoriteColor": "blue",
        "isStudent": true

    }
]`;

let aboutmeObj = JSON.parse(aboutme);
console.log(aboutmeObj);


aboutmeObj.lastname = "shengelia";

let aboutmeStr = JSON.stringify(aboutmeObj);
console.log(aboutmeStr);


