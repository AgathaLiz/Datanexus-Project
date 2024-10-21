let i = 0; /*Váriável para iniciar zerado*/

function timedCount(){
  i++; /*Sempre aumenta de um em um*/ 
  postMessage(i); /*Aqui ele manda para a página*/
  setTimeout("timedCount()", 1000); /*Aumenta o i a cada segundo */
}

timedCount(); /*Chama a função*/
