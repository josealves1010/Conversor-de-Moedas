/* Primeiro passo, fazer o botão funcionar */

const convertButton = document.querySelector(".convert-button") /*  (CONST - VARIÁVEL ) */
/* document.querySelector - Busquei no HTML o botão */
const currencySelect = document.querySelector(".currency-select")





/* addEventListener - Evento */
/* convertButton - NOME DA MINHA VARIÁVEL */
/* Function - Função - Vou avisar para minha função que quando eu clicar no botão eu quero que ela apareça*/

function convertValue() {   /* convertValue - NOME DA MINHA FUNÇÂO - Ela irá copnverter valor*/

    const inputCurrenyValue = document.querySelector(".input-curreny").value /* CRIE UMA VARIÁVEL PARA MEU INPUT  */
    const converter = document.querySelector(".currency-value-br") /* Valor em real */
    const convertido = document.querySelector(".currecy-value") /* outras moedas */


    const dolarToday = 5.2 /* peguei o valor do dólar atual */
    const euroToday = 6.2
    const libraToday = 6.9
    const bitcoinToday = 392.245

    const convertValue = inputCurrenyValue / dolarToday  /* Passo 1 - nome da minha função, depois meu input, o valor está dentro dele e dividi pelo dólar que eu mencionei */


    if (currencySelect.value == "dolar") {

        convertido.innerHTML = new Intl.NumberFormat("en-US", { /* Formas no google */
            style: "currency", /* dolar */
            currency: "USD"
        }).format(inputCurrenyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        convertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrenyValue / euroToday)
    }

       if (currencySelect.value == "libra") {
        convertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"

        }).format(inputCurrenyValue / libraToday)
    }

     if (currencySelect.value == "bitcoin") {
        convertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT"

        }).format(inputCurrenyValue / bitcoinToday)
    }






    converter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", /* moerda */
        currency: "BRL"
    }).format(inputCurrenyValue)

    
    converter.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency", /* moerda */
        currency: "GBP"
    }).format(inputCurrenyValue)





}


function changeCurrency() {
    const currencyName = document.querySelector(".currency-eua")
    const currecyImg = document.querySelector(".currecy-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currecyImg.src = "./assetes/estados-unidos.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currecyImg.src = "./assetes/euro.png"

    }



          if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currecyImg.src = "./assetes/libra.png"
        currecyImg.style.width = "50px"
        currecyImg.style.height = "50px"
        currecyImg.style.objectFit = "cover"

    }


    
          if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currecyImg.src = "./assetes/bitcoin.png"
        currecyImg.style.width = "50px"
        currecyImg.style.height = "50px"
        currecyImg.style.objectFit = "cover"

    }

    convertValue()

}








currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue) /* click é o nome de um evento do JavaScript, que ocorre quando um usuário pressiona e libera o botão do mouse sobre um elemento.  */