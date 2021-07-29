var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"  // alterando o titulo do h1

var pacientes = document.querySelectorAll(".paciente"); //seletor de todos

for (var i = 0; i < pacientes.length; i++) { //laço for para calcular o IMC dos pacientes
  var paciente = pacientes[i];

  // console.log(pacientes[i]);

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = true;
  var alturaValida = true;

  if (peso <= 0 || peso >= 1000) {  //validando o peso
    console.log("peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido" //alterando o valor de tdImc 
    paciente.classList.add("paciente-invalido"); //trocando a cor com css para invalidos
  }

  if (altura <= 0 || altura >= 3.00) {  // validando a altura
    console.log("altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura Inválida"; //alterando o valor de tdImc 
    paciente.classList.add("paciente-invalido");  //trocando a cor com css para invalidos
  }

  if (pesoValido && alturaValida) {    //teste condicional
    var imc = peso / (altura * altura);  //calculo imc
    tdImc.textContent = imc.toFixed(2);  //passando o valor p var imc com limitação de 2 digitos pós virgula
  }

}