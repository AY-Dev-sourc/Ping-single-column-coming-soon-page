const form = document.getElementById('form');
const emailInput = document.getElementById('emailInput');


function EmailValidation(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function SetError(Input,msg) {
    Input.classList.add('error');
    Input.classList.remove('success');

    const inputField = Input.parentElement;
    const message = inputField.querySelector('.message');

    message.innerHTML = msg;
}

function SetSuccess(Input) {
    Input.classList.add('success');
    Input.classList.remove('error');
    const inputField = Input.parentElement;
    const message = inputField.querySelector('.message');

    input.value = '';
    message.innerHTML = '';
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let value = emailInput.value;
    if (value === '') {
        SetError(emailInput,'Please provide valid email address');
    } else if(!EmailValidation(value)){
        SetError(emailInput,`The Email Is Faulse`);
    }
    else{
        SetSuccess(emailInput);
    }
});
