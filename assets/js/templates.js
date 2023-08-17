var modoCRUD = "";

$(document).ready(function () {
  $(".modalButton").click(function (event) {
    var id = $(this).data("id");
    prevenirRolagemPraCima(event);
    var targetModal = $(this).data("target");
    processarTituloModal($(this).get(0), targetModal);
    processarCampos(targetModal, id, document.querySelector(targetModal));
    $(targetModal).modal("show");
  });

  $('#salvarAlterarFuncBtn').click(function (event){
    console.log("Botão Salvar Funcionario "+modoCRUD);
  });

  $('#salvarAlterarMarcBtn').click(function (event){
    console.log("Botão Salvar Marcação "+modoCRUD);
  });

  $(".closeModalButton").click(function (e) {
    limparFormularios();
    prevenirRolagemPraCima(e);
    $(".modal").modal("hide");
  });

  $(".hr").on("input", function () {
    var value = $(this).val();
    if (value.length === 2 && value.indexOf(":") === -1) {
      $(this).val(value + ":");
    }
  });

  $(".hr").on("keydown", function (e) {
    var value = $(this).val();
    if (e.keyCode === 8 && value.length === 3 && value.charAt(2) === ":") {
      e.preventDefault(); // Impede a ação padrão do backspace
      $(this).val(value.slice(0, 2)); // Remove o ":"
    }
  });


  //

  $("#btn-cancelar-marcacao").click(function (e) {
    console.log("ctg");
    console.log(document.querySelector("#nomeFuncionarioMarc"));
    document.querySelector("#nomeFuncionarioMarc").innerHTML = "Funcionário: ";
  });

  $('#funcionarios').change(function(){
     var funcionarioSelecionado = $(this).val();
     var marcacoesFuncionario = null;
     var btn = document.querySelector('button:not(.hidden)');
     console.log("funcionario selecionado = "+funcionarioSelecionado)

     if(funcionarioSelecionado === ""){
        btn.disabled = true;
        marcacoesFuncionario = $('.table tr');
        marcacoesFuncionario.show();
     } else {
        btn.disabled = false;
        $('.dados').hide();

        marcacoesFuncionario =  $('.table tr[data-funcionario="' + funcionarioSelecionado + '"]');

        document.querySelector('thead tr').display = '';
        marcacoesFuncionario.show();
     }
     atualizarPaginacao(marcacoesFuncionario);
  });
});

function limparFormularios(){
    document.querySelector('#formFuncionario').reset();
    document.querySelector('#formMarcacoes').reset();
}

function prevenirRolagemPraCima(e) {
  e.preventDefault();
  e.stopPropagation();
}

function processarTituloModal(elemento, modal) {
  console.log(elemento);
  console.log(modal);
  let classes = elemento.className.split(" ");
  console.log("classes = " + classes);
  console.log("modal = " + modal);
  var tituloValor = null;

  classes.forEach(function (classe) {
    var titulo = titulosModais.find(function (titulo) {
      return classe === titulo.chave;
    });

    if (titulo) {
      tituloValor = titulo.valor;
    }
  });

  console.log(document.querySelector(modal));

  if (tituloValor) {
    document.querySelector(modal + " .modal-title").innerHTML = tituloValor;
  }

  modoCRUD = tituloValor;
}

function processarCampos(elemento, id, modal)
{
  var campos = modal.querySelectorAll('input');
  var colecao = funcionarios;
  var obj = funcionarios[id];
  if(!elemento.includes("Funcionario")){
    colecao = marcacoes;
    obj = marcacoes[id];
  }
  if(modoCRUD.includes("Editar")){
    campos.forEach(function (input) {
      var atributo = input.id
      if(obj.hasOwnProperty(atributo)){
        if(input.type === 'date'){
          input.value = processarData(obj[atributo]);
        } else {
          input.value = obj[atributo]
        }
      }
    });
  } 
}

function processarData(dataStr){
  var partesData = dataStr.split("/");
  var data = partesData[2] + '-' + partesData[1] + '-' + partesData[0];
  console.log("data = "+data);
  return data;
}