const name = 'Luka';
const age = 25;

const person = {
  name,
  age, 
};

console.log(person); 




const dog = {
    name: 'Rex',
    bark() { 
      console.log(`${this.name} says woof!`);
    }
  };
  
  dog.bark(); // Rex says woof!




  const firstName = 'Ana';
  const lastName = 'Beridze';
  const field = 'email';
  const email = 'ana@example.com';
  
  const user = {
    firstName,
    lastName,
    [field]: email,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  console.log(user.fullName()); 
  console.log(user.email);     



  