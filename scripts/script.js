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


// добавление карточек по дефолту

const template = document.querySelector('.template').content;
const cardsList = document.querySelector('.cards__list');

function createCardsDefault({name, link}) {
    const clonedTemplate = template.cloneNode(true);
    clonedTemplate.querySelector('.cards__photo').src = link;
    clonedTemplate.querySelector('.cards__photo').alt = name;
    clonedTemplate.querySelector('.cards__place').textContent = name;
    setCardListeners(clonedTemplate);
    return clonedTemplate;
}

function addCardsDefault() {
    initialCards.forEach(function({name, link}) {
        const cardsDefault = createCardsDefault({name, link});
        cardsList.append(cardsDefault);
    })
}

addCardsDefault();


// открыть закрыть попап

function openPopup(popup) {
    popup.classList.add('popup_visible');
    document.addEventListener('keydown', closePopupByKey);
}

function closePopup(popup) {
    popup.classList.remove('popup_visible');
    document.removeEventListener('keydown', closePopupByKey);
}

const popupAdd = document.querySelector('.popup_add-card');
const popupAddBtn = document.querySelector('.profile__add');

function openPopupAdd() {
    openPopup(popupAdd);
}
popupAddBtn.addEventListener('click', openPopupAdd);


const popupEdit = document.querySelector('.popup_edit-profile');
const popupEditBtn = document.querySelector('.profile__edit');
function openPopupEdit() {
    openPopup(popupEdit);
}

popupEditBtn.addEventListener('click', openPopupEdit);


const closeBtnAll = document.querySelectorAll('.popup__close');

function closePopupClosest(event) {
    const eventTarget = event.target.closest('.popup');
    closePopup(eventTarget);
}

closeBtnAll.forEach(function(item) {
    item.addEventListener('click', closePopupClosest);
})


// добавление карточки в начало
const inputPlace = document.querySelector('.popup__input_place');
const inputLink = document.querySelector('.popup__input_link');
const popupAddForm = document.querySelector('.popup__form_add-place');

function createNewCard(name, link) {
    const newCard = createCardsDefault({name, link});
    cardsList.prepend(newCard);
}

function addNewCard(event) {
    event.preventDefault();
    createNewCard(inputPlace.value, inputLink.value);
    closePopup(popupAdd);
}

popupAddForm.addEventListener('submit', addNewCard);


// открытие галлереи

const popupGallery = document.querySelector('.popup_gallery');
const popupGalleryImage = document.querySelector('.popup__image');
const popupGalleryCaption = document.querySelector('.popup__caption');

function showGallery(event) {
    openPopup(popupGallery);
    const eventTarget = event.target.closest('.cards__photo');
    popupGalleryImage.src = eventTarget.src;
    popupGalleryCaption.textContent = eventTarget.alt;
}

function setCardListeners(clonedTemplate) {
    clonedTemplate.querySelector('.cards__photo').addEventListener('click', showGallery); // show gallery
    clonedTemplate.querySelector('.cards__like').addEventListener('click', setLike); // like
    clonedTemplate.querySelector('.cards__delete').addEventListener('click', deleteCard); // delete
}


// like

function setLike(event) {
    const eventTarget = event.target.closest('.cards__like');
    eventTarget.classList.toggle('cards__like_active');
}

// delete

function deleteCard(event) {
    const eventTarget = event.target.closest('.cards__item');
    eventTarget.remove();
}



// edit profile submit
const profileName = document.querySelector('.profile__name');
const profileJob= document.querySelector('.profile__job');
const popupEditForm = document.querySelector('.popup__form_edit-profile');
const popupEditName = document.querySelector('.popup__input_name');
const popupEditJob = document.querySelector('.popup__input_job');

function editProfileSumit(event) {
    event.preventDefault();
    profileName.textContent = popupEditName.value;
    profileJob.textContent = popupEditJob.value;
    closePopup(popupEdit);
}

popupEditForm.addEventListener('submit', editProfileSumit);

// close by ESC

function closePopupByKey(event) {
    const popupVisible = document.querySelector('.popup_visible');
    if (event.key === 'Escape') {                                     
        closePopup(popupVisible, event)                                 
    }
}

// close by clicking overlay

function closePopupByOverlay(event) {
    const popupVisible = document.querySelector('.popup_visible');
    if (event.target === event.currentTarget) {                    
        closePopup(popupVisible, event);          
    }
};


popupEdit.addEventListener('mousedown', closePopupByOverlay);
popupAdd.addEventListener('mousedown', closePopupByOverlay);
popupGallery.addEventListener('mousedown', closePopupByOverlay);

