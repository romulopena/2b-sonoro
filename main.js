//Declaração/criação da função 
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//criação da repetição "while" trocado pelo "for" com variavel,condição e incremento
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const teclas = listaDeTeclas[contador]; //guarda o contador da lista
    const efeito = teclas.classList[1];  //chama o 2º item classe individual do som
    const idAudio = `#som_${efeito}`;  //utiliza a junção template string ${ }
    teclas.onclick = function(){      //função anônima auxiliar para chamar tocaSom
        tocaSom(idAudio);        //chamada da função tocaSom com parâmetro idAudio
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