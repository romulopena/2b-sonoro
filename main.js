//Declaração/criação da função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
//chamada ou invocação da função tocaSomPom ao clicar no botão
document.querySelector('.tecla_pom').onclick = tocaSomPom;


