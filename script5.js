function converterUnidadesDeTemperatura() {
    let valor_comparar = document.getElementById('input-um').value;
    let medida_comparar = document.getElementById('select-medida-para-comparar').value;
    let medida_comparacao = document.getElementById('select-medida-para-comparacao').value;
    let div_result = document.getElementById('div-para-result')

    valor_comparar = valor_comparar.replace(',', '.')

    if (valor_comparar != '') {

        if (isNaN(valor_comparar*1)) {
            div_result.innerHTML = '<h1 class=result id=result-error><h1>'
            document.getElementById('result-error').innerHTML = `ERRO! POR FAVOR FORNEÇA UM NÚMERO VÁLIDO!`
            document.getElementById('input-dois').value = 'INVÁLIDO!';
        } else {
            if (medida_comparar == medida_comparacao) {
                valor_comparar = Number(valor_comparar)
                let tamanho_valor = valor_comparar.toString().length;
                
                if (tamanho_valor >= 12 & result > 1) {
                    valor_comparar = valor_comparar.toExponential(20)
                }
                valor_comparar = valor_comparar.toString()
                valor_comparar = valor_comparar.replace('.', ',')
                document.getElementById('input-dois').value = valor_comparar;
                if (valor_comparar == 1) {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} grau ${medida_comparar} é igual a ${valor_comparar} grau ${medida_comparacao} `
                } else {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} graus ${medida_comparar} é igual a ${valor_comparar} graus ${medida_comparacao} `
                }
            }

            if (medida_comparar == 'Celsius' & medida_comparacao == 'Fahrenheit') {
                result = (1.8*valor_comparar + 32)
                let tamanho_result = result.toString().length;
                if (tamanho_result >= 12 & result > 1) {
                    result = result.toExponential(5)
                }
                result = result.toString()
                result = result.replace('.', ',')
                div_result.innerHTML = '<h1 class=result id=result><h1>'
                document.getElementById('input-dois').value = result;
                if (valor_comparar == 1 & result != 1) {
                    document.getElementById('result').innerHTML = `Resultado: 1 grau ${medida_comparar} é igual a ${result} graus ${medida_comparacao} `
                } if (valor_comparar != 1 & result == 1) {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} graus ${medida_comparar} é igual a 1 grau ${medida_comparacao} `
                } else {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} graus ${medida_comparar} é igual a ${result} graus ${medida_comparacao} `
                }
                
                
            }

            if(medida_comparar == 'Celsius' & medida_comparacao == 'Kelvin') {
                valor_comparar = Number(valor_comparar)
                result = (valor_comparar + 273.15)
                console.log(result)
                let tamanho_result = result.toString().length;
                if (tamanho_result >= 12 & result > 1) {
                    result = result.toExponential(5)
                }
                result = result.toString()
                result = result.replace('.', ',')
                div_result.innerHTML = '<h1 class=result id=result><h1>'
                document.getElementById('input-dois').value = result;
                if (valor_comparar == 1 & result != 1) {
                    document.getElementById('result').innerHTML = `Resultado: 1 grau ${medida_comparar} é igual a ${result} graus ${medida_comparacao} `
                } if (valor_comparar != 1 & result == 1) {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} graus ${medida_comparar} é igual a 1 grau ${medida_comparacao} `
                } else {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} graus ${medida_comparar} é igual a ${result} graus ${medida_comparacao} `
                }
            }

            if(medida_comparar == 'Fahrenheit' & medida_comparacao == 'Celsius') {
                valor_comparar = Number(valor_comparar)
                result = ((valor_comparar-32)*5/9)
                console.log(result)
                let tamanho_result = result.toString().length;
                if (tamanho_result >= 12 & result > 1) {
                    result = result.toExponential(5)
                }
                result = result.toString()
                result = result.replace('.', ',')
                div_result.innerHTML = '<h1 class=result id=result><h1>'
                document.getElementById('input-dois').value = result;
                if (valor_comparar == 1 & result != 1) {
                    document.getElementById('result').innerHTML = `Resultado: 1 grau ${medida_comparar} é igual a ${result} graus ${medida_comparacao} `
                } if (valor_comparar != 1 & result == 1) {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} graus ${medida_comparar} é igual a 1 grau ${medida_comparacao} `
                } else {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} graus ${medida_comparar} é igual a ${result} graus ${medida_comparacao} `
                }
            }

            if(medida_comparar == 'Fahrenheit' & medida_comparacao == 'Kelvin') { // problema
                valor_comparar = Number(valor_comparar)
                result = ((valor_comparar+459.67)*5/9)
                console.log(result)
                let tamanho_result = result.toString().length;
                if (tamanho_result >= 12 & result > 1) {
                    result = result.toExponential(5)
                }
                result = result.toString()
                result = result.replace('.', ',')
                div_result.innerHTML = '<h1 class=result id=result><h1>'
                document.getElementById('input-dois').value = result;
                if (valor_comparar == 1 & result != 1) {
                    document.getElementById('result').innerHTML = `Resultado: 1 grau ${medida_comparar} é igual a ${result} graus ${medida_comparacao} `
                } if (valor_comparar != 1 & result == 1) {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} graus ${medida_comparar} é igual a 1 grau ${medida_comparacao} `
                } else {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} graus ${medida_comparar} é igual a ${result} graus ${medida_comparacao} `
                }
            }

            if(medida_comparar == 'Kelvin' & medida_comparacao == 'Celsius') {
                valor_comparar = Number(valor_comparar)
                result = (valor_comparar - 273.15)
                console.log(result)
                let tamanho_result = result.toString().length;
                if (tamanho_result >= 12 & result > 1) {
                    result = result.toExponential(5)
                }
                result = result.toString()
                result = result.replace('.', ',')
                div_result.innerHTML = '<h1 class=result id=result><h1>'
                document.getElementById('input-dois').value = result;
                if (valor_comparar == 1 & result != 1) {
                    document.getElementById('result').innerHTML = `Resultado: 1 grau ${medida_comparar} é igual a ${result} graus ${medida_comparacao} `
                } if (valor_comparar != 1 & result == 1) {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} graus ${medida_comparar} é igual a 1 grau ${medida_comparacao} `
                } else {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} graus ${medida_comparar} é igual a ${result} graus ${medida_comparacao} `
                }
            }

            if(medida_comparar == 'Kelvin' & medida_comparacao == 'Fahrenheit') {
                valor_comparar = Number(valor_comparar)
                result = (valor_comparar * 9/5 - 459.67)
                console.log(result)
                let tamanho_result = result.toString().length;
                if (tamanho_result >= 12 & result > 1) {
                    result = result.toExponential(5)
                }
                result = result.toString()
                result = result.replace('.', ',')
                div_result.innerHTML = '<h1 class=result id=result><h1>'
                document.getElementById('input-dois').value = result;
                if (valor_comparar == 1 & result != 1) {
                    document.getElementById('result').innerHTML = `Resultado: 1 grau ${medida_comparar} é igual a ${result} graus ${medida_comparacao} `
                } if (valor_comparar != 1 & result == 1) {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} graus ${medida_comparar} é igual a 1 grau ${medida_comparacao} `
                } else {
                    document.getElementById('result').innerHTML = `Resultado: ${valor_comparar} graus ${medida_comparar} é igual a ${result} graus ${medida_comparacao} `
                }
            }
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
    converterUnidadesDeTemperatura()
}

document.getElementById('select-medida-para-comparar').onchange = function() {
    converterUnidadesDeTemperatura()
}

document.getElementById("select-medida-para-comparacao").onchange = function() {
    converterUnidadesDeTemperatura()
}