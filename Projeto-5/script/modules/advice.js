export default function initAdviceRandom(){
    openModal()
    const advice = document.querySelector('.container-advice p')
    const adviceId = document.querySelector('.advice-p')
    const dice = document.querySelector('.div-dice')
    const iconInfo = document.querySelector('.icon-info')
    const urlConselho = 'https://api.adviceslip.com/advice'
    dice.addEventListener('click', adviceRandom)
    iconInfo.addEventListener('click', openModal)
    function adviceRandom(){
        fetch(urlConselho)
        .then(r => r.json())
        .then((conselho) => {
            adviceId.innerHTML = `Advice# ${conselho.slip.id}`
            advice.innerHTML = `"${conselho.slip.advice}"`
        })
    }
    function openModal(){
        Swal.fire({
            width: 650,
            title: 'Bem-vindo ao gerador de conselho',
            html:'<strong>Observação:</strong> <span>o conselho é armazenado em cache por 2 segundos. Qualquer solicitação repetida dentro de 2 segundos retornará o mesmo conselho</span>',
            showConfirmButton: false,
            showCloseButton: true
        })
    }
}