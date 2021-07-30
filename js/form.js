var botaoAdicionar = document.querySelector("#adicionar-paciente"); //selecionando o botão adicionar para a var 
// botaoAdicionar


// função botão adicionar paciente 
botaoAdicionar.addEventListener("click", function (event) {  //uma escuta no botão adicionar "quando clica" função com
  //parametro evento para q o preventDefault funcione corretamente
  event.preventDefault();  //faz com que a pagina não recarregue completamente ao apertar no botão adicionar

  var form = document.querySelector("#form-adiciona");  //selecionando o id form-adiciona no formulario html

  var paciente = obtemPacienteDoFormulario(form);



  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagemDeErro(erros);

    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();
  var mensagemErro = document.querySelector("#mensagens-erro");
  mensagemErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

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
  var erros = [];

  if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");
  if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");
  // if (paciente.nome != [A-Z][a-z]) erros.push ("O nome deve ser válido");
  if (paciente.nome.length == 0) erros.push("O nome não pode ser em branco");
  if (paciente.peso.length == 0) erros.push("O peso não pode ser em branco");
  if (paciente.altura.length == 0) erros.push("A altura não pode ser em branco");
  if (paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");

  return erros;
}

