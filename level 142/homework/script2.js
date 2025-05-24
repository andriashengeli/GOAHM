let name = "World";

function greet() {
  let name = "Alice";
  console.log("Inside function:", name); // Alice
}

greet();
console.log("Outside function:", name); // World