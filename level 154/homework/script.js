let input = document.querySelector("input");
let div = document.querySelector("div");
let button = document.querySelector("button");

let fetchshow = () => {
    let inpval = input.value;
    let api = `http://numbersapi.com/${inpval}?json`; // added `?json`

    fetch(api)
        .then(r => {
            if (!r.ok) {
                throw new Error("not found sorry");
            }
            return r.json();
        })
        .then(data => {
            div.innerHTML = `<h1>${data.text}</h1>`;
        })
        .catch(err => {
            div.innerHTML = `<h1 style="color: red">Not found!</h1>`;
        });
};

button.addEventListener("click", fetchshow);