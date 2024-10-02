document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Impedir o envio padrão do formulário
    event.preventDefault();

    // Obter os valores dos campos do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Seleciona o botão usando o seletor correto
    const buttonForm = document.querySelector("[data_form_button]");

    // Função que adiciona a imagem de carregamento ao botão
    const addLoad = () => {
      buttonForm.innerHTML = renderButton.image;
    };

    // Função que remove a imagem de carregamento e retorna o texto original
    const removedLoad = () => {
      buttonForm.innerHTML = renderButton.message;
    };

    // Criar a URL do WhatsApp com os dados do formulário
    const urlStr = `https://wa.me/5547999327137?text=Olá, meu nome é ${name} e meu email é ${email}.
    Mensagem: ${message}!`;

    // Adiciona o spinner ao botão
    addLoad();

    // Simula um delay para redirecionamento (apenas para fins visuais, você pode remover se não precisar)
    setTimeout(() => {
      // Remove o spinner e volta ao texto original
      removedLoad();

      // Redirecionar o usuário para o link do WhatsApp
      window.location.href = urlStr;
    }, 2000); // 2 segundos de delay antes de redirecionar
  });

// Renderização do botão de envio com a animação de carregamento
const renderButton = {
  image:
    '<img class="footer__button--animation" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWI0azVpZzY1YzJqMDlxNjFlZHNhNmE0aGQ3dnhic2h4eGY2dmdhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bu3XilJ5BOiSGic/giphy.gif" alt="Loading">',
  message: "SEND MESSAGE",
};

(function () {
  const MAX_VISIBLE_CARDS = 6;
  const cards = document.querySelectorAll(".card");

  const updateVisibleCards = () => {
    const width = window.innerWidth;
    const isMobile = width <= 768; // Ajuste o valor conforme necessário

    cards.forEach((card, index) => {
      if (isMobile) {
        if (index >= MAX_VISIBLE_CARDS) {
          card.style.display = "none";
        } else {
          card.style.display = "block";
        }
      } else {
        card.style.display = "block"; // Exibe todos os cards em telas maiores
      }
    });
  };

  // Chama a função ao carregar a página e ao redimensionar a tela
  window.addEventListener("load", updateVisibleCards);
  window.addEventListener("resize", updateVisibleCards);
})();

