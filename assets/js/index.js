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
    },
    {
        "chave": "del-func",
        "valor": "Deletar Funcionário"
    },
    {
        "chave": "del-marc",
        "valor": "Deletar Marcação"
    },

];

var funcionarios = [
    {"nome": "Osvaldo Lima da Costa", "horario_inicio": "08:00", "horario_fim": "17:00"},
    {"nome": "Ana Gusmão da Silva", "horario_inicio": "08:30", "horario_fim": "17:30"},
    {"nome": "Cintia Lopes Vanderbilt", "horario_inicio": "09:00", "horario_fim": "18:00"},
    {"nome": "Ricardo Roberto Royce", "horario_inicio": "09:30", "horario_fim": "18:30"}
];

var marcacoes = [
    {"funcionario-nome": "Osvaldo Lima da Costa", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Osvaldo Lima da Costa", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Osvaldo Lima da Costa", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "09:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ana Gusmão da Silva", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ana Gusmão da Silva", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ana Gusmão da Silva", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Cintia Lopes Vanderbilt", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Cintia Lopes Vanderbilt", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Cintia Lopes Vanderbilt", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "09:00", "horario_fim_marcacao": "18:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "19:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "07:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "10:00", "horario_fim_marcacao": "19:00"},
    {"funcionario-nome": "Ricardo Roberto Royce", "data-marcacao": "01/07/2023", "horario_inicio_marcacao": "08:00", "horario_fim_marcacao": "17:00"}];

var atrasos = [
    {"funcionario-nome-atraso": "Osvaldo Lima da Costa", "data-marcacao-atraso": "01/07/2023", "horario-inicio-atraso": "08:00", "horario-fim-atraso": "17:00", "atraso": "00:00"},
    {"funcionario-nome-atraso": "Osvaldo Lima da Costa", "data-marcacao-atraso": "01/07/2023", "horario-inicio-atraso": "08:00", "horario-fim-atraso": "17:00", "atraso": "00:00"},
    {"funcionario-nome-atraso": "Osvaldo Lima da Costa", "data-marcacao-atraso": "01/07/2023", "horario-inicio-atraso": "08:00", "horario-fim-atraso": "17:00", "atraso": "00:00"},
    {"funcionario-nome-atraso": "Ana Gusmão da Silva", "data-marcacao-atraso": "01/07/2023", "horario-inicio-atraso": "08:00", "horario-fim-atraso": "17:00", "atraso": "00:00"},
    {"funcionario-nome-atraso": "Ana Gusmão da Silva", "data-marcacao-atraso": "01/07/2023", "horario-inicio-atraso": "08:00", "horario-fim-atraso": "17:00", "atraso": "00:00"},
    {"funcionario-nome-atraso": "Ana Gusmão da Silva", "data-marcacao-atraso": "01/07/2023", "horario-inicio-atraso": "08:00", "horario-fim-atraso": "17:00", "atraso": "00:00"},
    {"funcionario-nome-atraso": "Cintia Lopes Vanderbilt", "data-marcacao-atraso": "01/07/2023", "horario-inicio-atraso": "08:00", "horario-fim-atraso": "17:00", "atraso": "00:00"},
    {"funcionario-nome-atraso": "Cintia Lopes Vanderbilt", "data-marcacao-atraso": "01/07/2023", "horario-inicio-atraso": "08:00", "horario-fim-atraso": "17:00", "atraso": "00:00"},
    {"funcionario-nome-atraso": "Cintia Lopes Vanderbilt", "data-marcacao-atraso": "01/07/2023", "horario-inicio-atraso": "08:00", "horario-fim-atraso": "17:00", "atraso": "00:00"},
    {"funcionario-nome-atraso": "Ricardo Roberto Royce", "data-marcacao-atraso": "01/07/2023", "horario-inicio-atraso": "08:00", "horario-fim-atraso": "17:00", "atraso": "00:00"},
    {"funcionario-nome-atraso": "Ricardo Roberto Royce", "data-marcacao-atraso": "01/07/2023", "horario-inicio-atraso": "08:00", "horario-fim-atraso": "17:00", "atraso": "00:00"},
    {"funcionario-nome-atraso": "Ricardo Roberto Royce", "data-marcacao-atraso": "01/07/2023", "horario-inicio-atraso": "08:00", "horario-fim-atraso": "17:00", "atraso": "00:00"}];

