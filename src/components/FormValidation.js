export default class FormValidator {
    constructor(data, formElement) {
        this._formElement = formElement;

        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._inactiveButtonClass = data.inactiveButtonClass;
    }

        // listeners
        _setEventListeners() {
            const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
            const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    
            this.toggleButtonState(inputList, buttonElement);
    
            inputList.forEach((inputElement) => {
    
                inputElement.addEventListener("input", () => {
                    this._checkInputValidity(inputElement);
                    this.toggleButtonState(inputList, buttonElement);
                });
            });
        }
    
        //enable validation
        enableValidation() {
            this._setEventListeners();
        }

    // validity, hide, show, toggle
    _checkInputValidity(inputElement) {
        const isInputNotValid = !inputElement.validity.valid;

        if (isInputNotValid) {
            const errorMessage = inputElement.validationMessage;

            this._showInputError(inputElement, errorMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    //Проверка на true/false стандартной валидации
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => !inputElement.validity.valid);
    }

    // Переключение кнопки
    toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.setAttribute("disabled", true);
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.removeAttribute("disabled");
        }
    }    

    // show error
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = errorMessage;
    }

    // hide error
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = "";
    }

//очистка ошибок:

resetErrorInput() {

    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector)); 
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    inputList.forEach((inputElement) => {                                 
        this._hideInputError(inputElement);           
    });
    
    this.toggleButtonState(inputList, buttonElement);                      
}


}