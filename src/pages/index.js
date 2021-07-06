import Card from "../components/Card.js";
import Section from "../components/Section.js";
import {
    popupName, popupJob, popupEditBtn, profileName, profileJob, profileAvatar,
    popupAddCardBtn, popupEditForm, popupAddForm, validationArray} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupConfirm from "../components/PopupConfirm.js";
import Api from "../components/Api.js";
import FormValidation from "../components/FormValidation.js";
import './style.css'; 



// попап галлереи
const newPopupWithImage = new PopupWithImage(".popup_gallery");
newPopupWithImage.setEventListeners();

// апи
const newApi = new Api({
    url: "https://nomoreparties.co/v1/cohort-22",
    headers: {
        authorization: "1ee4b4ce-cc80-4da8-ae23-ade464e5dd65",
        "Content-Type": "application/json",
    },
});

// создание карточки
let cardToDelete = null;
let userId;

function createCard(data) {
    const newCard = new Card({
        data: data,
        templateSelector: ".template",
        userId: userId,
        handleCardClick: newPopupWithImage.open.bind(newPopupWithImage),
        handleDeleteClick: () => {
            newPopupConfirm.open()
            cardToDelete = newCard;
        },
        handleCardLike: () => {
            newApi.likeCard(newCard)
                .then((data) => newCard.setCounterOfLikes(data.likes.length))
                .catch((err) => console.log(err))
        },
        handleCardDislike: () => {
            newApi.disLikeCard(newCard)
                .then((data) => newCard.setCounterOfLikes(data.likes.length))
                .catch((err) => console.log(err))
        },
    }
    )
    return newCard.generateCard();
}


// подтверждение удаления попап
const newPopupConfirm = new PopupConfirm({
    popupSelector: '.popup_confirm',
    deleteSubmit: () => {
        newApi.deleteCard(cardToDelete)
            .then(() => {
                cardToDelete.delete();
                console.log(cardToDelete);
                newPopupConfirm.close();
            })
            .catch(err => {
                console.log(err);
            })
    }
})

const saveAvatarBtn = document.getElementById('popupSubmitAvatar')

// изменить аватар
const newPopupAvatar = new PopupWithForm({
    popupSelector: ".popup_avatar",
    formSubmit: (data) => {

        saveAvatarBtn.innerHTML = 'Сохранение...'

        //debugger
        
        newApi.editAvatar(data.avatar)
            .then((data) => {

                userInfo.setUserInfo(data)

            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                saveAvatarBtn.innerHTML = 'Сохранить'
            })
            
            newPopupAvatar.close()
    }
            
})

newPopupAvatar.setEventListeners()



const avatarBtn = document.querySelector('.profile__avatar')
avatarBtn.addEventListener('click', () => {
    newPopupAvatar.open()
})



//создание секции
const cardsList = new Section(
    {
        items: [],
        renderer: (data) => {
            cardsList.addItem(createCard(data));

        },
    },
    ".cards__list"
);


// получить список карточек с сервера
newApi.getCardsFromServer()
    .then((cards) => {
        const cardsList = new Section({
            items: cards,
            renderer: card => {
                cardsList.addItem(createCard(card))
            }
        }, ".cards__list")
        cardsList.renderItems()
        console.log(cardsList);
    })


// получение данных юзера
const userInfo = new UserInfo({ name: profileName, about: profileJob, avatar: profileAvatar });



newApi.getUSerInfoFromServer()

    .then((data) => {
        userId = data._id;
        //console.log(data);
        userInfo.setUserInfo(data);
    })
    .catch((err) => {
        console.log(err);
    })


// редактирование юзера

const editUserSubmitBtn = document.querySelector('.popup__submit_edit-profile')

const newPopupWithForm = new PopupWithForm({
    popupSelector: ".popup_edit-profile",
    formSubmit: (info) => {

        

        editUserSubmitBtn.innerHTML = 'Сохранение...'

        newApi.setUserInfo(info.name, info.job)
            .then((info) => {
                userInfo.setUserInfo(info)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                editUserSubmitBtn.innerHTML = 'Сохранить'
            })

        newPopupWithForm.close();
    },
});

newPopupWithForm.setEventListeners();


// слушатели
popupEditBtn.addEventListener("click", () => {

    const infoObject = userInfo.getUserInfo();

    popupName.value = infoObject.name.textContent;
    popupJob.value = infoObject.about.textContent;
    
    editProfileValidation.resetErrorInput()
    newPopupWithForm.open();
});




// добавление своей карточки
const addCardSubmitBtn = document.querySelector('.popup__submit_add-card')

const newPopupCard = new PopupWithForm({
    popupSelector: ".popup_add-card",
    formSubmit: (data) => {

        addCardSubmitBtn.innerHTML = 'Сохранение...'
        
        newApi.postNewCard(data.name, data.link)
            .then((data) => {
                console.log(data);
                cardsList.prependItem(createCard(data));
            })
            .finally(() => {
                addCardSubmitBtn.innerHTML = 'Сохранить'
            })

        newPopupCard.close();
    },
});

newPopupCard.setEventListeners();

popupAddCardBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addCardValidation.resetErrorInput()
    newPopupCard.open();
    
});


//  валидация
const editProfileValidation = new FormValidation(validationArray, popupEditForm);
editProfileValidation.enableValidation();

const addCardValidation = new FormValidation(validationArray, popupAddForm);
addCardValidation.enableValidation();





/* 1. shift + alt + a - comment
    2. shift + alt + f - format

*/