const btnRef = document.querySelector('#showCode');
const codeRef = document.querySelector('.show-code__code');

function toggleText(){
    if (btnRef.innerText === 'POKA TEKST BYKU'){
        btnRef.innerText = 'SCHOWAJ KOD';
    }else {
        btnRef.innerText = 'POKA TEKST BYKU'
    }
}

btnRef.addEventListener('click', function(){
    toggleText();
    codeRef.classList.toggle('show-code__code--hidden');
})
