function saber_nome_medida_comparacao(area) { 
    if (area == 1000000000000000000000000) {
        nome_medida_2 = 'Quilômetro Quadrado'
        return nome_medida_2
    }
    if (area == 10000000000000000000000) {
        nome_medida_2 = 'Hectare'
        return nome_medida_2
    }
    if (area == 100000000000000000000) {
        nome_medida_2 = 'Are'
        return nome_medida_2
    }
    if (area == 1000000000000000000) {
        nome_medida_2 = 'Metro Quadrado'
        return nome_medida_2
    }
    if (area== 10000000000000000) {
        nome_medida_2 = 'Decímetro Quadrado'
        return nome_medida_2
    }
    if (area == 100000000000000) {
        nome_medida_2 = 'Centímetro Quadrado'
        return nome_medida_2
    }
    if (area == 1000000000000) {
        nome_medida_2 = 'Milímetro Quadrado'
        return nome_medida_2
    }
    if (area == 1000000) {
        nome_medida_2 = 'Micrómetro Quadrado'
        return nome_medida_2
    }
    if (area == 1) {
        nome_medida_2 = 'Nanômetro Quadrado'
        return nome_medida_2
    }
}

function saber_nome_medida_comparar(area) { 
    if (area == 1000000000000000000000000) {
        nome_medida = 'Quilômetro Quadrado'
        return nome_medida
    }
    if (area == 10000000000000000000000) {
        nome_medida = 'Hectare'
        return nome_medida
    }
    if (area == 100000000000000000000) {
        nome_medida = 'Are'
        return nome_medida
    }
    if (area == 1000000000000000000) {
        nome_medida = 'Metro Quadrado'
        return nome_medida
    }
    if (area== 10000000000000000) {
        nome_medida = 'Decimetro Quadrado'
        return nome_medida
    }
    if (area == 100000000000000) {
        nome_medida = 'Centímetro Quadrado'
        return nome_medida
    }
    if (area == 1000000000000) {
        nome_medida = 'Milímetro Quadrado'
        return nome_medida
    }
    if (area == 1000000) {
        nome_medida = 'Micrómetro Quadrado'
        return nome_medida
    }
    if (area == 1) {
        nome_medida = 'Nanômetro Quadrado'
        return nome_medida
    }
}

function converterUnidadesDeArea() {
    let valor_comparar = document.getElementById('input-um').value;
    let valor_medida_comparar = document.getElementById('select-medida-para-comparar').value;
    let valor_medida_comparacao = document.getElementById('select-medida-para-comparacao').value;

    valor_comparar = valor_comparar.replace(',', '.')

    if (valor_comparar != '') {
        let result = valor_comparar * valor_medida_comparar / valor_medida_comparacao
        let tamanho_result = result.toString().length;
        if (tamanho_result >= 12) {
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
    converterUnidadesDeArea()
}

document.getElementById('select-medida-para-comparar').onchange = function() {
    converterUnidadesDeArea()
}

document.getElementById("select-medida-para-comparacao").onchange = function() {
    converterUnidadesDeArea()
}
