let weather = `
[
    {
        "weather": "sunny",
        "temperature": 30,
        "rainChance": 10,
        "windSpeed": 5,
        "location": "tbilisi"
    }
]
`

let weatherData = JSON.parse(weather);
console.log(weatherData);

let weatherInfo = JSON.stringify(weatherData);
console.log(weatherInfo);