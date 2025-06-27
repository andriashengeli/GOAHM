let div = document.querySelector("div")
let button = document.querySelector("button")

let getuser = () => {
    fetch("https://ipapi.co/json/")
    .then(res => {
        if (!res.ok){
            throw new Error("couldnt find ip fetch")
        }
        return res.json()
    }).then(data => {
        div.innerHTML = `
        <p>IP Address: ${data.ip}</p>
        <p>City: ${data.city}</p>
        <p>Region: ${data.region}</p>
        <p>Country: ${data.country_name}</p>`
    }).catch(err => {
        div.innerHTML(`<p style="color:red;">${err.message}</p>`)
    })
}

button.addEventListener("click", getuser)