function saber_nome_medida_comparacao(area) { 
    if (area == 1000000000000000000000000000000000000) {
        nome_medida_2 = 'Quilômetro Cubico'
        return nome_medida_2
    }
    if (area == 1000000000000000000000000000000000) {
        nome_medida_2 = 'Hectómetro Cubico'
        return nome_medida_2
    }
    if (area == 1000000000000000000000000000000) {
        nome_medida_2 = 'Decâmetro Cubico'
        return nome_medida_2
    }
    if (area == 1000000000000000000000000000) {
        nome_medida_2 = 'Metro Cubico'
        return nome_medida_2
    }
    if (area== 1000000000000000000000000) {
        nome_medida_2 = 'Decimetro Cubico'
        return nome_medida_2
    }
    if (area == 1000000000000000000000) {
        nome_medida_2 = 'Centímetro Cubico'
        return nome_medida_2
    }
    if (area == 1000000000000000000) {
        nome_medida_2 = 'Milímetro Cubico'
        return nome_medida_2
    }
    if (area == 1000000000) {
        nome_medida_2 = 'Micrómetro Cubico'
        return nome_medida_2
    }
    if (area == 1) {
        nome_medida_2 = 'Nanômetro Cubico'
        return nome_medida_2
    }
}

function saber_nome_medida_comparar(area) { 
    if (area == 1000000000000000000000000000000000000) {
        nome_medida = 'Quilômetro Cubico'
        return nome_medida
    }
    if (area == 1000000000000000000000000000000000) {
        nome_medida = 'Hectómetro Cubico'
        return nome_medida
    }
    if (area == 1000000000000000000000000000000) {
        nome_medida = 'Decâmetro Cubico'
        return nome_medida
    }
    if (area == 1000000000000000000000000000) {
        nome_medida = 'Metro Cubico'
        return nome_medida
    }
    if (area== 1000000000000000000000000) {
        nome_medida = 'Decimetro Cubico'
        return nome_medida
    }
    if (area == 1000000000000000000000) {
        nome_medida = 'Centímetro Cubico'
        return nome_medida
    }
    if (area == 1000000000000000000) {
        nome_medida = 'Milímetro Cubico'
        return nome_medida
    }
    if (area == 1000000000) {
        nome_medida = 'Micrómetro Cubico'
        return nome_medida
    }
    if (area == 1) {
        nome_medida = 'Nanômetro Cubico'
        return nome_medida
    }
}

function converterUnidadesDeVolume() {
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
    converterUnidadesDeVolume()
}

document.getElementById('select-medida-para-comparar').onchange = function() {
    converterUnidadesDeVolume()
}

document.getElementById("select-medida-para-comparacao").onchange = function() {
    converterUnidadesDeVolume()
}
