function saber_nome_medida_comparar(medida) {
    if (medida == 1000000) {
        nome_medida_2 = 'Quilômetro'
        return nome_medida_2
    }
    if (medida == 100000) {
        nome_medida_2 = 'Héctométro'
        return nome_medida_2
    }
    if (medida == 10000) {
        nome_medida_2 = 'Decâmetro'
        return nome_medida_2
    }
    if (medida == 1000) {
        nome_medida_2 = 'Metro'
        return nome_medida_2
    }
    if (medida == 100) {
        nome_medida_2 = 'Decimetro'
        return nome_medida_2
    }
    if (medida == 10) {
        nome_medida_2 = 'Centímetro'
        return nome_medida_2
    }
    if (medida == 1) {
        nome_medida_2 = 'Milímetro'
        return nome_medida_2
    }
}

function saber_nome_medida_comparacao(medida) {
    if (medida == 1000000) {
        nome_medida = 'Quilômetro'
        return nome_medida
    }
    if (medida == 100000) {
        nome_medida = 'Héctométro'
        return nome_medida
    }
    if (medida == 10000) {
        nome_medida = 'Decâmetro'
        return nome_medida
    }
    if (medida == 1000) {
        nome_medida = 'Metro'
        return nome_medida
    }
    if (medida == 100) {
        nome_medida = 'Decimetro'
        return nome_medida
    }
    if (medida == 10) {
        nome_medida = 'Centímetro'
        return nome_medida
    }
    if (medida == 1) {
        nome_medida = 'Milímetro'
        return nome_medida
    }
}


function converterUnidadesDeDistancia() {
    let medida_para_comparar = document.getElementById('select-medida-para-comparar').value;
    

    let medida_para_comparacao = document.getElementById('select-medida-para-comparacao').value;
    let quantidade_medida_comparar = document.getElementById('input-um').value;
    quantidade_medida_comparar = quantidade_medida_comparar.replace(',', '.')
    if (quantidade_medida_comparar != ''){
        result = medida_para_comparar*quantidade_medida_comparar/medida_para_comparacao
        tamanho_result = result.toString().length;
        console.log(result)
        if (tamanho_result >= 12){
            result = result.toExponential(4)
        }
        
        saber_nome_medida_comparar(medida_para_comparar)
        saber_nome_medida_comparacao(medida_para_comparacao)

        if (result > 1) {
            nome_medida_2 = nome_medida_2 += 's'
        }
       
        if (isNaN(result)) {

            let div_result = document.getElementById('div-para-result')
            div_result.innerHTML = '<h1 class=result id=result-error><h1>'
            document.getElementById('result-error').innerHTML = `ERRO! POR FAVOR FORNEÇA UM NÚMERO VÁLIDO!`
            document.getElementById('input-dois').value = 'INVÁLIDO!';
        } else {
            result = result.toString()
            quantidade_medida_comparar = quantidade_medida_comparar.replace('.', ',')
            result = result.replace('.', ',')
            let div_result = document.getElementById('div-para-result')
            div_result.innerHTML = '<h1 class=result id=result><h1>'
            document.getElementById('input-dois').value = result;
            document.getElementById('result').innerHTML = `Resultado: ${quantidade_medida_comparar} ${nome_medida_2} é igual a ${result} ${nome_medida}`
        }
    } else {
        document.getElementById('input-dois').value = '';
        document.getElementById('result').innerHTML = '';
        document.getElementById('result-error').innerHTML = '';
}
    
function scrollButton() {
    window.scrollTo(10,document.body.scrollHeight);
}

}

document.getElementById("input-um").onkeyup = function() {
    converterUnidadesDeDistancia()
}

document.getElementById('select-medida-para-comparar').onchange = function() {
    converterUnidadesDeDistancia()
}

document.getElementById("select-medida-para-comparacao").onchange = function() {
    converterUnidadesDeDistancia()
}

