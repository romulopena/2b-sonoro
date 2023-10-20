//Declaração/criação da função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
//chamada ou invocação da função tocaSomPom ao clicar no botão
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//Declaração/criação da função tocaSomClap
function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
//chamada ou invocação da função tocaSomClap ao clicar no botão
document.querySelector('.tecla_clap').onclick = tocaSomClap;
