document.addEventListener("DOMContentLoaded", function() {
    // Busca: captura o formulário e evita o envio padrão
    const searchForm = document.querySelector(".search-form");
    if (searchForm) {
      searchForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const service = searchForm.querySelector("input").value;
        const selects = searchForm.querySelectorAll("select");
        const location = selects[0].value;
        const serviceType = selects[1].value;
        
        // Aqui você pode integrar a lógica de busca (API, filtros etc.)
        console.log("Busca realizada:", service, location, serviceType);
        alert(`Busca realizada:\nServiço: ${service}\nLocal: ${location}\nTipo: ${serviceType}`);
      });
    }
  
    // Sistema de Rating interativo
    document.querySelectorAll('.rating').forEach(function(ratingElem) {
      const stars = ratingElem.querySelectorAll('span');
      stars.forEach(function(star) {
        star.addEventListener('click', function() {
          const ratingValue = parseInt(star.getAttribute('data-value'));
          ratingElem.setAttribute('data-rating', ratingValue);
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
  
    // Evento para os botões de "Fale com o Profissional"
    const contactButtons = document.querySelectorAll(".contador-card button");
    contactButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const card = button.closest(".contador-card");
        const name = card.querySelector("h3").textContent;
        alert(`Contato iniciado com ${name}`);
      });
    });
  });
  