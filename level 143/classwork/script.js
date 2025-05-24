// ეს არის სინქრონული კოდი რადგან ყველა ბრძანება შესრულდება თანმიმდევრულად
let x = 10;
let y = 20;
let c = 30;
console.log(x)
console.log(y)
console.log(c)


// ეს არის ასინქრონული კოდი რადგან setTimeout ფუნქცია ასრულებს კოდს გარკვეული დროის შემდეგ ამ შემთხვევაში 2 წამში

console.log("hello")
setTimeout(() => {
    console.log("i will say hello after 2 seconds")
}, 2000) // 
console.log("bye")
