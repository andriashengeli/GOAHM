function sum(num1,num2){
    let sum = num1 + num2;
    let multiply = num1 * num2;
    let divide = num1 / num2;
    let minus = num1 - num2;
    return{sum:sum,multiply:multiply,divide:divide,minus:minus,}
}
num1=20
num2=10
console.log(sum(num1,num2));