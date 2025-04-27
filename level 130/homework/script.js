function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
  }


// with arrow function

let getFullNameArrow = (firstname, lastname) => {
    return firstname + " " + lastname;
  }

console.log(getFullName("John", "Doe")); // Output: John Doe