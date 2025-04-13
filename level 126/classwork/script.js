// old object
let person = {
    name : "andria",
    lastName : "shengelia",
    age: 14,
    // 
    combined: function(){
        console.log(`my name is ${this.name} ${this.lastName} and I am ${this.age} years old`);
    }
}

console.log(person.name); // andria
console.log(person.lastName); // shengelia
console.log(person.age); // 14
console.log(person.combined()); // my name is andria shengelia and I am 14 years old

// new object
//   შევქმენით ცვლადი გადავეცით სახელი გვარი და ასაკი შემდეგ ობიქეტში შევიტანეთ ცვლადის დასახელება და მათ მნიშვნელობები არის ის რაც ცვლადში გვიწერია
    let hobby = "playing football";
    let name1 = "toma";
    let lastName1 = "shengelia";
    let age1 = 10;
    let person2 = {
    name1,
    lastName1,
    age1,
    [hobby]: "playing football",
    // "აქ შევქმენით ცვალდი მივანიჭეთ მას მნიშვნელობა და შემდეგ ობიექტში შევიტანეთ ცვლადის დასახელება და მის მნიშვნელობას"
    
     // ჩვენ შევქმენით ფუნქცია მაგრამ არ დავუწერეთ წინ function, keyword function, ეს არის ES6-ის ახალი ფუნქცია, რომელიც გვაძლევს საშუალებას შევქმნათ ფუნქცია, რომელიც არ საჭიროებს function-ის დაწერას
    
    greet() {
        console.log(`my name is ${this.name1} ${this.lastName1} and I am ${this.age1} years old`);
    }
}

    console.log(person2.name1); // toma
    console.log(person2.lastName1); // shengelia
    console.log(person2.age1); // 10
    console.log(person2.greet()); // my name is toma shengelia and I am 10 years old