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
 
document.getElementById('email').addEventListener('input', function() {
  // Obtém o valor do campo de entrada
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value;

  // Converte o valor para minúsculas
  emailInput.value = emailValue.toLowerCase();
});
