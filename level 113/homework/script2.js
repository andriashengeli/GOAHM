let button = document.getElementById("toggleButton");
let targetDiv = document.getElementById("targetDiv");

button.addEventListener("click", function() {
    targetDiv.classList.toggle("active");
});


