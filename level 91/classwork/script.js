let num = 1;

for (let i = 1; i <= 100; i++) {
  num *= i;

  if (num > 100) {
    break;
  }
}

console.log("Result:", num);