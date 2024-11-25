window.onload = function() {
    // Recupera as informações armazenadas no localStorage
    let passagem = JSON.parse(localStorage.getItem("passagemEscolhida"));
    
    // Verifica se as informações foram recuperadas
    if (passagem) {
        // Preenche os elementos HTML com as informações da passagem
        document.getElementById("imagem-passagem").src = passagem.imagem;
        document.getElementById("nome-lugar").innerText = passagem.nomeLugar;
        document.getElementById("preco").innerText = passagem.preco;
    } else {
        // Caso não haja dados no localStorage
        console.error("Nenhuma passagem foi selecionada.");
    }
};


window.onload = function() {
    // Recupera as informações armazenadas no localStorage
    let passagem = JSON.parse(localStorage.getItem("passagemEscolhida"));
    
    // Verifica se as informações foram recuperadas
    if (passagem) {
        // Preenche os elementos HTML com as informações da passagem
        document.getElementById("imagem-passagem").src = passagem.imagem;
        document.getElementById("nome-lugar").innerText = passagem.nomeLugar;
        document.getElementById("preco").innerText = passagem.preco;
    } else {
        // Caso não haja dados no localStorage
        console.error("Nenhuma passagem foi selecionada.");
    }
};

  // Função para limpar o localStorage e redirecionar
  function trocarPassagem() {
    // Limpa as informações da passagem armazenadas no localStorage
    localStorage.removeItem("passagemEscolhida");

    // Redireciona o usuário para a página inicial (ou qualquer outra página)
    window.location.href = "index.html";  // Substitua por sua página inicial ou página desejada
}