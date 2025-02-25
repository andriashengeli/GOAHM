function სიყვარულისკალკულატორი() {
    let name1 = prompt("შეიყვანეთ პირველი სახელი:");
    let name2 = prompt("შეიყვანეთ თქვენი ქრაშის სახელი:");
    
    let loveScore = Math.floor(Math.random() * 100) + 1;
    
    alert(`${name1} და ${name2} - თქვენი სიყვარულის პროცენტულობაა ${loveScore}%`);
}


console.log(სიყვარულისკალკულატორი())