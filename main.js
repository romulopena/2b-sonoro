//Declaração/criação da função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
//chamada ou invocação da função tocaSomPom ao clicar no botão
//document.querySelector('.tecla_pom').onclick = tocaSomPom;

//Declaração/criação da função tocaSomClap
function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
//chamada ou invocação da função tocaSomClap ao clicar no botão
document.querySelector('.tecla_clap').onclick = tocaSomClap;

//criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//chamando a constante listaDeTeclas e o índice "0" do somPom
listaDeTeclas[0].onclick = tocaSomPom;