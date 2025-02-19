let persons = [{name: "andria", name2:"toma", name3:"saba", name4:"daviti"}]
let places= [{city: "new York", city2:"las vegas", city3:"london", city4:"tbilisi"}]

let marged = persons.concat(places)

console.log(marged)

persons.copyWithin(2, 3, 4 )

console.log(persons)


let result = persons.pop("daviti")

console.log(persons)