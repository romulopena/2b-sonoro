function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const teclas = listaDeTeclas[contador]; 
    const efeito = teclas.classList[1];  
    const idAudio = `#som_${efeito}`;  
    teclas.onclick = function(){      
        tocaSom(idAudio);       
    }
    teclas.onkeydown = function(evento){
        if(evento.code != 'Tab'){
          teclas.classList.add('ativa');  
        }
    }
    teclas.onkeyup = function(){
        teclas.classList.remove('ativa');
    }
}