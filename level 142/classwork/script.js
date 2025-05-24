let name = "andria"


function greet(){
    console.log("Hello " + name);
}

// ეს არ გამოიტანს არაფერს რადგან ეს არი გლობალური ფუნქცია 


function greet2(){
    let name = "andria2"
    console.log("Hello " + name);
}

// ეს გამოიტანს "Hello andria2" რადგან ეს ფუნქცია ლოკალურია

function greet3(){
    let lastName = "shengelia"
    console.log("Hello " + name + " " + lastName);
}

// ეს გამოიტანს "Hello andria shengelia" რადგან lastName ლოკალურია და name გლობალური 