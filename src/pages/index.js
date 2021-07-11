import Card from "../components/Card.js";
import Section from "../components/Section.js";
import {
    popupName, popupJob, popupEditBtn, profileName, profileJob, profileAvatar,
    popupAddCardBtn, popupEditForm, popupAddForm, validationArray, popupAvatarForm, popupLink, popupPlace, popupAvatarInput} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupConfirm from "../components/PopupConfirm.js";
import Api from "../components/Api.js";
import FormValidation from "../components/FormValidation.js";
import './index.css'; 



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
                .then((data) => {
                    //newCard._newTemplate.querySelector('.cards__like').classList.add('cards__like_active')
                    newCard.setLike()
                    newCard.setCounterOfLikes(data.likes.length)
                })
                
                .catch((err) => console.log(err))
        },
        handleCardDislike: () => {
            newApi.disLikeCard(newCard)
                .then((data) => {
                    //newCard._newTemplate.querySelector('.cards__like').classList.remove('cards__like_active')
                    newCard.setDislike()
                    newCard.setCounterOfLikes(data.likes.length)})

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

newPopupConfirm.setEventListeners()

const saveAvatarBtn = document.getElementById('popupSubmitAvatar')


function renderLoading(btnSelector, text) {
    btnSelector.innerHTML = text;
}

// изменить аватар
const newPopupAvatar = new PopupWithForm({
    popupSelector: ".popup_avatar",
    formSubmit: (data) => {


        renderLoading(saveAvatarBtn, 'Сохранение...');

        
        newApi.editAvatar(data.avatar)
            .then((data) => {

                userInfo.setUserInfo(data)
                newPopupAvatar.close()
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                renderLoading(saveAvatarBtn, 'Сохранить');
            })
            
            
    }
            
})

newPopupAvatar.setEventListeners()



const avatarBtn = document.querySelector('.profile__avatar')
avatarBtn.addEventListener('click', () => {
    editAvatarValidation.resetErrorInput()
    newPopupAvatar.open()
    
})



//создание секции
const cardsList = new Section(
    {
        renderer: (data) => {
            cardsList.addItem(createCard(data));

        },
    },
    ".cards__list"
);


const userInfo = new UserInfo({ name: profileName, about: profileJob, avatar: profileAvatar });


Promise.all([ newApi.getUSerInfoFromServer(), newApi.getCardsFromServer() ])
.then((data)=>{

    userId = data[0]._id;
    userInfo.setUserInfo(data[0]);
    console.log(data);
    cardsList.renderItems(data[1])
}) 
.catch((err)=>{console.log(err)})


// получить список карточек с сервера

/* newApi.getCardsFromServer()
    .then((cards) => {
        const cardsList = new Section({
            //items: cards,
            renderer: card => {
                cardsList.addItem(createCard(card))
            }
        }, ".cards__list")
        cardsList.renderItems(cards)
        console.log(cardsList);
    })
    .catch((err) => {
        console.log(err);
    }) */


// получение данных юзера
/* const userInfo = new UserInfo({ name: profileName, about: profileJob, avatar: profileAvatar });



newApi.getUSerInfoFromServer()

    .then((data) => {
        userId = data._id;
        //console.log(data);
        userInfo.setUserInfo(data);
    })
    .catch((err) => {
        console.log(err);
    }) */


// редактирование юзера

const editUserSubmitBtn = document.querySelector('.popup__submit_edit-profile')

const newPopupWithForm = new PopupWithForm({
    popupSelector: ".popup_edit-profile",
    formSubmit: (info) => {

        renderLoading(editUserSubmitBtn, 'Сохранение...');

        newApi.setUserInfo(info.name, info.job)
            .then((info) => {
                userInfo.setUserInfo(info)
                newPopupWithForm.close();
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                renderLoading(editUserSubmitBtn, 'Сохранить');
            })

        
    },
});

newPopupWithForm.setEventListeners();


// слушатели
popupEditBtn.addEventListener("click", () => {

    const infoObject = userInfo.getUserInfo();

    popupName.value = infoObject.name;
    popupJob.value = infoObject.about;
    
    editProfileValidation.resetErrorInput()
    newPopupWithForm.open();
});




// добавление своей карточки
const addCardSubmitBtn = document.querySelector('.popup__submit_add-card')

const newPopupCard = new PopupWithForm({
    popupSelector: ".popup_add-card",
    formSubmit: (data) => {

        renderLoading(addCardSubmitBtn, 'Сохранение...');

        
        
        newApi.postNewCard(data.place, data.url)
            .then((data) => {
                console.log(data);
                cardsList.prependItem(createCard(data));
                newPopupCard.close();
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                renderLoading(addCardSubmitBtn, 'Сохранить');
            })

        
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

const editAvatarValidation = new FormValidation(validationArray, popupAvatarForm);
editAvatarValidation.enableValidation();
