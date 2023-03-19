export default function initValidateForm(){
    const form = document.querySelectorAll('#form input')
    const inputEmail = form[2]
    const error = document.querySelectorAll('.error')
    const btnSubmit = document.querySelector('.btnSubmit')
    btnSubmit.addEventListener('click', validateForm)
    function validateForm(event){
        event.preventDefault()
        checkInputs(form)
        validateEmail(form[2])
    }
    function checkInputs(formulario){
        formulario.forEach((input, index) => {
            if(input.value.trim() === ''){
                input.placeholder = ""
                form[2].placeholder = "email@exemple.com";
                input.classList.add('active')
                input.classList.add('borderError')
                activeError(index)
                
            }else{
                disableError(index)
                input.classList.remove('active')
                input.classList.remove('borderError')
            }
        })
    }
    function activeError(index){
        error[index].classList.add('active')
    }

    function disableError(index){
        error[index].classList.remove('active')
    }
    function expressionEmail(email){
        // Criando expressão regular para validar formulário
        // Exemplo: teste@teste.com
        const expression = /\S+@\S+\.\S+/;
        return expression.test(email.value)
    }
    function validateEmail(email){
        if(expressionEmail(email) === false){
            inputEmail.placeholder = "email@exemple.com";
            inputEmail.classList.add('borderError')
            inputEmail.classList.add('active')
            activeError(2)
        }else{
            disableError(2)
        }
    }
}