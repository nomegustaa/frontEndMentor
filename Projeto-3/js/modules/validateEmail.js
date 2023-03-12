export default function initaAbrirModal(){
    const campoEmail = document.querySelector('[data-input]')
    const button = document.querySelector('[data-submit]')
    const error = document.querySelector('[data-error]')
    const iconError = document.querySelector('[data-icon-error]')
    button.addEventListener('click', initValidation)
    // Criando expressão regular para validar formulário
    // Exemplo: teste@teste.com
    function initValidateEmail(email){
        const expression = /\S+@\S+\.\S+/;
        return expression.test(email.value)
    }
    function initValidation(){
        if(campoEmail.value === '' || campoEmail.value.lenght){
            error.classList.add('active')
            iconError.classList.add('active')
        }else if(initValidateEmail(campoEmail) === false){
            error.classList.add('active')
            iconError.classList.add('active')
        }else{
            Swal.fire({
                icon: 'success',
                iconColor: '##11ff00',
                showCloseButton: true,
                showConfirmButton: false,
                title: 'E-mail enviado com sucesso',
            })
        }
    }
}

