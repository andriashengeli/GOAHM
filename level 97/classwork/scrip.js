let car = {
    brand: "bmw",
    model: "m5_f90",
    year: 2017,
    color:"black",
    weight: "1,865kg",
    num: function() {
        return `brand: ${this.brand}` - last
        brand: $(this.model)
        
    }
}

console.log(car.brand)

console.log(car.model)

console.log(car.year)

console.log(car.color)

console.log(car.weight)

console.log(car.num())

car.mode="normal"


function options(brand) {
    if (brand === "bmw") {
        return "იგივე ბრენდი მანქანა გვყოლია";
    } else {
        return "ჩემი უფრო სწრაფია";
    }
}

console.log(options("bmw"))