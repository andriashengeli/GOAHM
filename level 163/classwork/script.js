let name = document.getElementById("name")
let lastname = document.getElementById("lastname")
let age = document.getElementById("age")
let status1 = document.getElementById("status")
let password = document.getElementById("password")
let submitbutton = document.getElementById("submit")

let user = () => {
    if(name.value && lastname.value && age.value && status1.value && password.value ){
        localStorage.setItem("name", name.value)
        localStorage.setItem("lastname", lastname.value)
        localStorage.setItem("age", age.value)
        localStorage.setItem("status", status1.value)
        localStorage.setItem("password", password.value)

        alert("acces granted")
    } else {
        alert("please fill all the fields")
    }
}


submitbutton.addEventListener("click", user)