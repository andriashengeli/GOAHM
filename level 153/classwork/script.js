let text = ducument.querySelector("input");
let button = document.querySelector("button");
let div = document.querySelector("div");


button.addEventListener("click", getWeather);

function getWeather() {
    let inputValue = text.value;
    let key = "b267c0add690d4d5d51b2e499de2039";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}`;

}

fetch(url)
    .then(response => {
        if (!response.ok){
            throw new Error("city is not found");
};
        return response.json();
    } )
    .then(data => {
        div.innerHTML =`
            <h1>${data.name}</h1>
            <h2>Temperature: ${data.main.temp}°C</h2>
            <h2>Weather: ${data.weather[0].main}</h2>
        `;
    })
    .catch(error => {
        div.innerHTML = 
        `<h2 style = "color:blue;">${"city not found!"}</h2>`;
    })