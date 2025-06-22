let input = document.querySelector("input");
let div = document.querySelector("div");
let button = document.querySelector("button");

let exchange = () => {
    let inpval = input.value;
    let api = `https://api.exchangerate-api.com/v4/latest/${inpval}`;

    fetch(api)
        .then(r => {
            if (!r.ok) {
                throw new Error("Currency not found");
            }
            return r.json();
        })
        .then(data => {
            div.innerHTML = `
                <h1>Base: ${data.base}</h1>
                <h1>EUR: ${data.rates.EUR}</h1>
                <h1>GBP: ${data.rates.GBP}</h1>
                <h1>GEL: ${data.rates.GEL}</h1>`;
        })
        .catch(err => {
            div.innerHTML = `<h1 style="color: red">Currency not found!</h1>`;
        });

   };

button.addEventListener("click", exchange);