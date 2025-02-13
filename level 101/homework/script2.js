let sportsClub = {
    clubname:"barcelona",
    sportType:"football",
    foundedyear: "1899",
    achievements: {
        trophies: "4x Champions League Winner",
        medals: "2x UEFA Champions League",
        moretrophies: "3x FIFA Club World Cup winner",
        moreTrophies: "27x Spanish Champion"

    }
    
}

let x = Object.keys(sportsClub)
console.log(x)

let z =  Object.keys(sportsClub.achievements)

console.log(z)

let y = Object.values(sportsClub)

console.log(y)

let w = Object.values(sportsClub.achievements)

console.log(w)


let num = Object.seal(sportsClub.achievements)

console.log(num)


let num2 = Object.isFrozen(sportsClub.achievements)

console.log(num2)


let num3 = "stadiumcapacity"