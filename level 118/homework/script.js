function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText !== "") {
        let ul = document.getElementById("taskList");
        let li = document.createElement("li");
        li.textContent = taskText;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "წაშლა";
        deleteButton.onclick = function () {
            ul.removeChild(li);
        };

        li.appendChild(deleteButton);
        ul.appendChild(li);
        input.value = "";
    } else {
        alert("გთხოვთ შეიყვანოთ ტექსტი!");
    }
}