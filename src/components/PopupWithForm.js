import Popup from "./Popup.js";


export default class PopupWithForm extends Popup {
    constructor({popupSelector, formSubmit}) {
        super(popupSelector)
        this._formSubmit = formSubmit
        this._popupForm = this.popupSelector.querySelector('.popup__form')
        
    }

    _getInputValues() {
        this._inputList = this.popupSelector.querySelectorAll('.popup__input')
        this._formValues = {}
        this._inputList.forEach(input =>{
            this._formValues[input.name] = input.value
        })
        return this._formValues
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener('submit', (e)=>{
            e.preventDefault()
            this._formSubmit(this._getInputValues())
        })
    }

    close() {
        super.close()
        this._popupForm.reset()
    }
}
