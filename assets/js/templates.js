$(document).ready(function () {
  $(".modalButton").click(function (e) {
    console.log("cheguei");
    prevenirRolagemPraCima(e);
    var targetModal = $(this).data("target");
    processarTituloModal($(this).get(0), targetModal);
    $(targetModal).modal("show");
  });

  $(".closeModalButton").click(function (e) {
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

  $("#formMarcacaoModal").on("shown.bs.modal", function () {
    document.querySelector("#nomeFuncionarioMarc").innerHTML =
      "Funcionario(a): " + document.querySelector("#funcionarios").value;
  });

  //

  $("#btn-cancelar-marcacao").click(function (e) {
    console.log("ctg");
    console.log(document.querySelector("#nomeFuncionarioMarc"));
    document.querySelector("#nomeFuncionarioMarc").innerHTML = "Funcionário: ";
  });
});

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
}
