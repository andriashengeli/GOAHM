let prices = {
    apple: 1.5,
    banana: 0.8,
    orange: 1.2,
    mango: 2.0
};

let total = 0;

for (let product in prices) {
    total += prices[product];
}

console.log("ჯამი:", total);
