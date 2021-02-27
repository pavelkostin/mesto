// show error
function showInputError(formElement, inputElement, errorMessage, validationArray) {

    const formSectionElement = inputElement.closest(validationArray.popupSection);
    const errorElement = formSectionElement.querySelector(validationArray.popupInputError); 

    errorElement.textContent = errorMessage;                           
    errorElement.classList.add(validationArray.errorClass);  
    inputElement.classList.add(validationArray.inputErrorClass);
}

// hide error
function hideInputError(formElement, inputElement, validationArray) {
    
    const formSectionElement = inputElement.closest(validationArray.popupSection);
    const errorElement = formSectionElement.querySelector(validationArray.popupInputError); 

    errorElement.textContent = '';
    errorElement.classList.remove(validationArray.errorClass);
    inputElement.classList.remove(validationArray.inputErrorClass);
}

// validity, hide, show, toggle

function checkInputValidity(formElement, inputElement, validationArray) {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {                                         
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage, validationArray);
    } else {                                               
        hideInputError(formElement, inputElement, validationArray);           
    }
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
};

function toggleButtonState(inputList, buttonElement, validationArray) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(validationArray.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(validationArray.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
};

// listeners
function setEventListeners(formElement, validationArray) {
    const inputList = Array.from(formElement.querySelectorAll(validationArray.inputSelector));
    const buttonElement = formElement.querySelector(validationArray.submitButtonSelector);

    inputList.forEach((inputSelector) => {                   
        inputSelector.addEventListener('input', () => {     
            checkInputValidity(formElement, inputSelector, validationArray);
            toggleButtonState(inputList, buttonElement, validationArray);
        })
    })
}

//enable validation
function enableValidation(validationArray) {
    const formElements = document.querySelectorAll(validationArray.formSelector)
    const formList = Array.from(formElements);                            
    function formListIterator(formElement) {                           
        function submitFormHandler(event) {                          
            event.preventDefault();
        };
        formElement.addEventListener('submit', submitFormHandler);   
        setEventListeners(formElement, validationArray);                             
    };
    formList.forEach(formListIterator);                         
};



enableValidation(validationArray);
