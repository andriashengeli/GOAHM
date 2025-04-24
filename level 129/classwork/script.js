function sumNumbers(...numbers){
    return numbers.reduce((num1, num2) => num1 + num2, 0);
}

console.log(sumNumbers(1, 2, 3)); 
console.log(sumNumbers())