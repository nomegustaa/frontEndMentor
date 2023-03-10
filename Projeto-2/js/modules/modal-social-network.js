export default function initaAbrirModal(){
    const modal = document.querySelector('.modal-shared')
    const iconButton = document.querySelector('.div-icon')
    iconButton.addEventListener('click', initaAbrirModal)
    function initaAbrirModal(){
        modal.classList.toggle('ativo')
    }
}