export default class Card {
    constructor(data, selector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;

        this.handleCardClick = handleCardClick;
    }

    getTemplate() {
        const template = document.querySelector(this._selector).content.querySelector(".cards__item").cloneNode(true);
        return template;
    }

    generateCard() {
        this._element = this.getTemplate();

        // this.setEventListeners();

        this._cardsPhoto = this._element.querySelector(".cards__photo");
        this._cardsPlace = this._element.querySelector(".cards__place");
        this._cardsLike = this._element.querySelector(".cards__like");
        this._cardsDelete = this._element.querySelector(".cards__delete");

        this._cardsPhoto.src = this._link;
        this._cardsPhoto.alt = this._name;
        this._cardsPlace.textContent = this._name;

        this.setEventListeners();

        return this._element;
    }

    setEventListeners() {
        this._cardsPhoto.addEventListener("click", () => this.handleCardClick(this._name, this._link));

        this._cardsLike.addEventListener("click", () => {
            this.setLike();
        });

        this._cardsDelete.addEventListener("click", () => {
            this.deleteCard();
        });
    }

    setLike() {
        this._element.querySelector(".cards__like").classList.toggle("cards__like_active");
    }

    deleteCard() {
        this._element.remove();
    }
}
