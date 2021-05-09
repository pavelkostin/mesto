

export default class Popup {
    constructor(selector) {
        this._selector = document.querySelector(selector);
       // this.formHandler = formHandler;
    }

    open() {
        this._selector.classList.add('popup_visible');
        document.addEventListener('keydown', this._closeByEsc.bind(this));
    }

    close() {
        this._selector.classList.remove('popup_visible');
        document.removeEventListener('keydown', this._closeByEsc.bind(this));
    }

    _closeByEsc(event) {
        if(event.key === 'Escape') {
            this.close();
        }
    }

    _closePopupByClick(event) {
        if(event.target.classList.contains('popup__close') || event.target.classList.contains('popup')) {
            this.close();
        }
        
    }

    setEventListeners() {

        this._selector.addEventListener('click', this._closePopupByClick.bind(this));

    }
}


