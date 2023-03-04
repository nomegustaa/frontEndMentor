export default function initShowResult(){
    const numbersSelect = document.querySelectorAll('[data-select-number] span')
    const btnSubmit = document.querySelector('[data-input-submit]')
    const result = document.querySelector('.result')
    const containerPopUp = document.querySelector('.container-popUp')
    const containerResult = document.querySelector('.container-result')

    function SelectNumber(index){
        numbersSelect.forEach((section) =>{
            section.classList.remove('ativo')
        })
        numbersSelect[index].classList.add('ativo')
    }

    numbersSelect.forEach((number, index) =>{
        number.addEventListener('click', () =>{
            SelectNumber(index)
        })
    })

    numbersSelect.forEach((number) =>{
        number.addEventListener('click', () => {
            result.innerHTML = ` ${number.innerHTML} `
        })
    })

    function showResult(){
        containerResult.classList.remove('hidden')
        containerPopUp.classList.add('hidden')
    }
    btnSubmit.addEventListener('click', showResult)
}