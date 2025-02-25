function selectPersonToPay(names) {
    
    let randomIndex = Math.floor(Math.random() * names.length);
    let selectedPerson = names[randomIndex];
    
   
    console.log(`${selectedPerson} will pay for everyone's food bill.`);
}


let people = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
selectPersonToPay(people);


