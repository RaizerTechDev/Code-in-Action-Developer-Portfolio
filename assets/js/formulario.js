// Esta função é uma expressão de função anônima que é invocada imediatamente (IIFE - Immediately Invoked Function Expression).
(function () {
  // Aqui são definidos os elementos HTML relevantes do formulário, selecionados por meio de seletores de atributos.
  const htmlElements = {
    formElement: document.querySelector("form"),
    userName: document.querySelector("[js_data_name]"),
    userEmail: document.querySelector("[js_data_email]"),
    userMessage: document.querySelector("[js_data_message]"),

    buttonForm: document.querySelector("[js_data_form_button]"),
  };

  // Aqui são definidos os endereços relevantes para a API e para as páginas de erro e sucesso.
  const adresses = {
    api: "https://api.sheetmonkey.io/form/3aoUixTgNMNQr9ZVWiDmSC",
    errorPage: "http://127.0.0.1:5501/error_page.html",
    successPage: "http://127.0.0.1:5501/success_page.html",
  };

  // Aqui são definidos objetos que representam o botão de envio do formulário, tanto em forma de imagem de carregamento como de mensagem.
  const renderButton = {
    image:
      '<img class="footer__button--animation" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWI0azVpZzY1YzJqMDlxNjFlZHNhNmE0aGQ3dnhic2h4eGY2dmdhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bu3XilJ5BOiSGic/giphy.gif" alt="Loading">',
    message: "SEND MESSAGE",
  };

  // Esta função adiciona a imagem de carregamento ao botão de envio do formulário.
  const addLoad = () => {
    htmlElements.buttonForm.innerHTML = renderButton.image;
  };

  // Esta função remove a imagem de carregamento do botão de envio do formulário.
  const removedLoad = () => {
    htmlElements.buttonForm.innerHTML = renderButton.message;
  };

  // Esta função define um atraso antes de redirecionar para a página de sucesso após o envio bem-sucedido do formulário.
  const delaySuccess = () => {
    setTimeout(() => {
      window.location.href = adresses.successPage;
      removedLoad();
    }, 1000);
  };

  // Esta função define um atraso antes de redirecionar para a página de erro após o envio malsucedido do formulário.
  const delayError = () => {
    setTimeout(() => {
      window.location.href = adresses.errorPage;
      removedLoad();
    }, 1000);
  };

  // Esta função lida com o envio do formulário.
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário.

    // Adiciona a imagem de carregamento ao botão de envio do formulário.
    addLoad();

    // Obtém os valores dos campos do formulário.
    const userNameValue = htmlElements.userName.value;
    const userEmailValue = htmlElements.userEmail.value;
    const userMessageValue = htmlElements.userMessage.value;

    // Envia os dados do formulário para a API.
    fetch(adresses.api, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userNameValue,
        email: userEmailValue,
        message: userMessageValue,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      }),
    })
      // Se o envio for bem-sucedido, redireciona para a página de sucesso após um atraso.
      .then(() => delaySuccess())
      // Se ocorrer um erro no envio, redireciona para a página de erro após um atraso.
      .catch(() => delayError());
  };

  // Adiciona um ouvinte de evento de envio ao formulário para chamar a função handleSubmit quando o formulário for enviado.
  htmlElements.formElement.addEventListener("submit", handleSubmit);
})();
