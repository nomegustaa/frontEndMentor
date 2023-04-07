export default function validateCard(){
    const formInputAll = document.querySelectorAll('.form input')
    const messageError = document.querySelectorAll('.error')
    const btnSubmit = document.querySelector('[data-confirm]')
    const cards = document.querySelectorAll('p[data-card]')
    const form = document.querySelector('.form-all')
    const formSuccess = document.querySelector('.form-all-success')

    btnSubmit.addEventListener('click', checkInputs)
    formInputAll.forEach((input) => {
        input.addEventListener('keyup', () => {
            validateName(formInputAll[0], 0, cards[1]),
            formatCardNumber(formInputAll[1])
            validateCardNumber(formInputAll[1], 1, cards[0]),
            validateCardDate(formInputAll[2], formInputAll[3], 2, cards[2], cards[3]),
            validateCardCVC(formInputAll[4], 3, cards[4])
        })
    })    
    function formatCardNumber(input) {
        let cardNumber = input.value.replace(/\D/g, '').substring(0, 16);
        cardNumber = cardNumber !== '' ? cardNumber.match(/.{1,4}/g).join(' ') : '';
        input.value = cardNumber;
    }
    function checkInputs(e){
        e.preventDefault()
        let error = 0
        error += validateName(formInputAll[0], 0, cards[1]), 
        error += validateCardNumber(formInputAll[1], 1, cards[0]),
        error += validateCardDate(formInputAll[2], formInputAll[3], 2, cards[2], cards[3]),
        error += validateCardCVC(formInputAll[4], 3, cards[4])
        if(error === 0){
            form.classList.add('disable')
            formSuccess.classList.remove('active')
        }
    }
    function activeBorderError(input){
        input.classList.add('errorBorder')
    }
    function desableBorderError(input){
        input.classList.remove('errorBorder')
    }
    function activeMessageError(e){
        messageError[e].classList.add('active')
    }
    function desableMessageError(e){
        messageError[e].classList.remove('active')
    }
    function validateName(inputName, index, card){
        let textExpress = /^[a-zA-Z\s]*$/;
        if(inputName.value.trim() === ''){
            activeBorderError(inputName)
            activeMessageError(index)
            card.innerText = "Jane Appleseed"
            return 1
        }else if(!textExpress.test(inputName.value)){
            activeBorderError(inputName)
            activeMessageError(index)
            return 1
        }else{
            desableBorderError(inputName)
            desableMessageError(index)
            card.innerText = inputName.value
            return 0
        }
    }
    function validateCardNumber(inputCardNumber, index, card){
        if(inputCardNumber.value.trim() === ''){
            activeBorderError(inputCardNumber)
            activeMessageError(index)
            card.innerText = '0000 0000 0000 0000'
            return 1
        }else if(inputCardNumber.value.length <= 18){
            card.innerText = inputCardNumber.value
            activeBorderError(inputCardNumber)
            activeMessageError(index)
            return 1
        }
        else{
            desableBorderError(inputCardNumber)
            desableMessageError(index)
            card.innerText = inputCardNumber.value
            return 0
        }
    }
    function validateCardDate(inputDateMonth, inputDateYear, index, cardMonth, cardYear){
        let numberExpress = /^\d+$/
        let dataATual = new Date
        let currentYear = dataATual.getFullYear()
        currentYear = currentYear % 100
        if(inputDateMonth.value.trim() === '' ){
            activeBorderError(inputDateMonth)
            activeBorderError(inputDateYear)
            activeMessageError(index)
            cardMonth.innerText = inputDateMonth.value
            cardYear.innerText = inputDateYear.value
            cardMonth.innerText += '/'
            cardMonth.innerText = '00/'
            cardYear.innerText = '00'
            return 1
        }else if(!numberExpress.test(inputDateMonth.value, inputDateYear.value)){
            activeBorderError(inputDateMonth)
            activeBorderError(inputDateYear)
            activeMessageError(index)
            cardMonth.innerText = inputDateMonth.value
            cardYear.innerText = inputDateYear.value
            cardMonth.innerText += '/'
            return 1
        }else if(inputDateMonth.value >= 13 || inputDateMonth.value.length <= 0 || inputDateYear.value.length >= 3 || inputDateYear.value.length <= 1){
            activeBorderError(inputDateMonth)
            activeBorderError(inputDateYear)
            activeMessageError(index)
            cardMonth.innerText = inputDateMonth.value
            cardYear.innerText = inputDateYear.value
            cardMonth.innerText += '/'
            return 1
        }else if(inputDateYear.value < currentYear){
            cardMonth.innerText = inputDateMonth.value
            cardYear.innerText = inputDateYear.value
            cardMonth.innerText += '/'
            return 1
        }
        else{
            desableBorderError(inputDateMonth)
            desableBorderError(inputDateYear)
            desableMessageError(index)
            cardMonth.innerText = inputDateMonth.value
            cardYear.innerText = inputDateYear.value
            cardMonth.innerText += '/'
            return 0
        }
    }
    function validateCardCVC(inputCardCVC, index, card){
        let numberExpress = /^\d+$/
        if(inputCardCVC.value.trim() === ''){
            activeBorderError(inputCardCVC)
            activeMessageError(index)
            card.innerText = '000'
            return 1
        }else if(!numberExpress.test(inputCardCVC.value)){
            activeBorderError(inputCardCVC)
            activeMessageError(index)
            card.innerText = inputCardCVC.value
            return 1
        }else if(inputCardCVC.value.length >= 4 || inputCardCVC.value.length <= 2){
            activeBorderError(inputCardCVC)
            activeMessageError(index)
            card.innerText = inputCardCVC.value
            return 1
        }else{
            desableBorderError(inputCardCVC)
            desableMessageError(index)
            card.innerText = inputCardCVC.value
            return 0
        }
    }
}