
export default class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    // получили темплейт
    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector(".cards__item").cloneNode(true);
        return cardElement;
    }

    generateCard() {

        this._element = this._getTemplate(); 
        this._setEventListeners();

        this.cardsPhoto = this._element.querySelector('.cards__photo');
        this.cardsPlace = this._element.querySelector('.cards__place');
        
        this.cardsPhoto.src = this._link;
        this.cardsPhoto.alt = this._name;
        this.cardsPlace.textContent = this._name;

        return this._element;
    }

    // слушатели
    _setEventListeners() {
        this._element.querySelector(".cards__like").addEventListener("click", () => {
            this._setLike();
        });

        this._element.querySelector(".cards__delete").addEventListener("click", () => {
            this._deleteCard();
        });

        this._element.querySelector('.cards__photo').addEventListener('click', () => {
            this._handlePreviewPicture();
        })

        document.addEventListener("keydown", (event) => {
            this._closePopupByKey(event);
        });
    }

    // открыть галлерею

    _handlePreviewPicture() {

        this.popupGallery = document.querySelector('.popup_gallery');
        this.cardsPhoto = this.popupGallery.querySelector('.popup__image');
        this.cardsPlace = this.popupGallery.querySelector('.popup__caption');

        this.cardsPhoto.src = this._link;
        this.cardsPhoto.alt = this._name;
        this.cardsPlace.textContent = this._name;

        this.popupGallery.classList.add('popup_visible');
    }

    _closePopupByKey(event) {
        const popupGallery = document.querySelector('.popup_gallery');
        if (event.key === "Escape") {
            popupGallery.classList.remove('popup_visible');
        }
    }


    // лайк
    _setLike() {

        this._likeBtn = this._element.querySelector('.cards__like');

        if (this._likeBtn.classList.contains('cards__like_active')) {
            this._likeBtn.classList.toggle('cards__like_active');
        }else{
            this._likeBtn.classList.toggle('cards__like_active');
        }
    }

    // удалить
    _deleteCard() {

        this._element.querySelector('.cards__item');
        this._element.remove();
    }

}

