function person(name, lastname, phonenumber, email, password,confirmpassword){
    this.name = name;
    this.lastname = lastname;
    this.phonenumber = phonenumber;
    this.email = email;
    this.password = password;
    this.confirmpassword = confirmpassword
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    let person1 = new person("andria", 15)
    person1.greet()
}