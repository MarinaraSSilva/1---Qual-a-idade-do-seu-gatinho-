//Função tem que ter o mesmo nome que o botão no HTML, precisa selecionar o campo (digite a idade do gato) pelo ID e depois selecionar apenas o valor.
//Criar uma variável para atribuir o resultado dos cálculos e depois colocar o resultado na tela selecionando o ID.

function calcular() {
  var valorIdadeGatoNumero = document.getElementById("idade-gato").value
  var valorIdadeHumana = ""
      
  if (valorIdadeGatoNumero < 1) {
    valorIdadeHumana = "Ops! Idade inválida!"
  } else if (valorIdadeGatoNumero == 1) {
    valorIdadeHumana = "Seu gatinho tem " + 15 + " anos, já é um adolescente e com certeza bagunça a casa toda! 😺"
  } else if (valorIdadeGatoNumero == 2){
    valorIdadeHumana = "Seu gatinho tem " + 24 + " anos, com essa idade já deveria saber limpar a própria caixinha! 😹"
  } else {
    valorIdadeHumana = "Seu gatinho tem " + (4 * valorIdadeGatoNumero + 16) + " anos, ele está ficando velhinho e continua cheio de amor! 😻"
  }
  //como colocar o resultado na tela
  document.getElementById('resultado').innerHTML = valorIdadeHumana 
}



// CÓDIGO AULA ORIGINAL
// var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")

// var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

// var valorEmReal = valorEmDolarNumero * 5.76
// var valorEmRealFixado = valorEmReal.toFixed(2)

// alert(valorEmRealFixado)