var horasExtras = [
    {"funcionario-nome-hora-extra": "Osvaldo Lima da Costa", "data-marcacao-hora-extra": "01/07/2023", "horario-inicio-hora-extra": "08:00", "horario-fim-hora-extra": "17:00", "hora-extra": "00:00"},
    {"funcionario-nome-hora-extra": "Osvaldo Lima da Costa", "data-marcacao-hora-extra": "01/07/2023", "horario-inicio-hora-extra": "08:00", "horario-fim-hora-extra": "17:00", "hora-extra": "00:00"},
    {"funcionario-nome-hora-extra": "Osvaldo Lima da Costa", "data-marcacao-hora-extra": "01/07/2023", "horario-inicio-hora-extra": "08:00", "horario-fim-hora-extra": "17:00", "hora-extra": "00:00"},
    {"funcionario-nome-hora-extra": "Ana Gusmão da Silva", "data-marcacao-hora-extra": "01/07/2023", "horario-inicio-hora-extra": "08:00", "horario-fim-hora-extra": "17:00", "hora-extra": "00:00"},
    {"funcionario-nome-hora-extra": "Ana Gusmão da Silva", "data-marcacao-hora-extra": "01/07/2023", "horario-inicio-hora-extra": "08:00", "horario-fim-hora-extra": "17:00", "hora-extra": "00:00"},
    {"funcionario-nome-hora-extra": "Ana Gusmão da Silva", "data-marcacao-hora-extra": "01/07/2023", "horario-inicio-hora-extra": "08:00", "horario-fim-hora-extra": "17:00", "hora-extra": "00:00"},
    {"funcionario-nome-hora-extra": "Cintia Lopes Vanderbilt", "data-marcacao-hora-extra": "01/07/2023", "horario-inicio-hora-extra": "08:00", "horario-fim-hora-extra": "17:00", "hora-extra": "00:00"},
    {"funcionario-nome-hora-extra": "Cintia Lopes Vanderbilt", "data-marcacao-hora-extra": "01/07/2023", "horario-inicio-hora-extra": "08:00", "horario-fim-hora-extra": "17:00", "hora-extra": "00:00"},
    {"funcionario-nome-hora-extra": "Cintia Lopes Vanderbilt", "data-marcacao-hora-extra": "01/07/2023", "horario-inicio-hora-extra": "08:00", "horario-fim-hora-extra": "17:00", "hora-extra": "00:00"},
    {"funcionario-nome-hora-extra": "Ricardo Roberto Royce", "data-marcacao-hora-extra": "01/07/2023", "horario-inicio-hora-extra": "08:00", "horario-fim-hora-extra": "17:00", "hora-extra": "00:00"},
    {"funcionario-nome-hora-extra": "Ricardo Roberto Royce", "data-marcacao-hora-extra": "01/07/2023", "horario-inicio-hora-extra": "08:00", "horario-fim-hora-extra": "17:00", "hora-extra": "00:00"},
    {"funcionario-nome-hora-extra": "Ricardo Roberto Royce", "data-marcacao-hora-extra": "01/07/2023", "horario-inicio-hora-extra": "08:00", "horario-fim-hora-extra": "17:00", "hora-extra": "00:00"}];



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
        console.log("dados = "+dados);
        console.log("marcacoes = "+dados.marcacoes);
        console.log("funcionarios = "+dados.funcionarios);
        $("main-container").hide();
        $("#main-container").html(templateCompilado({dados})).show();
      }

      $('#funcionario-btn').click(function(){
          carregarTelaFuncionarios();
      })

        $('#marcacoes-btn').click(function() {
            abrirECompilarTemplate("/assets/templates/marcacoes-template.hbs", function(templateCompilado) {
                atualizarTabela("marcacoes", templateCompilado, construirDadosRegistros(marcacoes));
                atualizarPaginacao();
            });
        })


        $('#atrasos-btn').click(function() {
            abrirECompilarTemplate("/assets/templates/atrasos-template.hbs", function(templateCompilado) {
                atualizarTabela("atrasos", templateCompilado, construirDadosRegistros(atrasos));
                atualizarPaginacao();
            });
        })

        $('#horas-extras-btn').click(function() {
            abrirECompilarTemplate("/assets/templates/horas-extras-template.hbs", function(templateCompilado) {
                atualizarTabela("horas-extras", templateCompilado, construirDadosRegistros(horasExtras));
                atualizarPaginacao();
            });
        });

        function carregarTelaFuncionarios(){
            abrirECompilarTemplate("/assets/templates/funcionarios-template.hbs", function(templateCompilado) {
                console.log("funcionarios = "+funcionarios)
                atualizarTabela("funcionario", templateCompilado, funcionarios);
                atualizarPaginacao();
            });
        }

        function construirDadosRegistros(dados){
            return {"registros": dados, "funcionarios": funcionarios};
        }

        function atualizarPaginacao(){
            
            console.log("chegou aqui ó no #paginacao.pagination");

            jQuery(function($) {
                
                var items = $('table tbody tr');
                console.log("items = "+items);
                console.log("items.length = "+items.length);  // Isso irá imprimir o número de elementos no objeto
                console.log("items[0] = "+items[0]);      // Isso irá imprimir o primeiro elemento do objeto

                var numItems = items.length;
                var perPage = 10;

                // Only show the first 2 (or first `per_page`) items initially.
                items.slice(perPage).hide();

                // Now setup the pagination using the `#pagination` div.
                $("#paginacao").pagination({
                    items: numItems,
                    itemsOnPage: perPage,
                    cssStyle: "light-theme",

                    // This is the actual page changing functionality.
                    onPageClick: function(pageNumber) {
                        // We need to show and hide `tr`s appropriately.
                        console.log("chegou no onClick")
                        var showFrom = perPage * (pageNumber - 1);
                        var showTo = showFrom + perPage;

                        console.log("showFrom = "+showFrom)
                        console.log("showTo  ="+showTo)

                        // We'll first hide everything...
                        items.hide()
                             // ... and then only show the appropriate rows.
                             .slice(showFrom, showTo).show();
                    }
                });
            });
        }
    });
    
