let generalyMap = new Map();
generalyMap.set("name", "andria");
generalyMap.set("30", 14);
generalyMap.set("isStudent", true);
generalyMap.set("hobbies", ["reading", "coding", "sports"]);
generalyMap.set("address", { city: "New York", zip: 10001 });


console.log(generalyMap.has("name")); 
console.log(generalyMap.has("30"));
console.log(generalyMap.has("isStudent")); 
console.log(generalyMap.has("hobbies"));
console.log(generalyMap.has("address"));



generalyMap.delete("name")
generalyMap.delete("age")

console.log(generalyMap.get("name"));
console.log(generalyMap.get("30"));
console.log(generalyMap.get("isStudent"));
console.log(generalyMap.get("hobbies"));
console.log(generalyMap.get("address"));


console.log(generalyMap)