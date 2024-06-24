const btnsRef = document.querySelectorAll('.show-code__btn');
function toggleText(btnRef){
    if (btnRef.value === 'Poka tekst byku'){
        btnRef.value = 'Schowaj tekst';
    }else {
        btnRef.value = 'Poka tekst byku'
    }
}

btnsRef.forEach(function(btnRef){
    btnRef.addEventListener('click', function (){
        toggleText(btnRef);
        btnRef.nextElementSibling.classList.toggle('show-code__code--hidden')
    })
})
