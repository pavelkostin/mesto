
export default class Card {
    constructor({ data, templateSelector, userId, handleCardClick, handleDeleteClick, handleCardLike, handleCardDislike }) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._likes = data.likes;

        this._ownerId = data.owner._id;
        this._cardId = data._id
        this._userId = userId;


        this.handleCardClick = handleCardClick;
        this.handleDeleteClick = handleDeleteClick;

        this._handleCardLike = handleCardLike;
        this._handleCardDislike = handleCardDislike;
    }

    _getTemplate() {
        this._element = document.
            querySelector(this._templateSelector)
            .content
            .querySelector('.cards__item')
            .cloneNode(true)

        return this._element;
    }

    hideDeleteBtn() {
        if (this._userId !== this._ownerId) {
            this._deleteBtn.classList.add('cards__delete_hidden')
        }
        else {
            this._deleteBtn.classList.remove('cards__delete_hidden')
        }
    }



    _ifLiked() {
        if (this._likes.some(user => {
            return user._id === this._userId
        })) {
            this._likeBtn.classList.add('cards__like_active');

        }
    }

    _handlelike() {
        if (!this._newTemplate.querySelector('.cards__like').classList.contains('cards__like_active')) {
            //this._newTemplate.querySelector('.cards__like').classList.add('cards__like_active')
            this._handleCardLike();
        } else {
            //this._newTemplate.querySelector('.cards__like').classList.remove('cards__like_active')
            this._handleCardDislike();
        }
    }

    setLike() {
        this._newTemplate.querySelector('.cards__like').classList.add('cards__like_active')
    }

    setDislike() {
        this._newTemplate.querySelector('.cards__like').classList.remove('cards__like_active')
    }



    setCounterOfLikes(num) {
        this._newTemplate.querySelector('.cards__quantity-likes').textContent = num;
    }


    //
    delete() {
        
        this._element.remove()
        this._element = null;
    }


    setEventListeners() {

        this._newTemplate
            .querySelector('.cards__photo')
            .addEventListener('click', () => {
                this.handleCardClick(this._name, this._link)
            })

        this._newTemplate.querySelector('.cards__like')
            .addEventListener('click', () => {
                this._handlelike()


            })


        this._newTemplate
            .querySelector('.cards__delete')
            .addEventListener('click', () => {
                this.handleDeleteClick(this)

            })


    }

    generateCard() {
        this._newTemplate = this._getTemplate();
        this._newTemplate.querySelector('.cards__photo').src = this._link;
        this._newTemplate.querySelector('.cards__photo').alt = this._name;
        this._newTemplate.querySelector('.cards__place').textContent = this._name;

        this._newTemplate.querySelector('.cards__quantity-likes').textContent = this._likes.length;

        this._likeBtn = this._newTemplate.querySelector('.cards__like');
        this._deleteBtn = this._newTemplate.querySelector('.cards__delete');
        this.hideDeleteBtn();

        this._ifLiked()

        this.setEventListeners()
        return this._newTemplate
    }
}
