const passwordInput = document.querySelector ('#input-password')

//iconos
const showPassword = document.querySelector('#show-password')
const   hidePassword = document.querySelector('hide-password')

// Boton
const btnStatePassword = document.querySelector('.btn-hide-show')

btnStatePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password'){
        passwordInput.type = 'text'
        showPassword.style.display = 'block'
        hidePassword.style.display = 'none'
    } else {
        passwordInput.type = 'password'
        showPassword.style.display = 'none'
        hidePassword.style.display = 'block'
    }
});