
import Card from '../components/Card.js';
import FormValidation from '../components/FormValidation.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards, popupName, popupJob, btnEdit, profileName, profileJob,
    popupPlace, popupLink, popupEditForm, popupAddForm, validationArray
} from '../utils/constants.js';
import './index.css';


// открытие галлереи

const popupImage = new PopupWithImage('.popup_gallery');
popupImage.setEventListeners();

// создание экземпляра карточки и добавление в cardsList
function createCards(data) {
    const newCard = new Card(data, '.template', popupImage.open.bind(popupImage))
    cardsList.setItems(newCard.generateCard());
}


// отрисовка карточек
const cardsList = new Section({
    data: initialCards, 
    renderer: function(data) {
        createCards(data);
    }
},

    '.cards__list'
) 
cardsList.renderItems();




// открытие попапа профиля

const userInfo = new UserInfo({ name: profileName, job: profileJob});

const profilePopup = new PopupWithForm({popup: '.popup_edit-profile', formHandler: () => {
    userInfo.setUserInfo({name: popupName.value, job: popupJob.value});
    profilePopup.close();
    }});

    profilePopup.setEventListeners();

    btnEdit.addEventListener('click', (e) => {
        e.preventDefault();
        profilePopup.open();

        const newUserInfo = userInfo.getUserInfo();
        popupName.value = newUserInfo.name;
        popupJob.value = newUserInfo.job;
    });

// открыть второй попап

const addPopup = new PopupWithForm({popup: '.popup_add-card', formHandler: () => {

const newCard = new Card(

    {name: popupPlace.value, link: popupLink.value},

    '.template', popupImage.open.bind(popupImage))

cardsList.prependItems(newCard.generateCard());

addPopup.close();


    }});


    const btnAdd = document.querySelector('.profile__add');
    btnAdd.addEventListener('click', (e) => {
        e.preventDefault();
        addPopup.open();
        addCardValidation.resetErrorInput();
    })

    addPopup.setEventListeners();


    //  валидация
    const editProfileValidation = new FormValidation(validationArray, popupEditForm);
    editProfileValidation.enableValidation();

    const addCardValidation = new FormValidation(validationArray, popupAddForm);
    addCardValidation.enableValidation();
    