const ListaDeTeclas = document.querySelectorAll('.tecla')

for(let c = 0 ; c < ListaDeTeclas.length; c ++){
    function tocaSom(IdElementAudio){
        document.querySelector(IdElementAudio).play() 
    }

    const tecla = ListaDeTeclas[c]
    //constante em que o instrumento tocado sera sempre o do numero do contador e do atributo 1 (nome da tecla) do elemento da lista de teclas
    const instrumento = tecla.classList[1]
    const IdAudio = `#som_${instrumento}`


    tecla.onclick = function(){
        tocaSom(IdAudio)
    }

    tecla.onkeydown = function(){
        tecla.classList.add('ativa')
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}
