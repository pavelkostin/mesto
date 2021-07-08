

/* const initialCards = [
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
]; */

const cardsList = document.querySelector('.cards__list');

const popupEditBtn = document.querySelector(".profile__edit");
const popupName = document.querySelector(".popup__input_name");
const popupJob = document.querySelector(".popup__input_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileAvatar = document.querySelector(".profile__avatar");
const popupAddCardBtn = document.querySelector(".profile__add");
const popupPlace = document.querySelector(".popup__input_place");
const popupLink = document.querySelector(".popup__input_link");
const popupAvatarInput = document.querySelector('.popup__input_avatar');
const popupEditForm = document.querySelector(".popup__form_edit-profile");
const popupAddForm = document.querySelector(".popup__form_add-place");
const popupAvatarForm = document.querySelector('.popup__form_edit-avatar')

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





export {cardsList, popupName, popupJob, popupEditBtn,
    profileName, profileJob, profileAvatar, popupAddCardBtn, popupPlace, popupLink, popupAvatarInput,
    popupAvatarForm, popupEditForm, popupAddForm, validationArray}