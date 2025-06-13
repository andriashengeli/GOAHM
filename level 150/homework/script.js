let jsonString = '{"name": "John Doe", "age": 30, "email": "johndoe@example.com"}';

let person = JSON.parse(jsonString);
person.hobbies = [];
person.hobbies[0]="reading"
person.hobbies[1]="traveling"
person.hobbies[2]="cooking"

console.log(person);

