let imgs = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqR2GFIgqpSmVEl_VtTLbA85ZPRCJ5lJD36Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw85njnZk3YUWFve41euoniMkgq4QNBqNhtw&s",
    "https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000"
]

let num = 0;
function next() {
    num++;
    if (num >= imgs.length) {
        num = 0; 
    }
    document.getElementById("goat").src = imgs[num];
}

function prev() {
    num--;
    if (num < 0) {
        num = imgs.length - 1; 
    }
    document.getElementById("goat").src = imgs[num];
}