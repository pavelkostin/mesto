// show error
function showInputError(formElement, inputElement, errorMessage, {popupSection, popupInputError}) {

    const formSectionElement = inputElement.closest(popupSection);
    const errorElement = formSectionElement.querySelector(popupInputError); 

    errorElement.textContent = errorMessage;                           
    errorElement.classList.add(validationArray.errorClass);  
    inputElement.classList.add(validationArray.inputErrorClass);
}

// hide error
function hideInputError(formElement, inputElement, {popupSection, popupInputError}) {
    
    const formSectionElement = inputElement.closest(popupSection);
    const errorElement = formSectionElement.querySelector(popupInputError); 

    errorElement.textContent = '';
    errorElement.classList.remove(validationArray.errorClass);
    inputElement.classList.remove(validationArray.inputErrorClass);
}

// validity, hide, show, toggle

function checkInputValidity(formElement, inputElement, {popupSection, popupInputError}) {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {                                         
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage, {popupSection, popupInputError});
    } else {                                               
        hideInputError(formElement, inputElement, {popupSection, popupInputError});           
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
function setEventListeners(formElement, {inputSelector, submitButtonSelector, popupSection, popupInputError}) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    inputList.forEach((inputSelector) => {                   
        inputSelector.addEventListener('input', () => {     
            checkInputValidity(formElement, inputSelector, {popupSection, popupInputError});
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
