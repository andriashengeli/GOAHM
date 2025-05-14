class temperatue{
    constructor(celsius){
        this.celsius = celsius;

    }
    get fahrenheit(){
        return (this.celsius * 1.8) + 32
    }

    static fromFahrenheit(fahrenheit){
        return (fahrenheit - 32) / 1.8
    }
}


let temp = new temperatue(25);
console.log(temp.fahrenheit); // 77