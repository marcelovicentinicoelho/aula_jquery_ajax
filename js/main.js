function consultaCEP(){
  if (validaCampos() == true){
    var cep = document.getElementById("txtCEP").value.replace("-","");
    console.log("CEP: " + cep);
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log("URL: " + url);

    $.ajax({
      url: url,
      type: "GET",
      success: function(response){
        document.getElementById("logradouro").innerHTML = response.logradouro
        document.getElementById("complemento").innerHTML = response.complemento
        document.getElementById("bairro").innerHTML = response.bairro
        document.getElementById("cidade").innerHTML = response.localidade
        $("#estado").html(response.uf);
        $("#cep").html(response.cep);
      }
    });
  }
}

function validaCampos(){
  var retorno = true;

  if (document.getElementById("txtCEP").value == ""){
    alert("O campo CEP deve ser digitado!");
    retorno = false;
  }

  return retorno;
}
