/**
 * comandos para funções dos elementos da página
 * 
 */


function numerosInteiros(evt) {

    // Função impeditiva de números decimais para os valores
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}