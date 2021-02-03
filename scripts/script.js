
//кнопки
const editProfileBtn = document.querySelector('.profile__edit');
const addCardBtn = document.querySelector('.profile__add');
const closeButtonList = document.querySelectorAll('.popup__close');

//попапы
const popupEdit = document.querySelector('.popup_edit-profile');
const popupAdd = document.querySelector('.popup_add-card');
const popupGallery = document.querySelector('.popup_gallery');


const cardsList = document.querySelector('.cards__list'); // список карточек

const cardsTemplate = document.querySelector('.template'); // темплейт

// управление профилем
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formEditProfile = document.querySelector('.popup__form_edit-profile');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');

// управление добавлением карточки
const formAddCard = document.querySelector('.popup__form_add-place');
const cardName = document.querySelector('.popup__input_place');
const cardLink = document.querySelector('.popup__input_link');

// управление галлереей
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

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


//открыть и закрыть попап
function openPopup(popup) {
    popup.classList.add('popup_visible');
    }
function closePopup(popup) {
    popup.classList.remove('popup_visible');
    }


//открыть попап редактиварования профиля

function openEditProfilePopup() {

    openPopup(popupEdit);
}

// субмит редактирования профиля
function submitEditProfilePopup(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEdit);
}

//открыть попап добавления карточки

function openAddNewCardPopup() {

    openPopup(popupAdd);
}

//добавление карточек из массива
function createCardsDefault({name, link}) {
    const card = cardsTemplate.content.cloneNode(true);
    card.querySelector('.cards__place').textContent = name;
    card.querySelector('.cards__photo').src = link;
    card.querySelector('.cards__photo').alt = name;
    setCardListeners(card);
    return card
}

function addCardsDefault() {
    initialCards.forEach(function({name,link}) {
        const newCard = createCardsDefault({name, link})
        cardsList.append(newCard);
    })
}
addCardsDefault();


//добавление карточки в начало
function createNewCard(name, link) {
    let newCard = createCardsDefault({name, link});
    cardsList.prepend(newCard);
}

function addNewCard(event) {
    event.preventDefault();
    createNewCard(cardName.value, cardLink.value);
    closePopup(popupAdd);
}

//переключение лайка
function toggleLike(event) {
    event.target.classList.toggle('cards__like_active');
}

//удаление карточки по кнопке
function deleteCard(event) {
    event.preventDefault();
    event.target.closest('.cards__item').remove();
}


// слушатели в темплейте
function setCardListeners(card){

    const like = card.querySelector('.cards__like')
    const del = card.querySelector('.cards__delete')
    const photo = card.querySelector('.cards__photo')

    like.addEventListener('click', toggleLike);
    del.addEventListener('click', deleteCard);
    photo.addEventListener('click', showGalleryPhoto);
    
}


//открытие фотографии
function showGalleryPopup() {
    openPopup(popupGallery);
}

function showGalleryPhoto(event) {
    showGalleryPopup(popupGallery);
    const photo = event.target.closest('.cards__photo');
    popupImage.src = photo.src;
    popupImage.alt = photo.alt;
    popupCaption.textContent = photo.alt;
}

function hideGalleryPopup() {
    closePopup(popupGallery);
}


//слушатели
addCardBtn.addEventListener('click', openAddNewCardPopup); //открыть попап добавления карточки
formAddCard.addEventListener('submit', addNewCard); //submit добавления карточки
editProfileBtn.addEventListener('click', openEditProfilePopup); //открыть попап редактиварония профиля
formEditProfile.addEventListener('submit', submitEditProfilePopup); //submit редактиварония профиля

// слушатели - закрыть ближайший попап
function closePopupByBtn(evt) {
    const closeButton = evt.target;
    const popup = closeButton.closest('.popup');
    closePopup(popup);
}

closeButtonList.forEach(function(item) {
    item.addEventListener('click', closePopupByBtn);
})