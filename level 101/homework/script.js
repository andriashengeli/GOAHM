let university = {
    name:"სოხუმის სახელმწიფო უნივერსიტეტი",
    departments: "7 ფაკულტეტი",
    website: "www.sou.edu.ge",
    rating:{
        firststundent: "A",
        secondstudent: "B",
        thirdstudent: "C",
       }
}

let full = Object.entries(university);
console.log(full)

let num = Object.entries(university.rating);
console.log(num)


Object.seal(university)


let notting = Object.hasOwn(university.rating);

console.log(notting)

let job = "proggraming"
console.log(job)