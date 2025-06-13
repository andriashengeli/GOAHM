let idk = '{ "name": "John Doe", "age": 30, "email": "janedoe@example.com" }';
let person = JSON.parse(idk);
console.log(person.name);
console.log(person.age);
console.log(person.email);

console.log(person['name']);
console.log(person['age']);
console.log(person['email']);

