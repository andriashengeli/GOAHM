let input = document.querySelector("input");
let button = document.querySelector("button");
let div = document.querySelector("div");

button.addEventListener("click", getPokemon);

function getPokemon() {
  let name = input.value.toLowerCase();
  let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Not found!");
      }
      return response.json();
    })
    .then(data => {
      div.innerHTML = `
        <h2>${data.name}</h2>
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
        <img src="${data.sprites.front_default}" alt="${data.name}">
      `;
    })
    .catch(error => {
      div.innerHTML = `<h2 style="color:red;">${error.message}</h2>`;
    });
}