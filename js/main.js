function consultaCep(){
    var cep = document.getElementById("cep").value
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        type: "GET",
        success: function(response){
            console.log(response)
        }
    })
}