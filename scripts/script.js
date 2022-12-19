// * Card Name
const nameInput = document.getElementById('name-input');
const nameCard = document.getElementById('name-card');
const nameError = document.getElementById('name-error');

// * Card Number
const numberInput = document.getElementById('number-input');
const numberCard = document.getElementById('number-card');
const numberError = document.getElementById('number-error');

// * CVC
const cvcInput = document.getElementById('cvc-input');
const cvcCard = document.getElementById('cvc-card');
const cvcError = document.getElementById('cvc-error');

// * Month
const monthInput = document.getElementById('month-input');
const monthCard = document.getElementById('month-card');
const monthError = document.getElementById('month-error');

// * Year
const yearInput = document.getElementById('year-input');
const yearCard = document.getElementById('year-card');
const yearError = document.getElementById('year-error');


// ! Ingreso dinámico del nombre
nameInput.addEventListener('input', () => {
    if(nameInput.value == '') {
        nameCard.innerText = 'Jane Appleseed';
    } else {
        nameCard.innerText = nameInput.value;
    }
})

// ! Ingreso dinámico del número
numberInput.addEventListener('input', (event) => {

    // ? Actualiza gráficamente la tarjeta
    numberCard.innerText = numberInput.value.toUpperCase();

    // ? Valida que haya una letra
    let rexExp = /[A-z]/g;

    if(rexExp.test(numberInput.value)) {
        numberError.innerText = 'Wrong format, numbers only';

    } else {
        numberInput.value = event.target.value
            .replace(/\s/g, '')
            .replace(/([0-9]{4})/g, '$1 ')
            .trim()
        
        numberError.innerText = '';
    }
    
    // ? Muestra los 0s por defecto cuando no se ha ingresado nada
    if(numberInput.value === '') {
        numberCard.innerText = '0000 0000 0000 0000';
    }
})

// ! Ingreso dinámico del mes
monthInput.addEventListener('input', () => {
    monthCard.innerText = monthInput.value;

    if(monthInput.value === '') {
        monthCard.innerText = '00';
    }
})

// ! Ingreso dinámico del año
yearInput.addEventListener('input', () => {
    yearCard.innerText = yearInput.value;
})

// ! Ingreso dinámico del CVC
cvcInput.addEventListener('input', () => {
    cvcCard.innerText = cvcInput.value;
})

// ? Button Submit
const submit = document.getElementById('submit');

let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let cvcValidation = false;

// Secciones Formulario y Thanks
const containerDatos = document.getElementById('container_form-datos');
const success = document.getElementById('success');


submit.addEventListener('submit', (event) => {
    // console.log(event)
    event.preventDefault();
    
    // ! Validate Name
    if( verifyIsFilled(nameInput, nameError) ) {
        nameValidation = true;
    } else {
        nameValidation = false;
    }
    
    // ! Validate Number
    if( verifyIsFilled(numberInput, numberError) ) {
        if(numberInput.value.length == 19) {
            showError(numberInput, numberError, '', false);
            numberValidation = true;
        } else {
            showError(numberInput, numberError, 'Wrong Number');
            numberValidation = false;
        }
    }
    
    // ! Validate Month
    if( verifyIsFilled(monthInput, monthError) ) {
        if( parseInt(monthInput.value) > 0 && parseInt(monthInput.value) <= 12 ) {
            showError(monthInput, monthError, '', false);
            monthValidation = true;
        } else {
            showError(monthInput, monthError, 'Wrong Month')
            monthValidation = false;
        }
    }
    
    // ! Validate Year
    if( verifyIsFilled(yearInput, yearError) ) {
        if(parseInt(yearInput.value) > 22 && parseInt(yearInput.value) <= 27) {
            showError(yearInput, yearError, '', false);
            yearValidation = true;
        } else {
            showError(yearInput, yearError, 'Wrong Year')
            yearValidation = false; 
        }
    }

    // ! Validate CVC
    if( verifyIsFilled(cvcInput, cvcError) ) {
        if( cvcInput.value.length == 3 ) {
            showError(cvcInput, cvcError, '', false);
            cvcValidation = true;
        } else {
            showError(cvcInput, cvcError, 'Wrong CVC');
            cvcValidation = false;
        }
    }

    if(
        nameValidation == true &&
        numberValidation == true &&
        monthValidation == true &&
        yearValidation == true &&
        cvcValidation == true
    ) {
        console.log('Toko ok')
        submit.style.display = 'none';
        success.style.display = 'flex';
    }
})

const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', () => {
    submit.style.display = 'block'
    success.style.display = 'none';
})

// ? Función que muestra un error por pantalla
function showError(divInput, divError, msgError, show = true) {
    if(show) {
        divError.innerText = msgError;
        divInput.style.borderColor = 'hsl(0, 100%, 66%)';
        divError.classList.add('alert')
    } else {
        divError.innerText = msgError;
        divInput.style.borderColor = 'hsl(270, 3%, 87%)';
    }
}

// ? Función que verifica si esta lleno
function verifyIsFilled(divInput, divError) {
    if(divInput.value.length > 0) {
        showError(divInput, divError, "", false);
        return true;
    } else {
        showError(divInput, divError, "Can't be blank");
        return false;
    }
}

function validateLetters(input, divError) {
    let rexExp = /[A-z]/g;

    if(rexExp.test(input.value)) {
        showError(input, divError, 'Wrong format, numbers only');
    } else {
        showError(input, divError, '', false);
    }
}