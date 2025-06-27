let div = document.querySelector("div")
let button = document.querySelector("button")

let getuser = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => {
        if(!res.ok){
            throw new Error("failed to fetch joke")
            
        }
        return res.json();
    })
    .then(data => {
        div.innerHTML = `
        <p>${data.setup}</p>
        <p class="punchline">${data.punchline}</p>
        `;
    })
    .catch(err => {
        div.innerHTML = `<p style="color:red;">${err.message}</p>`;
    })
}

button.addEventListener("click",getuser)