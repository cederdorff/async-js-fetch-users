const url = "https://cederdorff.com/race/data/users.json";

async function getUsers() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function displayUsers(userList) {
  let html = "";
  for (const user of userList) {
    html += /*html*/ `
            <article>
                <img src="${user.image}">
                <h2>${user.name}</h2>
                <p>${user.title}</p>
            </article>`;
  }
  document.querySelector("#content").insertAdjacentHTML("afterbegin", html);
}

async function initApp() {
  const users = await getUsers();
  displayUsers(users);
}

initApp();
