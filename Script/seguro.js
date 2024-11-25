document.addEventListener('DOMContentLoaded', function () {

    // Aplica a máscara para o campo de telefone
    const inputTelefone = document.querySelector('#tel');
    VMasker(inputTelefone).maskPattern("(99) 9999-99999");
  
    // Aplica a máscara para o campo de CPF
    const inputCpf = document.querySelector('#cpf');
    VMasker(inputCpf).maskPattern("999.999.999-99");
  
    // Função para validar o formulário completo
    function validateForm() {
        // Pegando os valores dos campos
        const name = document.getElementById("name").value;
        const cpf = document.getElementById("cpf").value;
        const tel = document.getElementById("tel").value;
  
        // Pegando os elementos de erro
        const nameError = document.getElementById("nameError");
        const cpfError = document.getElementById("cpfError");
        const telError = document.getElementById("telError");
  
        let isValid = true;
  
        // Verificação do nome
        if (name.trim() === "") {
            nameError.textContent = "O nome é obrigatório.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }
  
        // Verificação do CPF
        const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (cpf.trim() === "") {
            cpfError.textContent = "O CPF é obrigatório.";
            isValid = false;
        } else if (!cpfPattern.test(cpf)) {
            cpfError.textContent = "Formato de CPF inválido.";
            isValid = false;
        } else {
            cpfError.textContent = "";
        }
  
        // Verificação do telefone
        const telPattern = /^\(\d{2}\) \d{4}-\d{5}$/;
        if (tel.trim() === "") {
            telError.textContent = "O telefone é obrigatório.";
            isValid = false;
        } else if (!telPattern.test(tel)) {
            telError.textContent = "Formato de telefone inválido.";
            isValid = false;
        } else {
            telError.textContent = "";
        }
  
        return isValid; // Se isValid for false, o formulário não será enviado
    }
  
    // Adiciona a validação ao envio do formulário
    const form = document.getElementById("seguro_form");
    form.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Impede o envio se houver erros
        }
    });
  });