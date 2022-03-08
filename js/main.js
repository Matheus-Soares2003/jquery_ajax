function consultaCep(){
    var cep = document.getElementById("cep").value
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        type: "GET",
        success: function(response){
            console.log(response)
            $("#cidade").html(response.localidade)
            //document.getElementById("cidade").innerHTML = response.localidade
            $("#uf").html(`- ${response.uf}`)
            //document.getElementById("uf").innerHTML = `- ${response.uf}`
            $("#bairro").html(response.bairro)
            //document.getElementById("bairro").innerHTML = response.bairro
            $("#logradouro").html(response.logradouro)
            //document.getElementById("logradouro").innerHTML = response.logradouro
        }
    })
}