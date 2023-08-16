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

var funcionarios = [
    {"nome": "Osvaldo Lima da Costa", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"nome": "Ana Gusmão da Silva", "horario_inicio": "08:30", "horario_fim": "17:30"},
    {"nome": "Cintia Lopes Vanderbilt", "horario_inicio": "09:00", "horario_fim": "18:00"},
    {"nome": "Ricardo Roberto Royce", "horario_inicio": "09:30", "horario_fim": "18:30"},
];

var marcacoes = [
    {"funcionario-nome": "Osvaldo Lima", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Osvaldo Lima", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Osvaldo Lima", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ana Gusmão", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ana Gusmão", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ana Gusmão", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Cintia Lopes", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Cintia Lopes", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Cintia Lopes", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ricardo Roberto", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ricardo Roberto", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ricardo Roberto", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ricardo Roberto", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ricardo Roberto", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ricardo Roberto", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"}];

var atrasos = [
    {"funcionario-nome": "Osvaldo Lima", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Osvaldo Lima", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Osvaldo Lima", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ana Gusmão", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ana Gusmão", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ana Gusmão", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Cintia Lopes", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Cintia Lopes", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Cintia Lopes", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ricardo Roberto", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ricardo Roberto", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ricardo Roberto", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"}];

var horasExtras = [
    {"funcionario-nome": "Osvaldo Lima", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Osvaldo Lima", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Osvaldo Lima", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ana Gusmão", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ana Gusmão", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ana Gusmão", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Cintia Lopes", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Cintia Lopes", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Cintia Lopes", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ricardo Roberto", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ricardo Roberto", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"funcionario-nome": "Ricardo Roberto", "data-marcacao": "01/07/2023", "horario_inicio": "08:00", "horario_fim": "17:00"}];


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

      function atualizarTabela(opcaoID, templateCompilado, dados){
        $("main-container").hide();
        $("#main-container").html(templateCompilado({dados})).show();
      }

      $('#funcionario-btn').click(function(){
          carregarTelaFuncionarios();
      })

        $('#marcacoes-btn').click(function() {
            abrirECompilarTemplate("/assets/templates/marcacoes-template.hbs", function(templateCompilado) {
                atualizarTabela("marcacoes", templateCompilado, marcacoes);
            });
        })


        $('#atrasos-btn').click(function() {
            abrirECompilarTemplate("/assets/templates/atrasos-template.hbs", function(templateCompilado) {
                atualizarTabela("atrasos", templateCompilado, atrasos);
            });
        })

        $('#horas-extras-btn').click(function() {
            abrirECompilarTemplate("/assets/templates/horas-extras-template.hbs", function(templateCompilado) {
                atualizarTabela("horas-extras", templateCompilado, horasExtras);
            });
        });

        function carregarTelaFuncionarios(){
            abrirECompilarTemplate("/assets/templates/funcionarios-template.hbs", function(templateCompilado) {
                console.log("funcionarios = "+funcionarios)
                atualizarTabela("funcionario", templateCompilado, funcionarios);
            });
        }

});
