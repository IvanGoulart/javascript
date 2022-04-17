$(document).ready(function() {
    $("select").first().change(function(){
        if($(this).val() != 0){
            $('#replicar').show();
        }
    })
    $("#replicar").click(function(){
            var valueSelect;
            valueSelect = $('select option:selected').first().val();
            
            $("select").val(valueSelect).attr('selected',true);
    });
    
    
    $("#button").prepend("<p>Testanto o jquery</p>");


});