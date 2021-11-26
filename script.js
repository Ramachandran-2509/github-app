const apiUrl = `https://api.github.com/users/`;

const main = document.querySelector("#main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");
const btn = document.querySelector("#btn");

async function getUserDetails(user) {
  const response = await fetch(apiUrl + user);
  const data = await response.json();

  createUserCard(data);
}

function createUserCard(user) {
  const card = `
     <div class="card">
        <div class="image-container"> 
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar"/>
        </div>
        <div class="user-details">
            <h2> ${user.name}</h2>
            <p> ${user.bio}<p>

                <ul class="user-info">
                    <li><i class="fas fa-external-link-alt"></i><a id="user-url" href="${user.html_url}" target="_blank"> ${user.html_url}</a></li>
                    <li><i class="fas fa-code-branch"></i> ${user.public_repos} </li>
                    <li><i class="fas fa-user-friends"></i> ${user.followers} </li>
                    <li><i class="fas fa-plane-departure"></i> ${user.location}</li>
                    <li><i class="fas fa-eye"></i> ${user.updated_at} </li>
                </ul>
        <div>
    </div>
    `;

  main.innerHTML = card;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUserDetails(user);
    search.value = "";
  }
});
