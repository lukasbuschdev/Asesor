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
        <div class="home-card" id="home-card${i}" onclick="openSubjects(${i})">
            <div class="home-card-text">
                <p>${homeCardItem.title}</p>
            </div>

            <img class="home-image" src="${homeCardItem.image}">

        </div>

        <div class="subjects-center">
            <div class="subjects" id="subjects${i}">
                ${subjectHtml}
            </div>
        </div>
    `;
}

function renderSubject(subject) {
    return `
        <div class="subject">
            <p>${subject}</p>
        </div>
    `;
}

function openSearch() {
    document.getElementById('heading').classList.toggle('heading');
    document.getElementById('heading').classList.toggle('d-none');
    document.getElementById('search').classList.toggle('search');
    document.getElementById('search').classList.toggle('d-none');

    if (window.matchMedia("min-width: 350px").matches) {
        document.getElementById('menu').classList.toggle('menu');
        document.getElementById('menu').classList.toggle('d-none');
    }
}

function showMenu() {
    document.getElementById('navbar').classList.toggle('d-none');
    document.getElementById('navbar').classList.toggle('nav');
}

function openSubjects(i) {
    document.getElementById('subjects'+ i).classList.toggle('subjects-clicked');
    document.querySelector('.home-image').classList.toggle('border-radius');
}

// function openSubjects(i) {
//     let subjects = document.getElementById('subjects'+ i);
//     let homeCard = document.getElementById('home-card'+ i);

//     homeCard.addEventListener('click', function() {
//         console.log('aaaaaa');
//         subjects.classList.toggle('subjects-clicked');
//     });
// }