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


var botaoAdicionar = document.querySelector("#adicionar-paciente"); //selecionando o botão adicionar para a var 
// botaoAdicionar

botaoAdicionar.addEventListener("click", function(event){  //uma escuta no botão adicionar "quando clica" função com
  //parametro evento para q o preventDefault funcione corretamente
  event.preventDefault();  //faz com que a pagina não recarregue completamente ao apertar no botão adicionar
  
  var form = document.querySelector("#form-adiciona");  //selecionando o id form-adiciona no formulario html

  var nome = form.nome.value; //passando o valor do formulario nome para a variavel nome
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");  //cria um elemento <tr></tr> Html com a função createElement

  var nomeTd = document.createElement("td");  //cria um table data <td></td> Html atrelado a var nomeTd
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  // var imcTd = document.createElement("td");

  nomeTd.textContent = nome;           //faz com que o conteúdo (textContent) de nomeTd seja atribuido a var nome
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  
  pacienteTr.appendChild(nomeTd); //faz com que o pacienteTr que é um elemento <tr></tr> seja pai do nomeTd q é um <td>
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector("#tabela-pacientes");  //seleciona o id #tabela-pacientes e atribui a var tabela

  tabela.appendChild(pacienteTr);  // faz com que pacienteTr pertença a tabela que é o #tabela-pacientes no Html 


});