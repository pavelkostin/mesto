import Popup from "./Popup.js";


export default class PopupConfirm extends Popup {
    constructor({popupSelector, deleteSubmit}) {
        super(popupSelector);
        this._deleteSubmit = deleteSubmit;
        this._deleteCardBtn = this.popupSelector.querySelector('.popup__submit-delete');
    }

    open() {
        super.open();
        this.setEventListeners();
    }

    setEventListeners() {
        super.setEventListeners();
        this._deleteCardBtn.addEventListener('click', this._deleteSubmit);
    }


}