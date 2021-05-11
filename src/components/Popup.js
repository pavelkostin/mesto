export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup);
        this._closeByEsc= this._closeByEsc.bind(this);
        this._closePopupByClick= this._closePopupByClick.bind(this);

    }

    open() {
        this._popup.classList.add('popup_visible');
        document.addEventListener('keydown', this._closeByEsc);
    }

    close() {
        this._popup.classList.remove('popup_visible');
        document.removeEventListener('keydown', this._closeByEsc);
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

        this._popup.addEventListener('click', this._closePopupByClick);

    }
}
