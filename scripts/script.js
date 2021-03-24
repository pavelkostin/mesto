export {popupGallery, closePopupByKey, openPopup}

import { initialCards } from "./initialCards.js";
import Card from "./Card.js";
import { FormValidator } from "./FormValidator.js";


//
// глобальные переменные
//

const popupAdd = document.querySelector(".popup_add-card");
const popupAddBtn = document.querySelector(".profile__add");
const popupEdit = document.querySelector(".popup_edit-profile");
const popupEditBtn = document.querySelector(".profile__edit");
const closeBtnAll = Array.from(document.querySelectorAll('.popup__close'));
const cardsList = document.querySelector(".cards__list");
const popupAddForm = document.querySelector(".popup__form_add-place");
const inputPlace = document.querySelector(".popup__input_place");
const inputLink = document.querySelector(".popup__input_link");
const popupGallery = document.querySelector(".popup_gallery");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupEditForm = document.querySelector(".popup__form_edit-profile");
const popupEditName = document.querySelector(".popup__input_name");
const popupEditJob = document.querySelector(".popup__input_job");

// validationArray
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


//------------------------------------------------------------------------------------
// функции
//------------------------------------------------------------------------------------

// запонение профиля

function setPopupProfile() {
    popupEditName.value = profileName.textContent;
    popupEditJob.value = profileJob.textContent;
}

setPopupProfile();


function handleProfilePopup() {
    setPopupProfile()
    openPopup(popupEdit);
}


function editProfileSumit(event) {
    event.preventDefault();
    profileName.textContent = popupEditName.value;
    profileJob.textContent = popupEditJob.value;
    closePopup(popupEdit);
}



// открыть попап - универсальная функция
function openPopup(popup) {
    
    profileValidation.resetErrorInput();
    placeValidation.resetErrorInput();
    
    popup.classList.add("popup_visible");
    document.addEventListener("keydown", closePopupByKey);
}



// закрыть попап - универсальная функция
function closePopup(popup) {
    popup.classList.remove("popup_visible");
    document.removeEventListener("keydown", closePopupByKey);
}

function closePopupClosest(event) {
    const eventTarget = event.target.closest(".popup"); // закрыть попап, на котором сработало событие
    closePopup(eventTarget);
}


// закрыть на ESC

function closePopupByKey(event) {
    const popupVisible = document.querySelector(".popup_visible");
    if (event.key === "Escape") {
        closePopup(popupVisible);
    }
}

// закрыть по оверлею


function closePopupByOverlay(event) {
    const popupVisible = document.querySelector(".popup_visible");
    if (event.target === event.currentTarget) {
        closePopup(popupVisible);

    }
}


//------------------------------------------------------------------------------------
// обработчики
//------------------------------------------------------------------------------------


popupEdit.addEventListener("mousedown", closePopupByOverlay);
popupAdd.addEventListener("mousedown", closePopupByOverlay);
popupGallery.addEventListener("mousedown", closePopupByOverlay);


popupAddForm.addEventListener("submit", addNewCard);
popupEditForm.addEventListener("submit", editProfileSumit);


popupEditBtn.addEventListener("click", () => {
    handleProfilePopup(popupEdit);
})


popupAddBtn.addEventListener("click", () => {
    popupAddForm.reset();
    openPopup(popupAdd)
});


closeBtnAll.forEach(function (item) {
    item.addEventListener("click", closePopupClosest);
});



//------------------------------------------------------------------------------------
// валидация и создание экземпляра
//------------------------------------------------------------------------------------



const profileValidation = new FormValidator(validationArray, popupEditForm);
profileValidation.enableValidation();

const placeValidation = new FormValidator(validationArray, popupAddForm);
placeValidation.enableValidation();



//------------------------------------------------------------------------------------
//изначальное отображение карточек
//------------------------------------------------------------------------------------



// добавление карточек из объекта при загрузке страницы и создание экземпляра
function createCardsDefault() {
    initialCards.forEach(function (item) {
        const card = new Card(item, ".template_type_default"); // создаем экземпляр класса и передаём объект аргументом
        const cardElement = card.generateCard(); // подготовим карточку к публикации
        //setCardListeners(cardElement);
        cardsList.append(cardElement); //добавим новую карточку в DOM
    });
}

createCardsDefault();

// добавление карточки в начало и создание экземпляра

function addNewCard(evt) {
    evt.preventDefault();
    const newCard = new Card({ name: inputPlace.value, link: inputLink.value }, ".template_type_default");
    const cardElement = newCard.generateCard(); // подготовим карточку к публикации
    cardsList.prepend(cardElement);
    closePopup(popupAdd);
}