document.addEventListener('DOMContentLoaded', function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var p = document.querySelector("#p1");
  p.innerHTML = "Tamanho da janela em altura: " + width + "px<br>" + "Tamanho da janela em largura: " + height + "px";
});

//verificação e máscara do label telefone
document.addEventListener('DOMContentLoaded', function () {
  //Aplica o négocio do formato do número
  const inputTelefone = document.querySelector('#tel');
  VMasker(inputTelefone).maskPattern("(99) 9999-9999");

  document.getElementById('button').addEventListener('click', verinum);

  function verinum() {
    const num = document.getElementById('tel').value;
    const regexCelular = /^\(\d{2}\) \d{4}-\d{4}$/; 
    //^ este sinal significa que essa string está começando e $ está terminando,  (\d{2}\) captura os 2 primeiros digitos entre parenteses,  \d{4}-\d{4} captura os últimos 4 digitos junto com o hífen
     
    if (regexCelular.test(num)) {
      console.log("Número de telefone válido!");
    } 
    else {

      alert ("O número inserido não é válido")
    }
  }
});

//verificação e mascára do cpf
document.addEventListener('DOMContentLoaded', function () {
  //Aplica o négocio do formato do número
  const inputCpf = document.querySelector('#cpf');
  VMasker(inputCpf).maskPattern("999.999.999-99");

  document.getElementById('button').addEventListener('click', verinum2);

  function verinum2() {
    const num2 = document.getElementById('cpf').value;
    const regexCpf = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    //^ este sinal significa que essa string está começando e $ está terminando,  (\d{2}\) captura os 2 primeiros digitos entre parenteses,  \d{4}-\d{4} captura os últimos 4 digitos junto com o hífen
     
    if (regexCpf.test(num2)) {
      console.log("Número de CPF válido!");
    } 
    else {

      alert ("O número de cpf inserido não é válido")
    }
  }
});
   
    document.getElementById('button').addEventListener('click', function() {
      // Obtém os valores dos campos
      const cpf = document.getElementById('cpf').value;
      validarFormulario(cpf);
    });

  //função para deixar os campos não preenchidos em vermelho
      function campoerro () {
      const campos = document.forms["seguro_form"].getElementsByTagName("input");

      for (i = 0; i < campos.length; i++) {
        campos[i].classList.remove("campo-erro");

        if (campos[i].value === "") {   
          campos[i].classList.add("campo-erro");
        }
      }
    };

 
