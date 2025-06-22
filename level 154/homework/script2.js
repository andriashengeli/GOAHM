let input = document.querySelector("input");
let div = document.querySelector("div");
let button = document.querySelector("button");

let country = () => {
    let inpval = input.value;
    let api = `https://restcountries.com/v3.1/name/${inpval}`;

    fetch(api)
        .then(r => {
            if (!r.ok) {
                throw new Error("Country not found");
            }
            return r.json();
        })
        .then(data => {
            div.innerHTML = `
                <h1>${data[0].name.official}</h1>
                <h1>${data[0].capital}</h1>
                <h1>${data[0].population}</h1>
                <img src=${data[0].flags.svg}>`;
        })
        .catch(err => {
            div.innerHTML = `<h1 style="color: red">Country not found!</h1>`;
        });
};

button.addEventListener("click", country);






