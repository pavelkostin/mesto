
let editButton = document.querySelector ('.profile__edit-button');
let popup = document.querySelector ('.popup');
let closeButton = document.querySelector ('.popup__close');
let formElement = document.querySelector ('.popup__window');
let nameInput = document.querySelector ('.popup__input_name');
let jobInput = document.querySelector ('.popup__input_job');
let profileName = document.querySelector ('.profile__name');
let profileJob = document.querySelector ('.profile__para');


function showPopup() {
    popup.classList.add('popup_opened');
}

function hidePopup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    hidePopup();
}


editButton.addEventListener ('click', showPopup);
closeButton.addEventListener ('click', hidePopup);
formElement.addEventListener('submit', handleFormSubmit);




