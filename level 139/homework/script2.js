class car {
    constructor(brand, model, speed){
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    get speedinmph(){
        return this.speed * 12.0 
    }
    
}

let mycar = new car("Toyota", "Corolla", 60);
console.log(mycar.speedinmph); // 720