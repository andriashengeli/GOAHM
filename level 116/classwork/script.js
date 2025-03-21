let nameinput = document.getElementById("name");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm = document.getElementById("confirm");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    if (nameinput.value == "" || lastname.value == "" || email.value == "" || password.value == "" || confirm.value == "") {
        alert("Please fill out all fields");
    } else if (password.value != confirm.value) {
        alert("Passwords do not match");
        document.body.style.backgroundColor = "red";
    } else {
        alert("Successfully logged in");
        document.body.style.backgroundColor = "green";
    }
});
