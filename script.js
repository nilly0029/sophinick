document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".card-image");

  images.forEach(image => {
    image.addEventListener("click", function () {
      const card = image.closest(".card");

      // Gira o cartão
      card.classList.add("flipped");

      // Volta após 10 segundos (10000 milissegundos)
      setTimeout(() => {
        card.classList.remove("flipped");
      }, 10000);
    });
  });
});


document.addEventListener("DOMContentLoaded", function () 
  const btnSaiba = document.getElementById("btn-saiba");
  const btnClique = document.getElementById("btn-clique");
  const btnEnviar = document.getElementById("btn-enviar");
  const btnCadastre = document.getElementById("btn-cadastre");