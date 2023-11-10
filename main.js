//Declaração/criação da função 
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const teclas = listaDeTeclas[contador];
    const efeito = teclas.classList[1];
    const idAudio = `#som_${efeito}`;
    teclas.onclick = function(){
        tocaSom(idAudio);
    }
}