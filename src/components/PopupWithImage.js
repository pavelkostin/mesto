import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._image = this._selector.querySelector('.popup__image');
        this._caption = this._selector.querySelector('.popup__caption');
    }

    open(name, link) {
        super.open();
        this._image.src = link;
        this._image.alt = name;
        this._caption.textContent = name;
    }

}