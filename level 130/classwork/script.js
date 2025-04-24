// arrow function

let greet = (name) => { 
    return `Hello, ${name}!`
}

console.log(greet("John"));



// destructing

let person = ["andria","shengelia", 14, "Georgia"];

let [name, lastname, age, country] = person;
console.log(name); 
console.log(lastname);
console.log(age);
console.log(country);


// destructing with objects

let person2 = {
    name: "andria",
    lastName: "shengelia", 
    age: 14,
    country: "Georgia"
  }
  
let {name1, lastName,age1, country2 } = person2;
  console.log(name);
  console.log(lastName);
  console.log(age);
  console.log(country);



//   object enhancment


let name2 = "andria";
let lastName1 = "shengelia";
let age2 = 14;

let country3 = "Georgia";
let person3 = {
    name2,
    lastName1,
    age2,
    country3
}

console.log(person3)



// forIn

let languages = {
    language1: "English",
    language2: "Georgian",
    language3: "Russian",
    language4: "German"
}

for(let language in languages){
    console.log(language)
    console.log(languages[language])

}

// forOf

let numbers  =  [1,2,3,4,5,6,7,8,9,10]
for(let number of numbers){
    console.log(number)
    console.log(numbers[number])
}

// default parameters
function multiply(a,b=1){
    return a*b

}

console.log(multiply(10,2))



