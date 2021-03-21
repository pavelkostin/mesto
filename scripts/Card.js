export class Card {
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
        this._element.querySelector(".cards__photo").src = this._link;
        this._element.querySelector(".cards__place").textContent = this._name;
        this._element.querySelector(".cards__photo").alt = this._name;

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
    }

    // лайк
    _setLike() {
        const eventTarget = event.target.closest(".cards__like");
        eventTarget.classList.toggle("cards__like_active");
    }

    // удалить
    _deleteCard() {
        const eventTarget = event.target.closest(".cards__item");
        eventTarget.remove();
    }
}
