import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({selector, formHandler}) {
        super(selector);
        //this._form = this._selector.querySelector('.popup');
        this.handleSubmit = formHandler;
    }

    _getInputValues() {
        this._inputList = this._selector.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {this._formValues[input.name] = input.value});
        return this._formValues;
    }


    setEventListeners() {
        super.setEventListeners();
        this._selector.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleSubmit(this._getInputValues());
        })
    }

    close() {
        super.close();
        this._selector.querySelector('.popup__form').reset();
        
    }

}