function renderCards() {
    let container = document.getElementById('home-container');
    container.innerHTML = '';

    for(let i = 0; i < homeCards.length; i++) {

        container.innerHTML += homeCardsTemplate(i);
    }
}

function homeCardsTemplate(i) {
    return `
        <div class="home-card" id="home-card${i}">
            <div class="home-card-text">
                <p>${homeCards[i].title}</p>
            </div>

            <img src="${homeCards[i].image}">
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