import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector)

        this._popupImage = this.popupSelector.querySelector('.popup__image');
        this._popupCaption = this.popupSelector.querySelector('.popup__caption');
        
    }


    open(name, link) {
        super.open();
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupCaption.textContent = name;
        
    }

}
