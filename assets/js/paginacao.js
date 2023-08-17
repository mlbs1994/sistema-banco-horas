function atualizarPaginacao(filtro){
            
    console.log("chegou aqui ó no #paginacao.pagination");

    jQuery(function($) {
        
        var items = filtro;
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