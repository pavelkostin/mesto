export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = document.querySelector(popupSelector)
    }

    open() {
        this.popupSelector.classList.add('popup_visible')
        document.addEventListener('keydown', this._handleEscClose.bind(this))
    }

    close() {
        this.popupSelector.classList.remove('popup_visible')
        document.removeEventListener('keydown', this._handleEscClose.bind(this))
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




/*
export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = document.querySelector(popupSelector);

        //this._closePopupByClick= this._closePopupByClick.bind(this);
    }

    open() {
        this.popupSelector.classList.add('popup_visible');
        document.addEventListener('keydown', this.closeByEcs.bind(this))
    }

    close() {
        this.popupSelector.classList.remove('popup_visible');
        document.removeEventListener('keydown', this.closeByEcs.bind(this))
    }

    closeByEcs(evt) {
        if(evt.key === 'Escape') {
            this.close()
        }
    }


    _closePopupByClick(evt) {
        if(evt.target.classList.contains('popup__close') || evt.target === evt.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this.popupSelector.addEventListener('click', this._closePopupByClick.bind(this))

    }
}

*/



























/*export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = document.querySelector(popupSelector);
    }

    open() {
        this.popupSelector.classList.add('popup_visible');
        document.addEventListener('keydown', this.closeByEsc.bind(this));
    }

    close() {
        this.popupSelector.classList.remove('popup_visible');
        document.removeEventListener('keydown', this.closeByEsc.bind(this));
    }
    
    closeByEsc(evt) {
        if(evt.key === "Escape") {
            this.close();
        }
    }
    
    closeByClick(evt) {
        if(evt.target.classList.contains('popup__close') || evt.target === evt.currentTarget ) {
            this.close();
        }
    }

    setEventListeners() {

        this.popupSelector.addEventListener('click', this.closeByClick.bind(this))
    }

}
*/
