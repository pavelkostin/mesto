
let editButton = document.querySelector ('.profile__edit-button');
let popup = document.querySelector ('.popup');

let closeButton = document.querySelector ('.popup__close');


function showPopup() {
    popup.classList.add('popup_opened');
}
editButton.addEventListener ('click', showPopup);


function hidePopup() {
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener ('click', hidePopup);




let formElement = document.querySelector ('.popup__window');
let nameInput = document.querySelector ('.popup__name');
let jobInput = document.querySelector ('.popup__job');

let profileName = document.querySelector ('.profile__name');
let profileJob = document.querySelector ('.profile__para');


function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    hidePopup();
}


formElement.addEventListener('submit', handleFormSubmit);




