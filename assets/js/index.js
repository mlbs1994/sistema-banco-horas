const titulosModais = [
    {
        "chave": "add-func",
        "valor": "Adicionar Funcionário"
    },
    {
        "chave": "add-marc",
        "valor": "Adicionar Marcação"
    },
    {
        "chave": "edit-func",
        "valor": "Editar Funcionário"
    },
    {
        "chave": "edit-marc",
        "valor": "Editar Marcação"
    }
];

$(document).ready(function() {
    $('.select2').select2();

    $('.modalButton').click(function(e) {
        prevenirRolagemPraCima(e); 
        var targetModal = $(this).data('target');
        processarTituloModal($(this).get(0), targetModal);
        $(targetModal).modal('show');
    });

    $('.closeModalButton').click(function(e) {
        prevenirRolagemPraCima(e);
        $('.modal').modal('hide');
    });

    $('.hr').on('input', function() {
        var value = $(this).val();
        if (value.length === 2 && value.indexOf(':') === -1) {
          $(this).val(value + ':');
        }
      });

      $('.hr').on('keydown', function(e) {
        var value = $(this).val();
        if (e.keyCode === 8 && value.length === 3 && value.charAt(2) === ':') {
          e.preventDefault(); // Impede a ação padrão do backspace
          $(this).val(value.slice(0, 2)); // Remove o ":"
        }
      });

      $('#formMarcacaoModal').on('shown.bs.modal', function () {
        document.querySelector("#nomeFuncionarioMarc").innerHTML += document.querySelector('#funcionarios').value;  
      });

      //

      $('#btn-cancelar-marcacao').click(function(e) {
            document.querySelector("#nomeFuncionarioMarc").innerHTML = "Funcionário: ";
      });

      //Handlebars

      function abrirECompilarTemplate(caminho, callback){
        $.ajax({
            url: caminho,
            cache: true,
            success: function(data) {
                var templateCompilado = Handlebars.compile(data);
                callback(templateCompilado);
            }
        });
      }

      function atualizarTabela(opcaoID, templateCompilado, dadosTabela){
        $("main-container").hide();
        $("#main-container").html(templateCompilado({dados: dadosTabela})).show();
      }

      $('#funcionario-btn').click(function(){
        abrirECompilarTemplate("/assets/templates/funcionarios-template.hbs", function(templateCompilado) {
            var dadosTabelaFuncionario = [
                // Dados da Tabela aqui
            ];
            atualizarTabela("funcionario", templateCompilado, dadosTabelaFuncionario);
        });
      })

        $('#marcacoes-btn').click(function() {
            abrirECompilarTemplate("/assets/templates/marcacoes-template.hbs", function(templateCompilado) {
                var dadosTabelaFuncionario = [
                    // Dados da Tabela aqui
                ];
                atualizarTabela("marcacoes", templateCompilado, dadosTabelaFuncionario);
            });
        })


        $('#atrasos-btn').click(function() {
            abrirECompilarTemplate("/assets/templates/atrasos-template.hbs", function(templateCompilado) {
                var dadosTabelaFuncionario = [
                    // Dados da Tabela aqui
                ];
                atualizarTabela("atrasos", templateCompilado, dadosTabelaFuncionario);
            });
        })

        $('#horas-extras-btn').click(function() {
            abrirECompilarTemplate("/assets/templates/horas-extras-template.hbs", function(templateCompilado) {
                var dadosTabelaFuncionario = [
                    // Dados da Tabela aqui
                ];
                atualizarTabela("horas-extras", templateCompilado, dadosTabelaFuncionario);
            });
        });

function prevenirRolagemPraCima(e){
    e.preventDefault(); 
    e.stopPropagation(); 
}

function processarTituloModal(elemento, modal){
    console.log(elemento)
    console.log(modal)
    let classes = elemento.className.split(" ");
    console.log("classes = "+classes);
    console.log("modal = "+modal);
    var tituloValor = null;

    classes.forEach(function(classe){
        var titulo = titulosModais.find(function(titulo){
            return classe === titulo.chave;
        })

        if(titulo){
            tituloValor = titulo.valor;
        }
    });

    console.log(document.querySelector(modal));
    
    if(tituloValor){
        document.querySelector(modal + ' .modal-title').innerHTML = tituloValor;
    }
    
}

});
