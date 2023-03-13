function renderUserProfile() {
    let container = document.getElementById('user-container');
    container.innerHTML = '';

    for (let i = 0; i < userInfo.length; i++) {
        container.innerHTML += userProfileTemplate(i);
    }
}

function userProfileTemplate(i) {
    return `
        <div id="user-profile${i}" class="user-profile">
            ${userImage(i)}
            ${userInformation(i)}
        </div>
    `;
}

function userImage(i) {
    return `
        <div class="image">
            <img class="user-profile-img" src="${userInfo[i].userImage}">

            <div class="user-profile-name">
                <p>${userInfo[i].name}</p>
            </div>
        </div>
    `;
}

function userInformation(i) {
    return `
        <div class="information">
            <div class="description">
                <p>Descripción</p>
                <span>${userInfo[i].description}</span>
            </div>

            <div class="text">
                <p>Licenciatura</p>
                <p>${userInfo[i].subject}</p>
            </div>

            <div class="text">
                <p>Promedio</p>
                <p>${userInfo[i].grade}</p>
            </div>

            <div class="text">
                <p>Universidad</p>
                <p>${userInfo[i].university}</p>
            </div>

            <div class="text">
                <p>Asesorías tomadas</p>
                <p>${userInfo[i].usedAsesories}</p>
            </div>

            <div class="text">
                <p>Ubicación</p>
                <p>${userInfo[i].location}</p>
            </div>
        </div>
    `;
}