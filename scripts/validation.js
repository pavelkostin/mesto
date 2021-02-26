// show error
function showInputError(formElement, inputElement, errorMessage) {

    const formSectionElement = inputElement.closest('.popup__section');
    const errorElement = formSectionElement.querySelector('.popup__input-error'); 

    errorElement.textContent = errorMessage;                           
    errorElement.classList.add(validationArray.errorClass);  
    inputElement.classList.add(validationArray.inputErrorClass);
}

// hide error
function hideInputError(formElement, inputElement) {
    
    const formSectionElement = inputElement.closest('.popup__section');
    const errorElement = formSectionElement.querySelector('.popup__input-error'); 

    errorElement.textContent = '';
    errorElement.classList.remove(validationArray.errorClass);
    inputElement.classList.remove(validationArray.inputErrorClass);
}

// validity, hide, show, toggle

function checkInputValidity(formElement, inputElement) {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {                                         
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage);
    } else {                                               
        hideInputError(formElement, inputElement);           
    }
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
};

function toggleButtonState(inputList, buttonElement, {inactiveButtonClass}) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
};

// listeners
function setEventListeners(formElement, {inputSelector, submitButtonSelector}) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    inputList.forEach((inputSelector) => {                   
        inputSelector.addEventListener('input', () => {     
            checkInputValidity(formElement, inputSelector);
            toggleButtonState(inputList, buttonElement, validationArray);
        })
    })
}

//enable validation
function enableValidation({formSelector}) {
    const formElements = document.querySelectorAll(formSelector)
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
