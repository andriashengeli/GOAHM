
let grade1 =  Number(prompt("შეიყვანეთ პირველი საგნის ქულა:"));
let grade2 =  Number(prompt("შეიყვანეთ მეორე საგნის ქულა:"));
let  grade3 = Number(prompt("შეიყვანეთ მესამე საგნის ქულა:"));


let average = (grade1 + grade2 + grade3) / 3;


let result = 
  average >= 90 && average <= 100 ? "A" :
  average >= 70 && average < 90 ? "B" :
  average >= 50 && average < 70 ? "C" :
  average >= 25 && average < 50 ? "D" : 
  "Failed";


console.log(`თქვენი საბოლოო შეფასება არის: ${result}`)