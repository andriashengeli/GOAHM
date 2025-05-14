const countryCapitalMap = new Map([
  ["Georgia", "Tbilisi"],
  ["France", "Paris"],
  ["Japan", "Tokyo"],
  ["Italy", "Rome"],
  ["Brazil", "Brasília"]
]);


for (const [country, capital] of countryCapitalMap) {
  console.log(`The capital of ${country} is ${capital}.`);
}

countryCapitalMap.set("Germany", "Berlin");
console.log(`The capital of Germany is ${countryCapitalMap.get("Germany")}.`);``

countryCapitalMap.delete("Italy");
countryCapitalMap.delete("Japan");


console.log(countryCapitalMap.has("Italy")); // false
console.log(countryCapitalMap.has("Japan")); // false
console.log(countryCapitalMap.has("Germany")); // true


