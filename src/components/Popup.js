export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = document.querySelector(popupSelector)
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this.popupSelector.classList.add('popup_visible')
        document.addEventListener('keydown', this._handleEscClose)
    }

    close() {
        this.popupSelector.classList.remove('popup_visible')
        document.removeEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose(event) {
        if(event.key === 'Escape') {
            this.close();
        }
    }

    _closeByClick(event) {
        if(event.target.classList.contains('popup__close') || event.target === event.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this.popupSelector.addEventListener('click', this._closeByClick.bind(this))
    }

}