var pacientes = document.querySelectorAll(".paciente"); //seletor de todos

for (var i = 0; i < pacientes.length; i++) { //laço for para calcular o IMC dos pacientes
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido) {  //validando o peso
    tdImc.textContent = "Peso Inválido" //alterando o valor de tdImc 
    paciente.classList.add("paciente-invalido"); //trocando a cor com css para invalidos
  }

  if (!alturaValida) {  // validando a altura
    tdImc.textContent = "Altura Inválida"; //alterando o valor de tdImc 
    paciente.classList.add("paciente-invalido");  //trocando a cor com css para invalidos
  }

  if (pesoValido && alturaValida) {    //teste condicional
    var imc = calculaImc(peso, altura);  //calculo imc
    tdImc.textContent = imc;  //passando o valor p var imc com limitação de 2 digitos pós virgula
  }

}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  peso = Number(peso);
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  altura = Number(altura);
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}