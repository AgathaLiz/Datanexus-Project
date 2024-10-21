document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll('.step');
    const nextButtons = document.querySelectorAll('.next-button');
    const tipoViagemSelect = document.getElementById("tipo-viagem");
    const destinoNacional = document.getElementById("destino-nacional");
    const destinoInternacional = document.getElementById("destino-internacional");
    const estadoOrigemSelect = document.getElementById("estado-origem");
    const cidadeOrigemSelect = document.getElementById("cidade-origem");
    const estadoDestinoSelect = document.getElementById("estado-destino");
    const paisDestinoSelect = document.getElementById("pais-destino");
    const resetButton = document.getElementById("reset-button");
    const resumoDiv = document.getElementById("resumo");

    let currentStep = 0;
    const formData = {};

    // Dados de exemplo para cidades por estado
    const cidadesPorEstado = {
        "AC": ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá"],
        "AL": ["Maceió", "Arapiraca", "Palmeira dos Índios", "Rio Largo"],
        "AP": ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque"],
        "BA": ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari"],
        "CE": ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú"],
        "DF": ["Brasília"],
        "ES": ["Vitória", "Vila Velha", "Serra", "Cariacica"],
        "GO": ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde"],
        "MA": ["São Luís", "Imperatriz", "São José de Ribamar", "Timon"],
        "MT": ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop"],
        "MS": ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá"],
        "MG": ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"],
        "PA": ["Belém", "Ananindeua", "Santarém", "Marabá"],
        "PB": ["João Pessoa", "Campina Grande", "Santa Rita", "Patos"],
        "PR": ["Curitiba", "Londrina", "Maringá", "Ponta Grossa"],
        "PE": ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru"],
        "PI": ["Teresina", "Parnaíba", "Picos", "Floriano"],
        "RJ": ["Rio de Janeiro", "Niterói", "São Gonçalo", "Duque de Caxias"],
        "RN": ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante"],
        "RS": ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas"],
        "RO": ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena"],
        "RR": ["Boa Vista", "Rorainópolis", "Caracaraí", "Alto Alegre"],
        "SC": ["Florianópolis", "Joinville", "Blumenau", "São José"],
        "SP": ["São Paulo", "Campinas", "Santos", "São José dos Campos"],
        "SE": ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana"],
        "TO": ["Palmas", "Araguaína", "Gurupi", "Porto Nacional"]
    };

    // Dados de exemplo para países por continente
    const countryOptions = {
        "América": ["Brasil", "Argentina", "Estados Unidos", "Canadá", "México"],
        "Europa": ["França", "Alemanha", "Itália", "Espanha", "Portugal"],
        "Ásia": ["Japão", "China", "Índia", "Tailândia", "Coreia do Sul"],
        "África": ["África do Sul", "Egito", "Marrocos", "Quênia", "Nigéria"]
    };

    // Mostrar a primeira etapa
    showStep(currentStep);

    // Adicionar event listeners para os botões "Próximo"
    nextButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (validateStep(currentStep)) {
                collectData(currentStep);
                currentStep++;
                showStep(currentStep);
                if (currentStep === steps.length - 1) {
                    displayResumo();
                }
            }
        });
    });

    // Event listener para o tipo de viagem
    tipoViagemSelect.addEventListener("change", function() {
        const tipoViagem = this.value;
        if (tipoViagem === "nacional") {
            destinoNacional.style.display = "block";
            destinoInternacional.style.display = "none";
        } else if (tipoViagem === "internacional") {
            destinoNacional.style.display = "none";
            destinoInternacional.style.display = "block";
        } else {
            destinoNacional.style.display = "none";
            destinoInternacional.style.display = "none";
        }
    });

    // Event listener para o estado de origem para carregar as cidades
    estadoOrigemSelect.addEventListener("change", function() {
        const estado = this.value;
        cidadeOrigemSelect.innerHTML = '<option value="">Selecione a cidade...</option>';
        if (estado && cidadesPorEstado[estado]) {
            cidadesPorEstado[estado].forEach(cidade => {
                const option = document.createElement("option");
                option.value = cidade;
                option.textContent = cidade;
                cidadeOrigemSelect.appendChild(option);
            });
        }
    });

    // Event listener para o país de destino para carregar os países do continente
    paisDestinoSelect.addEventListener("change", function() {
        // Nenhuma ação necessária aqui, pois os países já estão carregados
    });

    // Event listener para o botão de reset
    if (resetButton) {
        resetButton.addEventListener("click", function() {
            // Resetar formData
            for (let key in formData) {
                delete formData[key];
            }
            // Resetar selects e inputs
            document.querySelectorAll('select, input').forEach(input => input.value = "");
            // Resetar exibição de destino
            destinoNacional.style.display = "none";
            destinoInternacional.style.display = "none";
            // Resetar resumo
            resumoDiv.innerHTML = "";
            // Voltar para a primeira etapa
            currentStep = 0;
            showStep(currentStep);
        });
    }

    // Função para mostrar a etapa atual
    function showStep(step) {
        steps.forEach((s, index) => {
            if (index === step) {
                s.classList.add("active");
            } else {
                s.classList.remove("active");
            }
        });
    }

    // Função para validar a etapa atual
    function validateStep(step) {
        let valid = true;
        const stepElement = steps[step];
        const inputs = stepElement.querySelectorAll("select, input");
        inputs.forEach(input => {
            if (input.hasAttribute("required") && !input.value) {
                alert("Por favor, preencha todos os campos.");
                valid = false;
            }
        });

        // Verificar se, na etapa 4, o destino está selecionado
        if (step === 3) {
            const tipoViagem = document.getElementById("tipo-viagem").value;
            if (tipoViagem === "nacional" && !estadoDestinoSelect.value) {
                alert("Por favor, selecione o estado de destino.");
                valid = false;
            }
            if (tipoViagem === "internacional" && !paisDestinoSelect.value) {
                alert("Por favor, selecione o país de destino.");
                valid = false;
            }
        }

        return valid;
    }

    // Função para coletar os dados da etapa atual
    function collectData(step) {
        const stepElement = steps[step];
        const inputs = stepElement.querySelectorAll("select, input");
        inputs.forEach(input => {
            formData[input.name] = input.value;
        });
    }

    // Função para exibir o resumo das informações
    function displayResumo() {
        let resumoHTML = `
            <p><strong>Nome:</strong> ${formData.nome}</p>
            <p><strong>E-mail:</strong> ${formData.email}</p>
            <p><strong>Estado de Origem:</strong> ${getEstadoNome(formData["estado-origem"])}</p>
            <p><strong>Cidade de Origem:</strong> ${formData["cidade-origem"]}</p>
            <p><strong>Tipo de Viagem:</strong> ${capitalize(formData["tipo-viagem"])}</p>
        `;

        if (formData["tipo-viagem"] === "nacional") {
            resumoHTML += `<p><strong>Estado de Destino:</strong> ${getEstadoNome(formData["estado-destino"])}</p>`;
        } else if (formData["tipo-viagem"] === "internacional") {
            resumoHTML += `<p><strong>País de Destino:</strong> ${getPaisNome(formData["pais-destino"])}</p>`;
        }

        resumoDiv.innerHTML = resumoHTML;
    }

    // Função para capitalizar a primeira letra
    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Função para obter o nome do estado a partir do código
    function getEstadoNome(codigo) {
        const estados = {
            "AC": "Acre",
            "AL": "Alagoas",
            "AP": "Amapá",
            "BA": "Bahia",
            "CE": "Ceará",
            "DF": "Distrito Federal",
            "ES": "Espírito Santo",
            "GO": "Goiás",
            "MA": "Maranhão",
            "MT": "Mato Grosso",
            "MS": "Mato Grosso do Sul",
            "MG": "Minas Gerais",
            "PA": "Pará",
            "PB": "Paraíba",
            "PR": "Paraná",
            "PE": "Pernambuco",
            "PI": "Piauí",
            "RJ": "Rio de Janeiro",
            "RN": "Rio Grande do Norte",
            "RS": "Rio Grande do Sul",
            "RO": "Rondônia",
            "RR": "Roraima",
            "SC": "Santa Catarina",
            "SP": "São Paulo",
            "SE": "Sergipe",
            "TO": "Tocantins"
        };
        return estados[codigo] || codigo;
    }

    // Função para obter o nome do país a partir do código
    function getPaisNome(codigo) {
        const paises = {
            "USA": "Estados Unidos",
            "FR": "França",
            "JP": "Japão",
            "AR": "Argentina",
            "CA": "Canadá",
            "MX": "México",
            "IT": "Itália",
            "ES": "Espanha",
            "PT": "Portugal",
            "CN": "China",
            "IN": "Índia",
            "TH": "Tailândia",
            "KR": "Coreia do Sul",
            "ZA": "África do Sul",
            "EG": "Egito",
            "MA": "Marrocos",
            "KE": "Quênia",
            "NG": "Nigéria"
            // Adicione mais países conforme necessário
        };
        return paises[codigo] || codigo;
    }
});
