function saber_nome_medida_comparar(peso) {
    if(peso == 1000000000000000000000000){
        nome_medida = "Gigatonelada"
        return nome_medida
    }

    if(peso == 1000000000000000000000){
        nome_medida = "Megatonelada"
        return nome_medida
    }

    if(peso == 1000000000000000000){
        nome_medida = "Quilotonelada"
        return nome_medida
    }

    if(peso == 1000000000000000){
        nome_medida = "Tonelada"
        return nome_medida
    }

    if(peso == 1000000000000){
        nome_medida = "Quilograma"
        return nome_medida
    }

    if(peso == 100000000000){
        nome_medida = "Hectograma"
        return nome_medida
    }

    if(peso == 10000000000){
        nome_medida = "Decagrama"
        return nome_medida
    }

    if(peso == 1000000000){
        nome_medida = "Grama"
        return nome_medida
    }

    if(peso == 100000000){
        nome_medida = "Decigrama"
        return nome_medida
    }

    if(peso == 10000000){
        nome_medida = "Centigrama"
        return nome_medida
    }

    if(peso == 1000000){
        nome_medida = "Miligrama"
        return nome_medida
    }

    if(peso == 1000){
        nome_medida = "Micrograma"
        return nome_medida
    }

    if(peso == 1){
        nome_medida = "Nanograma"
        return nome_medida
    }
}

function saber_nome_medida_comparacao(peso) {
    if(peso == 1000000000000000000000000){
        nome_medida_2 = "Gigatonelada"
        return nome_medida_2
    }

    if(peso == 1000000000000000000000){
        nome_medida_2 = "Megatonelada"
        return nome_medida_2
    }

    if(peso == 1000000000000000000){
        nome_medida_2 = "Quilotonelada"
        return nome_medida
    }

    if(peso == 1000000000000000){
        nome_medida_2 = "Tonelada"
        return nome_medida
    }

    if(peso == 1000000000000){
        nome_medida_2 = "Quilograma"
        return nome_medida_2
    }

    if(peso == 100000000000){
        nome_medida_2 = "Hectograma"
        return nome_medida_2
    }

    if(peso == 10000000000){
        nome_medida_2 = "Decagrama"
        return nome_medida_2
    }

    if(peso == 1000000000){
        nome_medida_2 = "Grama"
        return nome_medida_2
    }

    if(peso == 100000000){
        nome_medida_2 = "Decigrama"
        return nome_medida_2
    }

    if(peso == 10000000){
        nome_medida = "Centigrama"
        return nome_medida_2
    }

    if(peso == 1000000){
        nome_medida_2 = "Miligrama"
        return nome_medida_2
    }

    if(peso == 1000){
        nome_medida_2 = "Micrograma"
        return nome_medida_2
    }

    if(peso == 1){
        nome_medida_2 = "Nanograma"
        return nome_medida_2
    }
} 

function converterUnidadesDePeso() {
    let valor_comparar = document.getElementById('input-um').value;
    let valor_medida_comparar = document.getElementById('select-medida-para-comparar').value;
    let valor_medida_comparacao = document.getElementById('select-medida-para-comparacao').value;

    valor_comparar = valor_comparar.replace(',', '.')

    if (valor_comparar != '') {
        let result = valor_comparar * valor_medida_comparar / valor_medida_comparacao
        let tamanho_result = result.toString().length;
        if (tamanho_result >= 12 & result > 1) {
            result = result.toExponential(5)
        }

        saber_nome_medida_comparar(valor_medida_comparar)
        saber_nome_medida_comparacao(valor_medida_comparacao)

        if (valor_comparar != 1) {
            nome_medida = `${nome_medida}s`
        }

        if (result != 1) {
            nome_medida_2 = `${nome_medida_2}s`
        }

        if (isNaN(result)) {
            let div_result = document.getElementById('div-para-result')
            div_result.innerHTML = '<h1 class=result id=result-error><h1>'
            document.getElementById('result-error').innerHTML = `ERRO! POR FAVOR FORNEÇA UM NÚMERO VÁLIDO!`
            document.getElementById('input-dois').value = 'INVÁLIDO!';
        } else {
            result = result.toString()
            valor_comparar = valor_comparar.replace('.', ',')
            result = result.replace('.', ',')
            let div_result = document.getElementById('div-para-result')
            div_result.innerHTML = '<h1 class=result id=result><h1>'
            document.getElementById('input-dois').value = result;
            document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} ${nome_medida} é igual a ${result} ${nome_medida_2}`
        }

    } else {
        document.getElementById('input-dois').value = '';
        result = document.getElementById('result');
        result_error =  document.getElementById('result-error');
        if (result) {
            result.parentNode.removeChild(result);
        }
        else {
            result_error.parentNode.removeChild(result_error);
        }
        
        
    }
}

document.getElementById("input-um").onkeyup = function() {
    converterUnidadesDePeso()
}

document.getElementById('select-medida-para-comparar').onchange = function() {
    converterUnidadesDePeso()
}

document.getElementById("select-medida-para-comparacao").onchange = function() {
    converterUnidadesDePeso()
}
