import Popup from "./Popup.js";


export default class PopupWithForm extends Popup {
    constructor({popupSelector, formSubmit}) {
        super(popupSelector)
        this._formSubmit = formSubmit
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
        this.popupSelector.querySelector('.popup__form').addEventListener('submit', (e)=>{
            e.preventDefault()
            this._formSubmit(this._getInputValues())
        })
    }

    close() {
        super.close()
        this.popupSelector.querySelector('.popup__form').reset()
    }
}


















/*
export default class PopupWithForm extends Popup {
    constructor({popupSelector, formSubmit}) {
        super(popupSelector)
        this._formSubmit = formSubmit
    }

    
    _getInputValues() {
        this._inputList = this.popupSelector.querySelectorAll('.popup__input')
        this._formValues = {}
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value
            return this._formValues
        });
    }

    setEventListeners(){
        super.setEventListeners()
        this.popupSelector.addEventListener('submit', (e)=>{
            e.preventDefault()

            this._formSubmit(this._getInputValues())
        })
    }

    close() {
        super.close();
        this.popupSelector.querySelector('.popup__form').reset()
    }


}

*/
/*
export default class PopupWithForm extends Popup {
    constructor({popupSelector, formSubmit}) {    
        super(popupSelector)
        this.formSubmit = formSubmit
    }

    _getInputValues() {
        this._inputList = this.popupSelector.querySelectorAll('.popup__input');
        this._formValues = {}
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value
        })
        return this._formValues
    }

    setEventListeners() {
        super.setEventListeners();

        this.popupSelector
        .querySelector('.popup__form')
        .addEventListener('submit', (e)=>{
            e.preventDefault()
            this.formSubmit(this._getInputValues())
        })
    }

    close() {
        super.close()
        this.popupSelector
        .querySelector('.popup__form').reset()
    }

}

*/


/*
export default class PopupWithForm extends Popup {
    constructor({popupSelector, formSubmit}) {
        super(popupSelector)
        this.formSubmit = formSubmit
    }

    _getInputValues() {
        this.inputList = document.querySelectorAll('.popup__input')
        this._formValues = {}
        this.inputList.forEach(input => {
            this._formValues[input.name] = input.value
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this.popupSelector.addEventListener('submit', (e)=>{
            e.preventDefault();
            this.formSubmit(this._getInputValues())
        })
    }

    close() {
        super.close()
        this.popupSelector.querySelector('.popup__form').reset()
    }


}

*/
/*
export default class PopupWithForm extends Popup {
    constructor({popupSelector, formSubmit}) {
        super(popupSelector);
        this.formSubmit = formSubmit;

    }

    _getInputValues() {
        this.inputList =  this.popupSelector.querySelectorAll('.popup__input')
        this._formValues = {}
        this.inputList.forEach(input => {
            
            this._formValues[input.name] = input.value
            
            console.log(input.value);
        });

        return this._formValues

    }

    setEventListeners() {
        super.setEventListeners()

        this.popupSelector.addEventListener('submit', evt => {
            evt.preventDefault();
            this.formSubmit(this._getInputValues())
        })
    }

    close() {
        super.close();
        this.popupSelector.querySelector('.popup__form').reset()
    }
}
*/
/*
export default class PopupWithForm extends Popup {
    constructor({popupSelector, formSubmit}) {
        super(popupSelector)
        this.formSubmit = formSubmit

    }

    _getInputValues() {

        this._inputList = this.popupSelector.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {

            this._formValues[input.name] = input.value;

        });
        return this._formValues
    }


    setEventListeners() {
        super.setEventListeners();

        this.popupSelector.querySelector('.popup__form').addEventListener('submit', (e)=>{

            e.preventDefault()
            
            this.formSubmit(this._getInputValues())
        })
    }

    close() {
        super.close();
        this.popupSelector.querySelector('.popup__form').reset()

    }


}

*/