function consultaCEP_BS(){
  if (validaCampos_BS() == true){
    $(".barra-progresso").show();
    var cep = document.getElementById("txtCEP_BS").value.replace("-","");
    console.log("CEP: " + cep);
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log("URL: " + url);

    $.ajax({
      url: url,
      type: "GET",
      success: function(response){
        console.log(response);
        $("#logradouro_BS").html(response.logradouro);
        $("#complemento_BS").html(response.complemento);
        $("#bairro_BS").html(response.bairro);
        $("#cidade_BS").html(response.localidade);
        $("#estado_BS").html(response.uf);
        $("#cep_BS").html("CEP: " + response.cep);
        $(".cep").show();
        $(".barra-progresso").hide();
      }
    });
  }
}

function validaCampos_BS(){
  var retorno = true;

  if (document.getElementById("txtCEP_BS").value == ""){
    alert("O campo CEP deve ser digitado!");
    retorno = false;
  }

  return retorno;
}

$(function(){
  $(".cep").hide();
  $(".barra-progresso").hide();
})