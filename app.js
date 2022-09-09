const url = "https://raw.githubusercontent.com/cederdorff/mdu-frontend/main/data/users.json";

async function getData() {
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
    document.querySelector("#content").innerHTML = html;
}

async function initApp() {
    const users = await getData();
    displayUsers(users);
}

initApp();
