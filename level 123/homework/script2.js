let strings = ["apple", "banana", "kiwi", "strawberry", "orange"]
let hasLongString = strings.some(str => str.length > 5)
if (hasLongString) {
    console.log("There is at least one string longer than 5 characters")
}
else {
    console.log("No strings longer than 5 characters")
}


console.log("does the array have at least one string longer than 5 characters?", hasLongString)


