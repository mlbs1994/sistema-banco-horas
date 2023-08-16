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


      //Handlebars

      carregarTelaFuncionarios();

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
          carregarTelaFuncionarios();
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

        function carregarTelaFuncionarios(){
            abrirECompilarTemplate("/assets/templates/funcionarios-template.hbs", function(templateCompilado) {
                var dadosTabelaFuncionario = [
                    // Dados da Tabela aqui
                ];
                atualizarTabela("funcionario", templateCompilado, dadosTabelaFuncionario);
            });
        }

});
