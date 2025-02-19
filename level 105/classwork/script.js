let nestedArray = [1, [2, 3], [4, [5, 6]], 7]
let nestedArray2 = nestedArray.flat(1)
console.log(nestedArray2)


let fullyFlatArray = nestedArray.flat(Infinity);
console.log(fullyFlatArray)

function checkElement(array, value) {
    return array.includes(value);
}






function findIndexOfElement(array, value) {
    return array.indexOf(value);
}




function findLastIndexOfElement(array, value) {
    return array.lastIndexOf(value);

}



