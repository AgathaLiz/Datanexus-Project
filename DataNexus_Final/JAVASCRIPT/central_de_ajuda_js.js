/*botoes de ir e voltar*/ 


function voltar() {

    window.history.back();

}

function avancar() {

    window.history.forward();
    
}

/*envio formulario alerta*/

var botao_formulario = document.getElementById("envio");

botao_formulario.addEventListener("click", function() {
    alert("Seu formulário foi enviado com sucesso");
  });

/*tornar email minusculo*/ 

function minuscula() {

    const x = document.getElementById("email");
    x.value= x.value.toLowerCase();
}

/*qual o tipo de navegador*/

function nomedonavegador(userAgent) {

    if(userAgent.includes('Firefox')) {

        return "Mozilla Firefox";
    } else if (userAgent.includes("SamsungBrowser")) {

        return "Samsung Internet";

    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {

        return "Opera";
    } else if (userAgent.includes("Edge")) {

        return "Microsoft Edge (Legacy)";
    } else if (userAgent.includes("Edg")) {
        return "Microsoft Edge (Chromium)";
    } else if (userAgent.includes("Chrome")) {

        return "Google Chrome or Chromium";
    } else if (userAgent.includes("Safari")) {

        return "Apple Safari";
    } else {

        return "unknown";
    }
}

const navegadornome = nomedonavegador(navigator.userAgent);
console.log('Você está usando: ' + navegadornome);

document.getElementById("navegador").innerHTML= "Você está usando o navegador: " + navegadornome;



 /*window e screen*/
 
 document.getElementById("janela").innerHTML="A largura da janela do seu navegador é: " + window.innerWidth + "px<br>" + "A altura da janela do seu navegador é: " + window.innerHeight + "px";

 document.getElementById("tela").innerHTML="A altura da tela do seu dispositivo é: " + screen.width + "px<br>" +"A largura da janela do seu dispositivo é: " + screen.height + "px";

 document.getElementById("espaco_disponivel").innerHTML="O espaço disponível é: " + screen.availWidth + "px largura e " + screen.availHeight+  "px altura";

 document

 /*temporizador*/

 setTimeout (

     () => {

         alert("Não esqueça de consultar nossas redes sociais!");

     },

    30*1000
);


/*Buscar Chave*/ 

function buscarchave(){
    var x = localStorage.key(0);
    document.getElementById("texto-chave").innerHTML = x;
}