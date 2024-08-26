var elementosProgramas = document.querySelectorAll('.programa')

elementosProgramas.forEach(function(programa){
    programa.addEventListener('click', function(){
        programa.classList.toggle('ativa')
    })
})