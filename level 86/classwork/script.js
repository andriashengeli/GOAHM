function sum(x, y) {
    let plius = x + y;
    let minus = x - y;
    let multiply = x * y;
    let divide = x / y;

    return {plus: plius, minus: minus, multiply: multiply, divide: divide};
}

let x = 10;
let y = 5;
console.log(sum(x, y));