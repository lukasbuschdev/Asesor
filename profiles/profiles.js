function renderCards() {
    let container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < cards.length; i++) {
        container.innerHTML += cardsTemplate(i);
    }
}

function cardsTemplate(i) {
    return `
        <div class="card" id="card${i}" onclick="openProfile(${i})">
            <img src="${cards[i].image}">
            <div class="card-text">
                <div class="upper-text">
                    <p>${cards[i].name}</p>
                    <p>${cards[i].subject}</p>
                </div>
                <div class="lower-text">
                    <p>Semester (${cards[i].semester})</p>
                    <div>
                        <img src="/img/star.png">
                        <p><b>${cards[i].rating}</b></p>
                    </div>
                </div>
            </div>
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

function search() {
    let search = document.getElementById('search').value;
    search.toLowerCase();

    let container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < cards.length; i++) {
        let name = cards[i].name;
        let subject = cards[i].subject;

        if (name.toLowerCase().includes(search.toLowerCase()) || subject.toLowerCase().includes(search.toLowerCase())) {
            container.innerHTML += cardsTemplate(i);
        }
    }
}

function openProfile(i) {
    let profile = document.getElementById('profile');
    profile.innerHTML = renderSingleProfile(i);

    document.getElementById('profile').classList.replace('d-none', 'profile');
    document.getElementById('container').classList.replace('container', 'd-none');
}

function renderSingleProfile(i) {
    return `
        <div id="single-profile${i}" class="single-profile">
            ${singleProfileImage(i)}
            ${singleProfileInformation(i)}
            ${singleProfileChatButton(i)}
            <div id="comment-card${i}" class="comment-card">
                <div class="comments-heading">
                    Comentarios
                </div>
                <div>
                    ${singleProfileComments(i)}
                </div>
            </div>
            ${renderInputField(i)}
        </div>
    `;
}

function singleProfileImage(i) {
    return `
        <div class="image">
            <div class="close-tag">   
                <img class="close" src="/img/close.png" onclick="closeProfile()">
            </div>

            <img class="rank-img" src="${cards[i].rank}">
            <img class="profile-img" src="${cards[i].image}">

            <div class="profile-name">
                <p>${cards[i].fullName}</p>
            </div>
        </div>
    `;
}

function singleProfileInformation(i) {
    return `
        <div class="information">
            <div class="description">
                <p>Descripción</p>
                <span>${cards[i].description}</span>
            </div>

            <div class="text">
                <p>Asignatura</p>
                <p>${cards[i].subject}</p>
            </div>

            <div class="text">
                <p>Promedio</p>
                <p>9.9</p>
            </div>

            <div class="text">
                <p>Universidad</p>
                <p>${cards[i].university}</p>
            </div>

            <div class="text">
                <p>Precio</p>
                <p>${cards[i].price}</p>
            </div>
        </div>
    `;
}

function singleProfileChatButton(i) {
    return `
        <div class="contact-button-container">
            <button class="contact-button" onclick="openChat(${i})">
                Chat
            </button>
        </div>
    `;
}

function singleProfileComments(i) {
    let comments = "";
    for (let j = 0; j < cards[i].comments.length; j++) {
        comments += renderComments(i, j);

    }

    return comments;
}

function renderComments(i, j) {
    return `
        <div id="comments${i}${j}" class="comments">
            <div class="author-university">
                <p><b>${authors[j]}</b></p>
                <span>(${cards[i].university})</span>
            </div>
            <div class="comment-text">
                "${cards[i].comments[j]}"
            </div>
        </div>
    `;
}

function renderInputField(i, j) {
    return `
        <div class="input-comment">
            <div id="input-comment${i}" contenteditable="true" aria-multiline="true"></div>
            <button class="send-comment" onclick="sendComment(${i},${j})"></button>
        </div>
    `;
}

function closeProfile() {
    document.getElementById('profile').innerHTML = '';

    document.getElementById('container').classList.replace('d-none', 'container');
    document.getElementById('profile').classList.replace('profile', 'd-none');
}

function sendComment(i) {
    let input = document.getElementById('input-comment' + i);
    let newComment = input.textContent;

    if(!newComment == 0) {

    cards[i].comments.push(newComment);

    document.getElementById('single-profile' + i).innerHTML = renderSingleProfile(i);

    input.textContent = "";

    } else {
        console.log('no input found')
    }
}

function openChat(i) {
    let chat = document.querySelector('#chatContainer');
    chat.innerHTML += renderChat(i);

    document.getElementById('chatContainer').classList.replace('chat-closed', 'chat-container');
    document.getElementById('single-profile'+ i).classList.toggle('dark-opacity');
    document.querySelector('.profile-img').classList.add('image-opacity');  
    document.querySelector('.contact-button').classList.add('image-opacity');
    document.querySelector('.rank-img').classList.add('image-opacity');

}

function renderChat(i, k) {
    return `
        <div class="chat" id="chat">
            <div class="chat-heading">
                <img src="/img/back.png" onclick="closeChat(${i})">
                <p>Chat with ${cards[i].name}</p>
            </div>

            <div class="new-message-container" id="newMessage${i}"></div>

            <div class="chat-input-container">
                <div class="input-bg">
                    <div class="chat-input" id="chat-input${i}" contenteditable="true" aria-multiline="true"></div>
                    <button class="send-message" onclick="sendMessage(${i}, ${k})"></button>
                </div>        
            </div>
        </div>
    `;
}

function closeChat(i) {
    document.getElementById('chatContainer').innerHTML = '';

    document.getElementById('chatContainer').classList.replace('chat-container', 'chat-closed');
    document.getElementById('single-profile'+ i).classList.toggle('dark-opacity');
    document.querySelector('.profile-img').classList.remove('image-opacity');  
    document.querySelector('.contact-button').classList.remove('image-opacity');
    document.querySelector('.rank-img').classList.remove('image-opacity');
}

function sendMessage(i) {
    let inputMessage = document.getElementById('chat-input' + i);
    let newMessage = inputMessage.textContent;

    if(!newMessage == 0) {

    messages.push(newMessage);
    document.getElementById('newMessage' + i).innerHTML = renderMessages(i);

    inputMessage.textContent = "";

    } else {
        console.log('no input found')
    }
}

function renderMessages(i) {
    let newMessages = document.getElementById('newMessage' + i);
    // newMessages.innerHTML = '';

    for (let k = 0; k < messages.length; k++) {
        newMessages += renderMessagesToChat(i, k);
    }

    return messages;
}

function renderMessagesToChat(i, k) {
    return `
        <div id="message${i}" class="message">
            <span>${messages[k]}</span>
        </div>
    `;
}