const editProfileBtn = document.querySelector('.profile__edit');
const closeProfileBtn = document.querySelector('.popup__close_edit-profile');
const popupEdit = document.querySelector('.popup_edit-profile');
const addCardBtn = document.querySelector('.profile__add');
const popupAdd = document.querySelector('.popup_add-card');
const closeAddCardBtn = document.querySelector('.popup__close_add-card');
const formEditProfile = document.querySelector('.popup__form_edit-profile');
const cardsList = document.querySelector('.cards__list');
const cardsTemplate = document.querySelector('.template');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formAddCard = document.querySelector('.popup__form_add-place');
const cardName = document.querySelector('.popup__input_place');
const cardLink = document.querySelector('.popup__input_link');
const popupGallery = document.querySelector('.popup_gallery');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const popupCloseGalleryBtn = document.querySelector('.popup__close_gallery');

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

//открыть и закрыть попап edit и add
function openEditProfile() {
    popupEdit.classList.add('popup_visible');
}
function closeEditProfile() {
    popupEdit.classList.remove('popup_visible');
}
function openAddCard() {
    popupAdd.classList.add('popup_visible');
}
function closeAddCard() {
    popupAdd.classList.remove('popup_visible');
}

//редактиварование профиля

function editProfile(evt){
    evt.preventDefault();
    profileName.textContent = formEditProfile.querySelector('.popup__input_name').value;
    profileJob.textContent = formEditProfile.querySelector('.popup__input_job').value;
    closeEditProfile();
}

//добавление карточек из массива
function createCardsDefault({name, link}) {
    const card = cardsTemplate.content.cloneNode(true);
    card.querySelector('.cards__place').textContent = name;
    card.querySelector('.cards__photo').src = link;
    card.querySelector('.cards__photo').alt = name;
    cardListeners(card);
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
    closeAddCard();
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

//открытие фотографии

function showGalleryPopup() {
    popupGallery.classList.add('popup_visible');
}

function showGalleryPhoto(event) {
    showGalleryPopup(popupGallery);
    const photo = event.target.closest('.cards__photo');
    popupImage.src = photo.src;
    popupImage.alt = photo.alt;
    popupCaption.textContent = photo.alt;
}

function hideGalleryPopup() {
    popupGallery.classList.remove('popup_visible');
}

popupCloseGalleryBtn.addEventListener('click', hideGalleryPopup);


// слушатели в темплейте
function cardListeners(cardsTemplate){
    cardsTemplate.querySelector('.cards__like').addEventListener('click', toggleLike);
    cardsTemplate.querySelector('.cards__delete').addEventListener('click', deleteCard);
    cardsTemplate.querySelector('.cards__photo').addEventListener('click', showGalleryPhoto);
    
}



//слушатели
editProfileBtn.addEventListener('click', openEditProfile);
closeProfileBtn.addEventListener('click', closeEditProfile);
addCardBtn.addEventListener('click', openAddCard);
formEditProfile.addEventListener('submit', editProfile);
closeAddCardBtn.addEventListener('click', closeAddCard);
formAddCard.addEventListener('submit', addNewCard);






//открыть аватар
/*const profileAvatar = document.querySelector('.profile__avatar');
const popupAvatar = document.querySelector('.popup_avatar');
const popupAvatarCloseBtn = document.querySelector('.popup__close_avatar');



function openAvatar() {
    popupAvatar.classList.toggle('popup_visible');
    document.querySelector('.popup__caption_name').textContent = profileName.textContent;
    document.querySelector('.popup__caption_job').textContent = profileJob.textContent;
}

profileAvatar.addEventListener('click', openAvatar);
popupAvatarCloseBtn.addEventListener('click', openAvatar);*/