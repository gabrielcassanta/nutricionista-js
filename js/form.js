var botaoAdicionar = document.querySelector("#adicionar-paciente"); //selecionando o botão adicionar para a var 
// botaoAdicionar


// função botão adicionar paciente 
botaoAdicionar.addEventListener("click", function (event) {  //uma escuta no botão adicionar "quando clica" função com
  //parametro evento para q o preventDefault funcione corretamente
  event.preventDefault();  //faz com que a pagina não recarregue completamente ao apertar no botão adicionar

  var form = document.querySelector("#form-adiciona");  //selecionando o id form-adiciona no formulario html

  var paciente = obtemPacienteDoFormulario(form);

  console.log(paciente);

  var pacienteTr = montaTr(paciente);

  var tabela = document.querySelector("#tabela-pacientes");  //seleciona o id #tabela-pacientes e atribui a var tabela

  tabela.appendChild(pacienteTr);  // faz com que pacienteTr pertença a tabela que é o #tabela-pacientes no Html 

  form.reset();
});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");
  // console.log(pacienteTr);
  var nomeTd = montaTd(paciente.nome, "info-nome");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  if (validaPeso(paciente.peso)) {
    return true;
  } else {
    return false;
  }
}