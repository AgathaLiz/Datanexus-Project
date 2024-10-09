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