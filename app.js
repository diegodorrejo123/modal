var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalCloseBtn = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
})
modalCloseBtn.addEventListener('click', () => {
    modalBg.classList.remove('bg-active');
})