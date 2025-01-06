function checknumber(value){
    if (value >0){
        return "დადებითია"
    }else if (value < 0){
        return"უარყოფითია"
    }else { 
        return "ნულის ტოლი"; 
    }
}
value=20
console.log(checknumber(value));