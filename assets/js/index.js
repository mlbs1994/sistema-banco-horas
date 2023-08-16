$(document).ready(function() {
    $('.select2').select2();

    $('.modalButton').click(function(e) {
        prevenirRolagemPraCima(e); 
        var targetModal = $(this).data('target');
        $(targetModal).modal('show');
    });

    $('.closeModalButton').click(function(e) {
        prevenirRolagemPraCima(e);
        $('.modal').modal('hide');
    });

});

function prevenirRolagemPraCima(e){
    e.preventDefault(); 
    e.stopPropagation(); 
}
