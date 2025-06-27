const button = document.querySelector("button");
const userDiv = document.querySelector("div");

const getUser = () => {
  fetch("https://randomuser.me/api/")
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch user");
      return res.json();
    })
    .then(data => {
      const user = data.results[0];
      userDiv.innerHTML = `
        <h2>${user.name.first} ${user.name.last}</h2>
        <img src="${user.picture.large}" alt="User Picture">
        <p>Email: ${user.email}</p>
      `;
    })
    .catch(err => {
      userDiv.innerHTML = `<p style="color:red;">${err.message}</p>`;
    });
};

button.addEventListener("click", getUser);
