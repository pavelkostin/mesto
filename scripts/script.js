let editProfile = document.querySelector('.profile__edit'); // открыть редактирование профиля
let popupEdit = document.querySelector('.popup_edit'); // выбрать попап добавление профиля
let addCardButton = document.querySelector('.profile__add'); // открыть добавление карточки
let popupAdd = document.querySelector('.popup_add'); // выбрать попап добавления карточки
let closePopupEditButton = document.querySelector('.popup__close_edit'); // закрыть редактирование профиля
let closePopupAddButton = document.querySelector('.popup__close_add'); // закрыть добавление карточки
let template = document.querySelector('.template').content;
let elementsList = document.querySelector('.elements__list');
let newCardPlace = document.querySelector('.popup__info_place');
let newCardLink = document.querySelector('.popup__info_link');
let inputName = document.querySelector('.popup__info_name'); // инпут имени
let inputJob = document.querySelector('.popup__info_job'); // инпут профессии
let inputPlace = document.querySelector('.popup__info_place'); // инпут места картинки
let inputLink = document.querySelector('.popup__info_link'); // инпут ссылки на картинку
let profileName = document.querySelector('.profile__name'); // имя в профиле
let profileJob = document.querySelector('.profile__job'); // профессия в профиле
let popupConfirmEdit = document.querySelector('.popup__form_edit'); // кнопка сабмит в попап едит
let popupConfirmAdd = document.querySelector('.popup__form_add'); // кнопка сабмит в попап add
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

// лайк
function toggleLike(event) {
    event.target.classList.toggle('elements__like_pressed');
}

// удаление карточки
function deleteCard(event) {
    event.preventDefault();
    event.target.closest('.elements__element').remove();
}

// открыть фото
const popupGallery = document.querySelector('.popup__gallery');
const popupGalleryPhoto = document.querySelector('.popup__image');
const popupGalleryCaption = document.querySelector('.popup__caption');
const closeGalleryButton = document.querySelector('.popup__close_gallery');

function openPopupGallery (event) {
    createPopupGallery();
    const templatePhoto = event.target.closest('.elements__photo');
    popupGalleryPhoto.src = templatePhoto.src;
    popupGalleryPhoto.alt = templatePhoto.alt;
    popupGalleryCaption.textContent = templatePhoto.alt;
}

function createPopupGallery() {
    popupGallery.classList.add('popup_opened');
}

function closePopupGallery() {
    popupGallery.classList.remove('popup_opened');
}

closeGalleryButton.addEventListener('click', closePopupGallery);

// события в карточках
function cardListeners(template) {
    template.querySelector('.elements__like').addEventListener('click', toggleLike);
    template.querySelector('.elements__trash').addEventListener('click', deleteCard);
    template.querySelector('.elements__photo').addEventListener('click', openPopupGallery);
}

// добавление карточек из массива при загрузке страницы
function createCard({name, link}) {
    card = template.cloneNode(true);
    card.querySelector('.elements__photo').src = link;
    card.querySelector('.elements__place').textContent = name;
    card.querySelector('.elements__photo').alt = name;
    cardListeners(card); // добавили слушатели в карточках
    return card;
}
function addCard() {
    initialCards.forEach(function({name, link}) {
        newCard = createCard({name, link});
        elementsList.append(newCard);
    })
}
addCard();



// добавление карточки в начало страницы
function createNewCard(name, link) {
    const newCard = createCard({name, link});
    elementsList.prepend(newCard);
}
function displayNewCard(event) {
    event.preventDefault(event);
    createNewCard(newCardPlace.value, newCardLink.value);
    closePopupAdd();
}

// открыть попап редактирования профиля 
function openPopupEdit (event) {
    event.preventDefault();
    popupEdit.classList.add('popup_opened');
}
function closePopupEdit () {

    popupEdit.classList.remove('popup_opened');
}
// подтверждение в редактировании профиля
function submitEdit(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopupEdit();
}

// открыть попап добавления карточки
function openPopupAdd (event) {
    event.preventDefault();
    popupAdd.classList.add('popup_opened');
}
function closePopupAdd () {
    popupAdd.classList.remove('popup_opened');
}

//слушатели событий
editProfile.addEventListener('click', openPopupEdit);
closePopupEditButton.addEventListener('click', closePopupEdit);
addCardButton.addEventListener('click', openPopupAdd);
closePopupAddButton.addEventListener('click', closePopupAdd);
popupConfirmEdit.addEventListener('submit', submitEdit);
popupConfirmAdd.addEventListener('submit', displayNewCard);