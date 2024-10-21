
let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');


let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');

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


/*api*/




usuario.addEventListener('keyup', () => {
if(usuario.value.length <= 3){
labelUsuario.setAttribute('style', 'color: red');
labelUsuario.innerHTML = 'Usuario *Insira no mínimo 3 caracteres'
usuario.setAttribute('style', 'border-color: red');

} else {
  labelUsuario.setAttribute('style', 'color: green');
  labelUsuario.innerHTML = 'Usuário'
  usuario.setAttribute('style', 'border-color: green');

}
  
})

senha.addEventListener('keyup', () => {
if(senha.value.length <= 5){
labelSenha.setAttribute('style', 'color: red');
labelSenha.innerHTML = 'Senha *Insira no mínimo 5 caracteres'
senha.setAttribute('style', 'border-color: red');
 
} else {
  labelSenha.setAttribute('style', 'color: green');
  labelSenha.innerHTML = 'Senha'
  senha.setAttribute('style', 'border-color: green');

}
  
})




function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }
      
    }
  })
}