let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');

// Evento para validar o campo usuário
usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 3) {
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuário *Insira no mínimo 3 caracteres';
        usuario.setAttribute('style', 'border-color: red');
    } else {
        labelUsuario.setAttribute('style', 'color: green');
        labelUsuario.innerHTML = 'Usuário';
        usuario.setAttribute('style', 'border-color: green');
    }
});

// Evento para validar o campo senha
senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha *Insira no mínimo 5 caracteres';
        senha.setAttribute('style', 'border-color: red');
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha';
        senha.setAttribute('style', 'border-color: green');
    }
});

// Função chamada quando o formulário de login é submetido
function entrar() {
  // Impede o envio do formulário para evitar recarregar a página
  event.preventDefault();

  // Obtém os dados inseridos pelo usuário
  let usuario = document.querySelector('#usuario').value;
  let senha = document.querySelector('#senha').value;

  // Obtém a lista de usuários armazenada no LocalStorage (se existir)
  let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

  // Verifica se existe um usuário que corresponda ao que foi inserido no formulário
  let usuarioEncontrado = listaUser.find((item) => item.userCad === usuario && item.senhaCad === senha);

  if (usuarioEncontrado) {
      // Se o usuário for encontrado, armazena suas informações no LocalStorage
      let usuarioLogado = {
          nome: usuarioEncontrado.nomeCad,
          user: usuarioEncontrado.userCad,
          senha: usuarioEncontrado.senhaCad
      };
      
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

      // Redireciona para a página inicial ou outra página de sua escolha
      window.location.href = 'index.html'; // Ou a página que você deseja redirecionar
  } else {
      // Exibe uma mensagem de erro caso as credenciais estejam incorretas
      alert('Usuário ou senha incorretos!');
  }
}
