function renderCards() {
    let container = document.getElementById('home-container');
    container.innerHTML = '';

    for(let i = 0; i < homeCards.length; i++) {
        let homeCardItem = homeCards[i];
        container.innerHTML += homeCardsTemplate(i, homeCardItem);
    }
}

function homeCardsTemplate(i, homeCardItem) {
    let subjectHtml = '';
    for(let j = 0; j < homeCardItem.subjects.length; j++) {
        let subject = homeCardItem.subjects[j];
        subjectHtml += renderSubject(subject);
    }
    return `
        <div class="home-card marginBottom" id="home-card${i}" onclick="openSubjects(${i})">
            <div class="home-card-text">
                <p>${homeCardItem.title}</p>
            </div>

            <img class="home-image" src="${homeCardItem.image}">

        </div>

        <div class="subjects-center" id="subjects-center${i}">
            <div class="subjects" id="subjects${i}">
                ${subjectHtml}
            </div>
        </div>
    `;
}

function renderSubject(subject) {
    return `
        <div class="subject">
            <li><a href="profiles/profiles.html">${subject}</a></li>
        </div>
    `;
}

function openSearch() {
    document.getElementById('heading').classList.toggle('heading');
    document.getElementById('heading').classList.toggle('d-none');
    document.getElementById('search').classList.toggle('search');
    document.getElementById('search').classList.toggle('d-none');
}

function showMenu() {
    document.getElementById('navbar').classList.toggle('d-none');
    document.getElementById('navbar').classList.toggle('nav');
}

function openSubjects(i) {
    document.getElementById('subjects'+ i).classList.toggle('subjects-clicked');
    document.querySelector('.home-image').classList.toggle('border-radius');
    document.getElementById('subjects-center'+ i).classList.toggle('subjects-center-clicked');
    document.getElementById('home-card'+ i).classList.toggle('marginBottom');
}