
export default class Card {
    constructor(data, selector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;

        this.handleCardClick = handleCardClick;
    }

    getTemplate() {
        const template = document.querySelector(this._selector).content.querySelector('.cards__item').cloneNode(true);
        return template;
    }

    generateCard() {
        this._element = this.getTemplate();
        
        this.setEventListeners();

        this._element.querySelector('.cards__photo').src = this._link;
        this._element.querySelector('.cards__photo').alt = this._name;
        this._element.querySelector('.cards__place').textContent = this._name;
        return this._element;
    }


    setEventListeners() {
        this._element.querySelector('.cards__photo').addEventListener('click', () =>
        this.handleCardClick(this._name, this._link))

        this._element.querySelector('.cards__like').addEventListener('click', ()=> {
            this.setLike();
        })

        this._element.querySelector('.cards__delete').addEventListener('click', ()=> {
            this.deleteCard();
        })

    }


    setLike() {
        this._element.querySelector('.cards__like').classList.toggle('cards__like_active');
    }

    deleteCard() {
        this._element.remove();
    }
    
    
}