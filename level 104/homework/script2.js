let students = ["Ana", "Luka", "Nino"];
let grades = [85, 90, 78];

function addStudent(name, grade) {
    students.unshift(name);
    grades.unshift(grade);
    return { students, grades };
}

function removeLastStudent() {
    students.pop();
    grades.pop();
    return { students, grades };
}


function replaceGrade(index, newGrade) {
    if (index >= 0 && index < grades.length) {
        grades.splice(index, 1, newGrade);
    }
    return grades;
}


function updateGrades(newGrade) {
    grades.fill(newGrade);
    return grades;
}


console.log(addStudent("Giorgi", 95));  
console.log(removeLastStudent());       
console.log(replaceGrade(1, 88));        
console.log(updateGrades(100));          