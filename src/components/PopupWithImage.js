import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector)
    }


    open(name, link) {
        super.open();
        this.popupSelector.querySelector('.popup__image').src = link;
        this.popupSelector.querySelector('.popup__image').alt = name;
        this.popupSelector.querySelector('.popup__caption').textContent = name;
        return this.popupSelector
    }

}




















/*

import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }

    open(name, link) {
        super.open();
        this.popupSelector.querySelector('.popup__image').src = link;
        this.popupSelector.querySelector('.popup__image').alt = name;
        this.popupSelector.querySelector('.popup__caption').textContent = name;
        return this.popupSelector;
    }

}

*/
