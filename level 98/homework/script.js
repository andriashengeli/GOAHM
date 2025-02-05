let aboutme = {
    name: "Andria",
    age: 14,
    job: "programming",
    fullname: function() {
        return `მე მქვია ${this.name}, ვარ ${this.age} წლის და ვმუშაობ ${this.job}-ზე.`;
    }
}

console.log(aboutme.fullname());