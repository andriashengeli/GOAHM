let person = {
    name: "თომა",
    lastname: "შენგელია",
    age: 10,
    getInfo: function() {
        return `მე მქვია ${this.name} ჩემი გვარია ${this.lastname} მე ვარ ${this.age}`;
    }
};


console.log(person.getInfo)