let input = Number(prompt("Enter any number: "));

let greet = (inputs) => {
    if (inputs % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}; 

console.log(greet(input));

function greet2(idk) {
    if (idk % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(greet2(input));

let greet3 = function(idk2) {
    if (idk2 % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
};

console.log(greet3(input));