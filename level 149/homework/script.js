const jsonString = '{"name": "Luna", "age": 4, "type": "cat"}';

let pet = JSON.parse(jsonString);

console.log(`Pet Name: ${pet.name}`);
console.log(`Pet Age: ${pet.age}`);

pet.color = "black";

console.log(pet)