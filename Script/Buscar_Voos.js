const searchInput = document.getElementById('search'); //input


searchInput.addEventListener('input', (event) => { //Captura a escrita no input

    const value = formaString(event.target.value); //Processa o valor digitado

   
    const items = document.querySelectorAll('.items .item'); //Lista, e os itens
    const semResultados = document.getElementById('sem_resultados'); // Mensagem caso nada seja encontrado

    let existeViagem = false; 

   
    if (value != '') { //Verifica se o input está vazio
        // Itera por cada item (viagem) da lista
        items.forEach(item => {
            
            const cidade = item.querySelector('.item-title').textContent;
            const pais = item.querySelector('.item-subtitle').textContent;

           
            if (formaString(cidade).indexOf(value) !== -1 || formaString(pais).indexOf(value) !== -1) { //Verifica se o texto digitado corresponde a alguma viagem 
                item.style.display = 'flex'; // Exibe a viagem correspondente
                existeViagem = true; //Indica que pelo menos uma viagem foi encontrada
            } else {
                item.style.display = 'none'; // Esconde o item que não corresponde
            }
        });

       
        if (existeViagem) { //Se uma viagem foi encontrada, esconde a mensagem de "sem resultados"
            semResultados.style.display = 'none';
        } else {
            semResultados.style.display = 'block'; //Se nenhuma viagem for encontrada, mostra a mensagem
        }
    } else {
        // Se o campo de busca está vazio, exibe todos os itens da lista
        items.forEach(item => item.style.display = 'flex');

        // Garante que a mensagem "sem resultados" não será exibida
        semResultados.style.display = 'none';
    }
});

// Função auxiliar para normalizar o texto digitado
function formaString(value) {
    return value
        .toLowerCase() // Converte para minúsculas
        .trim() // Remove espaços extras no início e no fim
        .normalize('NFD') // Normaliza os caracteres para separar acentos
        .replace(/[\u0300-\u036f]/g, ''); // Remove os acentos
}
