
export {initialCards, cardsList, popupName, popupJob, btnEdit, profileName, profileJob,
    popupPlace, popupLink, popupEditForm, popupAddForm, validationArray

};

const initialCards = [
    {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const cardsList = document.querySelector('.cards__list');

const popupName = document.querySelector('.popup__input_name');
const popupJob = document.querySelector('.popup__input_job');
const btnEdit = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const popupPlace = document.querySelector('.popup__input_place');
const popupLink = document.querySelector('.popup__input_link');
const popupEditForm = document.querySelector(".popup__form_edit-profile");
const popupAddForm = document.querySelector(".popup__form_add-place");

const validationArray = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_inactive",
    inputErrorClass: "popup__input_red-bottom", // red bottom
    errorClass: "popup__input-error_active", // span message
    popupSection: ".popup__section",
    popupInputError: ".popup__input-error",
};