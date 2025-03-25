document.addEventListener("DOMContentLoaded", function() {
    // Captura o formulário de busca e previne o comportamento padrão de envio
    const searchForm = document.querySelector(".search-form");
    if (searchForm) {
      searchForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // Obtém os valores dos campos do formulário
        const service = searchForm.querySelector("input").value;
        const selects = searchForm.querySelectorAll("select");
        const location = selects[0].value;
        const serviceType = selects[1].value;
        
        // Exibe os dados capturados (aqui você pode implementar a lógica de busca)
        console.log("Busca realizada:", service, location, serviceType);
        alert(`Busca realizada:\nServiço: ${service}\nLocal: ${location}\nTipo: ${serviceType}`);
      });
    }
  
    // Evento de clique para os botões de "Fale com o Profissional"
    const contactButtons = document.querySelectorAll(".contador-card button");
    contactButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const card = button.closest(".contador-card");
        const name = card.querySelector("h3").textContent;
        alert(`Contato iniciado com ${name}`);
      });
    });
  
    // Configuração do rating interativo
    document.querySelectorAll('.rating').forEach(function(ratingElem) {
      const stars = ratingElem.querySelectorAll('span');
      stars.forEach(function(star) {
        star.addEventListener('click', function() {
          const ratingValue = parseInt(star.getAttribute('data-value'));
          ratingElem.setAttribute('data-rating', ratingValue);
          // Atualiza a exibição das estrelas
          stars.forEach(function(s) {
            if (parseInt(s.getAttribute('data-value')) <= ratingValue) {
              s.classList.add('filled');
              s.innerHTML = '&#9733;'; // estrela preenchida
            } else {
              s.classList.remove('filled');
              s.innerHTML = '&#9734;'; // estrela vazia
            }
          });
          alert(`Você avaliou com ${ratingValue} estrela(s)!`);
        });
      });
    });
  });
  