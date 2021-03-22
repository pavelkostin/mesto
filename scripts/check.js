popupEditBtn.addEventListener("click", () => {

    profileValidation.resetErrorInput();
    popupEditForm.reset();
    openPopup(popupEdit);

})


popupAddBtn.addEventListener("click", () => {

    placeValidation.resetErrorInput();
    popupAddForm.reset();
    openPopup(popupAdd)

});


//

const profileValidation = new FormValidator(validationArray, popupEditForm);
profileValidation.enableValidation();

const placeValidation = new FormValidator(validationArray, popupAddForm);
placeValidation.enableValidation();

//

//очистка ошибок:

resetErrorInput() {

    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector)); 
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    inputList.forEach((inputElement) => {                                 
        this._hideInputError(inputElement);
        this.toggleButtonState(inputList, buttonElement);              
    });

    this.toggleButtonState(inputList, buttonElement);                      
}

//

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