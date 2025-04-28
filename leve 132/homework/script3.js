class car{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

const myCar = new car('Toyota', 'Corolla', 2020);
console.log(myCar.make); // Output: Toyota