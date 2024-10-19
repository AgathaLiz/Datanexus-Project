let usuario = document.getElementById('usuario')
let labelUsuario = document.getElementById('labelUsuario')


let senha = document.getElementById('senha')
let labelSenha = document.getElementById('labelSenha')


usuario.addEventListener ('keyup', () => {
if(usuario.value.length <= 3){
labelUsuario.setAttribute('style', 'color: red')
labelUsuario.innerHTML = 'Usuario *Insira no mínimo 3 caracteres'
usuarios.setAttribute('style', 'border-color: red')

} else {
  labelUsuario.setAttribute('style', 'color: green')
  labelUsuario.innerHTML = 'Usuário'
  usuario.setAttribute('style', 'border-color: green')

}
  
})

senha.addEventListener('keyup', () => {
if(senha.value.length <= 5){
labelSenha.setAttribute('style', 'color: red')
labelSenha.innerHTML = 'Senha *Insira no mínimo 5 caracteres'
senha.setAttribute('style', 'border-color: red')
 
} else {
  labelSenha.setAttribute('style', 'color: green')
  labelSenha.innerHTML = 'Senha'
  senha.setAttribute('style', 'border-color: green')

}
  
})

/*Checagem para saber se já existe um Web Worker*/
let w;

    function startWorker() { 
      if (typeof (w) == "undefined") { /*Aqui ele verifica se existe algo na variável  w */
        w = new Worker("script.js"); /*Como ela esta indefinidade ele a transforma em um Web Worker*/
      }
      w.onmessage = function (event) {
        document.getElementById("result").innerHTML = event.data; /*Aqui é a mensagem enviada no Web Worker, os segundos, e escreve no input result*/
      }
    }

    function stopWorker() { 
      w.terminate();
      w = undefined; /*Aqui o Web Worker termina com o clique no botão, e transforma a variável em indefenida novamente*/
    }