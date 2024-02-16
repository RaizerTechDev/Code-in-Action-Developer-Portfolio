$(function ($) {
  $("form").submit(function (event) {
    event.preventDefault();

    $.ajax({
      url: "https://formspree.io/f/xdoqgzjp",
      method: "POST",
      data: {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val(),
      },
      dataType: "json",
    })
      .done(function () {
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
        alert(
          "EMAIL RECEBIDO COM SUCESSO🤠👋🏼 || AGRADECEMOS SEU CONTATO E LOGO RESPONDEREMOS!!!"
        );
      })
      .fail(function () {
        alert("Erro ao enviar email!");
      });
  });
});
