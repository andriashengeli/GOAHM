let num = document.getElementById("changeText");

num.addEventListener("click", function() {
    let inputText = document.getElementById("textInput").value;
    document.querySelector("h1").textContent = inputText;
});