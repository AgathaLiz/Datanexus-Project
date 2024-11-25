

/*localStorage- API*/

/*mudança para mostrar o nome digitado pelo usuário
*/ 
function checkUser() {

    const userName = localStorage.getItem("name") /*aqui pegamos o valor armazenador no localStorage e transformamos em uma const de nome "userName"*/

    if(userName) { /*Se tiver um nome/ valor armazenador no localStorage*/

        nameForm.style.display = "none"; /*mudamos o display do formulario para none, ou seja, o esconde-mos*/
        welcomeContainer.style.display = "flex"; /*e ao inves do fomulario mostramos a frase*/
        logoutBtn.style.display = "inline-block";
        agradecimentoMens.style.display = "inline";

        const userNameElement = document.querySelector("#username"); /*pegamos o elemento com o id "username" e o transformamos em uma const(constante) de nome "userNameElement"; (username é o span)*/

        userNameElement.textContent = userName;/* O conteudo de texto do span será o mesmo que da const "userName"*/

    } else {

        nameForm.style.display = "flex"; /*mostrar o formulario*/
        welcomeContainer.style.display = "none"; /*esconder a frase*/
        logoutBtn.style.display = "none";
        agradecimentoMens.style.display = "none"
    }
}

/*consts*/

const nameForm= document.querySelector("#name-form"); /*pegamos o elemento com o id "name-form" e o transformamos em uma const(constante) de nome "nameForm"; (name-form é o form)*/
const welcomeContainer= document.querySelector("#welcome"); /*pegamos o elemento com o id "welcome" e o transformamos em uma const(constante) de nome "welcomeContainer"; (welcome é uma div)*/
const logoutBtn= document.querySelector("#logout"); /*pegamos o elemento com o id "logout" e o transformamos em uma const(constante) de nome "logoutBnt"; (logout é um botão)*/
const agradecimentoMens= document.querySelector("#agradecimento_mensagem");
/*Evento ao enviar*/

nameForm.addEventListener('submit',(e) => {/*pegamos o nameForm(o formulario) e adicionamos um evento nele, ao submit(enviar) ele salvará o nome digitado no localstore*/
    e.preventDefault(); /*o (e) se refere ao evento em si; ao ser clicado não recarregará a pagina*/

    const nameInput= document.querySelector("#name"); /*pegamos o elemento com o id "name" e o transformamos em uma const(constante) de nome "nameInput"; (name é o input onde o usuario digita o nome)*/

    localStorage.setItem("name", nameInput.value); /*Vamos determinar um item/um valor no armazenamento local (localStorage.setItem) de nome "name" e vamos atribuir o valor da const nameInput como texto(nameInput.value)  */

    nameInput.value= ""; /*aqui zeramos o valor do nameInput, então ele começa como zero e depois ganha o valor digitado pelo usuario*/

    checkUser(); /*executar a verificação*/
});

/*evento ao cliclar no botao de "enviar outra duvida"*/

logoutBtn.addEventListener("click", () => {/*adicionamos o evento de clique no botao*/

    localStorage.removeItem("name");/*vai remover do localstorage o item de nome "name"*/ 

    checkUser(); /*executar a verificação*/
});

checkUser(); /*executar a função logo quando a pagina é carregada*/


