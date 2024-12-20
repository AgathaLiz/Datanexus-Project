const locationElement = document.getElementById('location'); // Elemento para mostrar a localização do usuário
// Verifição para ver se o navegador suporta a API de geolocalização
if (navigator.geolocation) {
//Função para pegar a localização do usuário
// getCurrentPosition pega a localização atual do usuário
navigator.geolocation.getCurrentPosition(function(position) {
    // Extrai a latitude e longitude da posição
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Inicializa o mapa com a posição do usuário na localização do usuário
    const map = L.map('map').setView([latitude, longitude], 13);

    // Adiciona uma camada de tile do OpenStreetMap (tiles em mapas digitais, são pequenas imagens que quando juntas, formam um mapa grande.
    // Ao dar zoom, o navegador utiliza somente os tiles daquela determinada parte do mapa, ao invés de carregar tudo de uma vez)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { //URL que especifica como os tiles devem ser carregados, z,x,y representam subdominios, z = é o nível de zoom, x e y = as coordenas do mapa  
        //openstreetmap é um projeto colaborativo e gratuito, que disponibiliza gratuitamente mapas digitais
        maxZoom: 19, //A quantidade máxima de zoom permitida
        attribution: '© OpenStreetMap' //atributo que adiciona a marca do openStreetmap
    }).addTo(map); //adiciona o mapa com tudo o que definimos anteriormente

    // Adiciona um marcador na localização do usuário
    const marker = L.marker([latitude, longitude]).addTo(map); //criar um marcador com a localização atual do usuário, e o coloca no mapa
    marker.bindPopup("<b>Essa é a sua localização atual!</b>").openPopup(); //E abre um balão com essa frase

    //Aqui estou pegando uma Api de geocodificação reversa
    //significa que, estou pegando a constante de latitude e longitude, e convertendo para endereço, cidade, país...e etc.
    const apiURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`;
    //formt=json, diz a API que a respostadeve ser em json (Javascript Object Notation)
    //lat=${latitude} e lon=${longitude} pega os valores das constantes latitude e longitude e é inserido no URL
    //zoom=10 Define o nível máximo de resposta. Quanto maior o zoom for, mais detalhada a resposta vai ser. O nível 10 é um valor adequado para se obter o nome de uma cidade por exemplo
    //adressdetails=1 isso indica que as respostas devem ter os detalhes do endereço como cidade, estado e país.
    
    //Ela faz a solicitação para a URL anteriormente criada e quando resolvida retorna a resposta da Api
  fetch(apiURL)
   .then(response => response.json()) //Converte a responde em JSON
   .then(data=> {//Função para retornar o endereço detalhado
    const city = data.address.city || data.address.town || data.address.village; //Retorna a cidade que o usuário está, se não tiver cidade(grande), retorna uma cidade pequena, e se não tiver cidadepewuen retorna um vilarejo.
    const state = data.address.state; //Retorna o estado.
    const country = data.address.country; //Retorna o páis.

    locationElement.innerHTML = `Você está em: ${city}, ${state}, ${country}`;//Escreve no paragráfo com id location, a cidade, estado e país o qual o usuário está
   })

   .catch(() => {//É um operador de erro, que, caso a API esteja fora de ar, ou, de algum erro, ele irá retornar essa menssagem.
    locationElement.innerHTML = "Não foi possível obter sua cidade";
});

}, function() {// Função para o caso que o usuário negar a local a geolocalizção
    alert("A geolocalização falhou. A posição padrão será usada."); //Avisa o usuário o que será feito
    // Inicializa o mapa em uma localização padrão (São Paulo)
    const map = L.map('map').setView([-23.5505, -46.6333], 13);
    //Repete o mesmo processo, mas, com a localização de São Paulo
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
}); 

} else {
// Para o caso de o navegador não suportar a geolocalização
alert("Geolocalização não é suportada pelo seu navegador.");
}
