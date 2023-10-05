//alert('JS carregado');

function calcular() {
    //alert('Função executada');

    //Seleção de DOM
    var etanol = document.querySelector('#etanol');
    var gasolina = document.querySelector('#gasolina');
    var result = document.querySelector('#result')

    //console.log(etanol.value);
    //console.log(gasolina.value);

    //verificar se etanol e gasolina não estão vazios
    if (etanol.value != '' && gasolina.value != '') {

        result.style.display = 'flex';

        var resultado = etanol.value / gasolina.value;
        //console.log(resultado);

        if (resultado <= 0.7) {
            //alert('Abasteça com Etanol');
            result.innerHTML = '<span>Abasteça com: <br> <strong>etanol</strong></span>';
        }

        else {
            //alert('Abasteça com Gasolina');
            result.innerHTML = '<span>Abasteça com: <br> <strong>Gasolina</strong></span>';
        }
    }

    else {
        alert('preencha os campos!');
    }


}