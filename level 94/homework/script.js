function compareNumbers(a, b) {
    if (a > b) {
        return "პირველი რიცხვი მეტია მეორეზე";
    } else if (a < b) {
        return "პირველი რიცხვი ნაკლებია მეორეზე";
    } else {
        return "ორივე რიცხვი ტოლია";
    }
}


console.log(compareNumbers(5, 10)); 
console.log(compareNumbers(10, 5)); 
console.log(compareNumbers(7, 7)); 


