
document.addEventListener('DOMContentLoaded', function() {
    const idaEVoltaBtn = document.getElementById('ida-e-volta');
    const somenteIdaBtn = document.getElementById('somente-ida');
    const returnDateField = document.querySelector('.return-date');
  
    function toggleTripOption(event) {
        // Remove active class from both buttons
        idaEVoltaBtn.classList.remove('active');
        somenteIdaBtn.classList.remove('active');
        
        // Add active class to the clicked button
        event.target.classList.add('active');
  
        // Show or hide the return date field based on the selection
        if (event.target.id === 'somente-ida') {
            returnDateField.style.display = 'none'; // Hide return date field
        } else {
            returnDateField.style.display = 'block'; // Show return date field
        }
      }
  
      idaEVoltaBtn.addEventListener('click', toggleTripOption);
     somenteIdaBtn.addEventListener('click', toggleTripOption);
      
    });




    document.addEventListener('DOMContentLoaded', function() {
        let contador = 0;
        const inputElement = document.getElementById('passageiros');
        const incrementarBtn = document.getElementById('incrementar');
        const decrementarBtn = document.getElementById('decrementar');
      
        // Mostrar botões ao focar no campo de passageiros
        inputElement.addEventListener('focus', () => {
          incrementarBtn.classList.remove('hidden');
          decrementarBtn.classList.remove('hidden');
        });
      
        // Ocultar botões quando clicar fora do campo e dos botões
        inputElement.addEventListener('blur', () => {
          setTimeout(() => {
            if (!document.activeElement.closest('.passageiros-container')) {
              incrementarBtn.classList.add('hidden');
              decrementarBtn.classList.add('hidden');
            }
          }, 100);  // Pequeno atraso para permitir clique nos botões
        });
      
        // Incrementar contador
        incrementarBtn.addEventListener('mousedown', (event) => {
          event.preventDefault();
          contador++;
          inputElement.value = contador;
         
        if (contador>9){
          alert("Não é possível comprar mais de 10 passagens de uma vez");
          document.getElementById('incrementar').disabled=true;
        }
        });
      
        // Decrementar contador
        decrementarBtn.addEventListener('mousedown', (event) => {
          event.preventDefault();
          if (contador > 0) {
            contador--;
            inputElement.value = contador;
          }
      
         
      });
      
        });
