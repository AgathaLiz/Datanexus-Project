

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelconfirmSenha = document.querySelector('#labelconfirmSenha')
let validconfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
if(nome.value.length <= 3){
labelNome.setAttribute('style', 'color: red')
labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
nome.setAttribute('style', 'border-color: red')
validNome = false  
} else {
  labelNome.setAttribute('style', 'color: green')
  labelNome.innerHTML = 'Nome'
  nome.setAttribute('style', 'border-color: green')
  validNome = true
}
  
})

usuario.addEventListener('keyup', () => {
if(usuario.value.length <= 3){
labelUsuario.setAttribute('style', 'color: red')
labelUsuario.innerHTML = 'Usuario *Insira no mínimo 3 caracteres'
usuario.setAttribute('style', 'border-color: red')
validUsuario = false  
} else {
  labelUsuario.setAttribute('style', 'color: green')
  labelUsuario.innerHTML = 'Usuário'
  usuario.setAttribute('style', 'border-color: green')
  validUsuario = true
}
  
})

email.addEventListener('keyup', () => {
if(email.value.length <= 8){
labelEmail.setAttribute('style', 'color: red')
labelEmail.innerHTML = 'E-mail *Insira no mínimo 8 caracteres'
email.setAttribute('style', 'border-color: red')
validEmail = false  
} else {
  labelEmail.setAttribute('style', 'color: green')
  labelEmail.innerHTML = 'E-mail'
  email.setAttribute('style', 'border-color: green')
  validEmail = true
}
  
})

senha.addEventListener('keyup', () => {
if(senha.value.length <= 5){
labelSenha.setAttribute('style', 'color: red')
labelSenha.innerHTML = 'Senha *Insira no mínimo 5 caracteres'
senha.setAttribute('style', 'border-color: red')
validSenha = false  
} else {
  labelSenha.setAttribute('style', 'color: green')
  labelSenha.innerHTML = 'Senha'
  senha.setAttribute('style', 'border-color: green')
  validSenha = true
}
  
})


confirmSenha.addEventListener('keyup', () => {
if(senha.value != confirmSenha.value){
labelconfirmSenha.setAttribute('style', 'color: red')
labelconfirmSenha.innerHTML = 'Senha *As senhas não conferem'
confirmSenha.setAttribute('style', 'border-color: red')
validconfirmSenha = false
} else {
  labelconfirmSenha.setAttribute('style', 'color: green')
  labelconfirmSenha.innerHTML = 'Confirmar Senha'
  confirmSenha.setAttribute('style', 'border-color: green')
  validconfirmSenha = true
}
  
})

function cadastrar(){
  if(validNome && validUsuario && validEmail && validSenha && validconfirmSenha){
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
     msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
 
    setTimeout(()=>{
window.location.href = '' }, 3000)
  
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente</strong>'
    msgSuccess.setAttribute('style', 'display: none')
    msgSuccess.innerHTML = ''
  
  }


}


/*limite de letras*/

function limiteLetras() {

    let text;

    if (document.getElementById("nome").validity.rangeOverflow) {

      text = "Você ultrapassou o limite de letras, abrevie o sobrenome";
    } else {

      text="";
    }

    document.getElementById("paragLimite").innerHTML = text;
}


