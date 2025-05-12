class Exam { 
    static points(score1, score2, score3){
        let total = score1 + score2 + score3;
        let average = total / 3; 
        return Math.round(average); 
    }
}

let score = Number(prompt("Enter your score 1: "));
let score2 = Number(prompt("Enter your score 2: "));
let score3 = Number(prompt("Enter your score 3: "));

console.log(Exam.points(score, score2, score3));