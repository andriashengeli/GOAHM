let person = {
    firstname: "ანდრია",
    last_name: "შენგელია",
    email:"andriashengelia99@gmail.com",
    fullname: function () {
        return this.firstname + " " + this.last_name;
    }
}

console.log(person.fullname());