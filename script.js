const loginForm = document.querySelector('#loginForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const age = document.querySelector('#age');
const errorContainers = document.querySelectorAll('.errorMessage');

const validateForm = () => {
    let isFormValid = true;
    
    errorContainers.forEach(container => container.textContent = '');

    if(firstName.value === '' || firstName.value === null) {
        isFormValid = false;
        errorContainers[0].textContent = '*Firstname can\'t be empty.';
        firstName.classList.add('input-error');
    } else {
        firstName.classList.add('input-success');
    }

    if(lastName.value === '' || lastName.value === null) {
        isFormValid = false;
        errorContainers[1].textContent = '*Lastname can\'t be empty.';
        lastName.classList.add('input-error');
    } else {
        lastName.classList.add('input-success');
    }

    if(age.value < 18 || age.value === null) {
        isFormValid = false;
        errorContainers[2].textContent = '*Age must be 18 years old and above and can\'t be empty.';
        age.classList.add('input-error');
    } else {
        age.classList.add('input-success');
    }

    return isFormValid;
}

[firstName, lastName, age].forEach((inputElement) => {
    inputElement.addEventListener('input', validateForm);
});

loginForm.addEventListener('submit', (e) => {
    if(!validateForm()) {
        e.preventDefault();
    } else {
        alert('Form Submitted');
    }
});






