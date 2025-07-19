let name = document.getElementById("name");
let email = document.getElementById("email");
let age = document.getElementById("age");
let submit = document.getElementById("submit");

function saveToStorage() {
  if (age.value < 18) {
    alert("you cannot register, because you are under 18 sorry");
    return;
  }

  localStorage.setItem("name", name.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("age", age.value);

  alert("saved to local storage successfully");
}

submit.addEventListener("click", saveToStorage);
