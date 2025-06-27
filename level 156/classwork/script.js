let input = document.querySelector("input");
let button = document.querySelector("button");
let div = document.querySelector("div");

let loadUser = () => {
    let gender = input.value
    let api = `https://randomuser.me/api/?gender=${gender}`;

 fetch(api)
        .then(r => {
            if (!r.ok) throw new Error("Could not fetch user");
            return r.json();
        })
        .then(data => {
            let user = data.results[0];
            div.innerHTML = `
                <h1>${user.name.first} ${user.name.last}</h1>
                <img src="${user.picture.large}">
                <h2>${user.email}</h2>
            `;
        })
        .catch(err => {
            div.innerHTML = `<h1 style="color:red;">${err.message}</h1>`;
        });
};

button.addEventListener("click", loadUser);