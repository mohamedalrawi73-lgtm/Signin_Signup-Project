const password = document.querySelector('input[name="password"]');
const confirm_password = document.querySelector('input[name="confirm_password"]');

function validatePassword(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

const darkModeToggle = document.querySelector('input[value="dark-mode"]');

darkModeToggle.addEventListener('change', function() {
    if(this.checked) {
        document.body.style.backgroundColor = 'grey';
    } else {
        document.body.style.backgroundColor = 'white';
    }
});