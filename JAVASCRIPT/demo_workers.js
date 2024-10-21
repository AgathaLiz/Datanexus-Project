function timedCount(){
  i++; /*Sempre aumenta de um em um*/ 
  postMessage(i); /*Aqui ele manda para a página*/
  setTimeout("timedCount()", 1000); /*Aqui ele chama a função novamente depois de 1000 milissegundos */ 
}


let i = 0; /*Váriável para iniciar zerado*/



timedCount();