function voltar() {

    window.history.back();

}

function avancar() {

    window.history.forward();
    
}

var botao_formulario = document.getElementById("envio");

botao_formulario.addEventListener("click", function() {
    alert("Seu formulário foi enviado com sucesso");
  });

function minuscula() {

    const x = document.getElementById("email");
    x.value= x.value.toLowerCase();
}





