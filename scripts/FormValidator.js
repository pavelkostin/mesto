export class FormValidator {
    constructor(data, formElement) {
        this._formElement = formElement;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._inactiveButtonClass = data.inactiveButtonClass;
    }

    // show error
    _showInputError(formElement, inputElement, errorMessage) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = errorMessage;
    }

    // hide error
    _hideInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = "";
    }

    // validity, hide, show, toggle
    _checkInputValidity(formElement, inputElement) {
        const isInputNotValid = !inputElement.validity.valid;

        if (isInputNotValid) {
            const errorMessage = inputElement.validationMessage;

            this._showInputError(formElement, inputElement, errorMessage);
        } else {
            this._hideInputError(formElement, inputElement);
        }
    }

    //Проверка на true/false стандартной валидации
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => !inputElement.validity.valid);
    }

    // Включение/выключение кнопки
    toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.setAttribute("disabled", true);
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.removeAttribute("disabled");
        }
    }

    // listeners
    _setEventListeners(formElement) {
        const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        const buttonElement = formElement.querySelector(this._submitButtonSelector);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(formElement, inputElement);
                this.toggleButtonState(inputList, buttonElement);
            });
        });
    }

    //enable validation
    enableValidation() {
        this._setEventListeners(this._formElement);
    }
}
