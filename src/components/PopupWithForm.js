import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popup, formHandler}) {
        super(popup);
        this.handleSubmit = formHandler;
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {this._formValues[input.name] = input.value});
        return this._formValues;
    }


    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleSubmit(this._getInputValues());
        })
    }

    close() {
        super.close();
        this._popup.querySelector('.popup__form').reset();
        
    }

}