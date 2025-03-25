document.addEventListener("DOMContentLoaded", function() {
  // Captura o formulário de busca
  const searchForm = document.querySelector(".search-form");
  if (searchForm) {
      searchForm.addEventListener("submit", function(e) {
          e.preventDefault(); // Evita o recarregamento da página

          // Obtém os valores dos campos
          const service = searchForm.querySelector("input").value;
          const location = searchForm.querySelectorAll("select")[0].value;
          const type = searchForm.querySelectorAll("select")[1].value;

          // Aqui você pode integrar a lógica de busca com API ou filtros
          console.log("Busca realizada:", service, location, type);
          alert(`Busca realizada:\nServiço: ${service}\nLocal: ${location}\nTipo: ${type}`);
      });
  }

  // Adiciona evento aos botões de "Fale com o Profissional"
  const contactButtons = document.querySelectorAll(".contador-card button");
  contactButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          // Captura o nome do contador no card
          const card = button.closest(".contador-card");
          const name = card.querySelector("h3").textContent;
          alert(`Contato iniciado com ${name}`);
      });
  });
});