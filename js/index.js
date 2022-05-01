"use strict";
function exibirConteudo(){
    let valortotal = $("#total").val();
    let _avista = $("input:radio[id=avista]:checked").val();
    let _debito = $("input:radio[id=debito]:checked").val();
    let _credito = $("input:radio[id=credito]:checked").val();
    let percentual1 = 0.10;
    let percentual2 = 0.07;
    let desconto = 0;
    

    if(_avista){
     desconto = valortotal*percentual1;
     valortotal = valortotal-desconto;
    }else{
        if(_debito){
            desconto = valortotal*percentual2;
            valortotal = valortotal-desconto;
        }else{
            if(_credito){
                valortotal = valortotal
            }
        }
    }
    $("#pagar").val(valortotal);
}
$(function(){
    $("#calcular").click(function(){
        exibirConteudo();
        
    })
})