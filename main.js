'use strict'

const botaoMostrarTodosNumeros = document.getElementById('botao-mostrar-todos-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')

const botaoMostrarNumerosMultiplos3Ou5 = document.getElementById('botao-mostrar-numeros-multiplos-3-ou-5')
const botaoMostrarNumerosMultiplos3E5 = document.getElementById('botao-mostrar-numeros-multiplos-3-e-5')
const botaoMostrarProximoNumero = document.getElementById('botao-mostrar-proximo-numero')
const botaoMostrarProximoNumeroPar = document.getElementById('botao-mostrar-proximo-numero-par')
const botaoMostrarDobro = document.getElementById('botao-mostrar-dobro')

function mostrarTodosNumeros () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[indice]
        container.appendChild(novoSpan)
    }
}

function mostrarNumerosPares () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){

        if(numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }

}

function mostrarNumerosImpares () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-impares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){

        if(numeros[indice] % 2 != 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }

}



function mostrarMultiplos3Ou5 () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-3-ou-5')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){

        if(numeros[indice] % 3 == 0 || numeros[indice] % 5 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarMultiplos3E5 () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-3-e-5')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){

        if(numeros[indice] % 3 == 0 && numeros[indice] % 5 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarProximoNumero () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo-numero')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[indice]) + 1
        container.appendChild(novoSpan)
    }
}

function mostrarProximoNumeroPar () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo-numero-par')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){
        if (numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 2
            container.appendChild(novoSpan)
        }else{
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 1
            container.appendChild(novoSpan)
        }
    }
}

function mostrarDobro () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-dobro')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[indice]) * 2
        container.appendChild(novoSpan)
    }


}

botaoMostrarTodosNumeros.addEventListener('click', mostrarTodosNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarNumerosImpares.addEventListener('click', mostrarNumerosImpares)

botaoMostrarNumerosMultiplos3Ou5.addEventListener('click', mostrarMultiplos3Ou5)
botaoMostrarNumerosMultiplos3E5.addEventListener('click', mostrarMultiplos3E5)
botaoMostrarProximoNumero.addEventListener('click', mostrarProximoNumero)
botaoMostrarProximoNumeroPar.addEventListener('click', mostrarProximoNumeroPar)
botaoMostrarDobro.addEventListener('click', mostrarDobro)