const contagem = () => {
    let resultado = document.getElementById(`resultado`)
    let numero = Number(document.getElementById(`numero`).value)

resultado.innerHTML = `<h2>Contando do 0 ao ${numero}</h2>`

let contador = 0

    while(contador <= numero) {
        resultado.innerHTML += `${contador} `
        contador++
    }
}
