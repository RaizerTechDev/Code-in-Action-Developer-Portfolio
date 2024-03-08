# PROJETO DOCUMENTAÇÃO CSS

💡 Tip →** This template is designed to help you outline and structure your strategic initiatives. It will guide you through the key elements needed for a comprehensive plan.
Template by Rafael Raizer

📢 My Social Networks👇

[Linkedln]([https://www.linkedin.com/in/rafael-raizer/](https://www.linkedin.com/in/rafael-raizer/))

[Git-Hub]([https://github.com/RafaRz76Dev/](https://github.com/RafaRz76Dev/)).

# [Project CSS]

<aside>
<img src="https://www.notion.so/icons/info-alternate_gray.svg" alt="https://www.notion.so/icons/info-alternate_gray.svg" width="40px" /> **Start**

**End Date:** 8 de março de 2024

**Project Leader: @Rafael Raizer** 

</aside>

---

## **🎯 Description**

In this section, provide a brief description of the CSS "Good" Methodology. Including the core goal and why it's important.

# header-footer.css

## **📑 Header**

### **Situation**

1. Resetar CSS para garantir consistência nas margens e tamanhos de caixas 

```css
* {
  margin: 0; /* Zera a margem */
  padding: 0; /* Zera o preenchimento */
  box-sizing: border-box; /* Garante que a largura e a altura incluam a borda e o preenchimento, não apenas o conteúdo */
}

```

1.  Estilos globais para o corpo da página 

```css
body {
  background-color: #0f1232; /* Define a cor de fundo */
  margin: 0; /* Zera a margem */
  padding: 0; /* Zera o preenchimento */
  font-family: "DM Sans", sans-serif; /* Define a família de fontes */
}
```

1. Perfis Sociais no cabeçalho 

```css
.profiles {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem; /* Define o preenchimento de 1rem */
}
```

1.  Título do nome no navegador 

```css
.name-header__title {
  font-size: 2rem; /* Define o tamanho da fonte como 2rem */
  letter-spacing: -0.044rem; /* Define o espaçamento entre as letras como -0.044rem */
  text-decoration: none; /* Remove a decoração do texto */
  color: #fff; /* Define a cor do texto como #fff */
}

```

1. Linha Divisória (  hr-1 )

```css
/* hr */
.block__divider--one {
  margin-top: 8rem; /* Define a margem superior como 8rem */
}
```

## **📑 Footer**

1. Inicio da seção do Rodapé

```css
*.footer-contact {
  background: url("../images/fundo-redes-sociais.jpg") no-repeat; /* Define uma imagem de fundo para o rodapé sem repetição */
  padding: 5em 0; /* Adiciona preenchimento superior e inferior de 5 vezes a altura da fonte atual */
  padding-bottom: 40px; /* Adiciona preenchimento inferior adicional de 40 pixels */
  border-top: 5px solid #3381f3; /* Adiciona uma borda superior de 5 pixels sólidos na cor #3381f3 */
  border-bottom: 5px solid #3381f3; /* Adiciona uma borda inferior de 5 pixels sólidos na cor #3381f3 */
}

```

1. Início do conteúdo do rodapé 

```css
.footer__content {
  width: 100%; /* Define a largura como 100% */
  display: grid; /* Define o modelo de layout como grid */
  grid-template-columns: 1fr 1fr; /* Divide o conteúdo em duas colunas com largura igual */
  gap: 15rem; /* Define o espaçamento entre as colunas como 15 vezes a altura da fonte atual */
  margin-right: 0; /* Remove a margem direita */
}
```

1. Título de contato do Rodapé (h2, span e parágrafo)

```css
.footer__contact--info {
  margin-left: 180px; /* Adiciona margem esquerda de 180 pixels */
  font-size: 5rem; /* Define o tamanho da fonte como 5 vezes a altura da fonte atual */
}
```

```css
.footer__contact--info span {
  border-bottom: 0.25rem solid #ffff; /* Adiciona uma borda inferior de 0.25 vezes a altura da fonte atual na cor #ffff */
  color: rgb(26, 68, 26); /* Define a cor do texto como RGB(26, 68, 26) */
  font-weight: bold; /* Define a espessura da fonte como negrito */
}
```

```css
.footer__description {
  margin-top: 3rem; /* Adiciona margem superior de 3 vezes a altura da fonte atual */
  margin-left: 180px; /* Adiciona margem esquerda de 180 pixels */
  margin-bottom: 3rem; /* Adiciona margem inferior de 3 vezes a altura da fonte atual */
  padding-right: 4rem; /* Adiciona preenchimento à direita de 4 vezes a altura da fonte atual */
  letter-spacing: 0.55rem; /* Adiciona espaçamento entre caracteres de 0.55 vezes a altura da fonte atual */
  line-height: 2; /* Define a altura da linha como o dobro da altura da fonte atual */
  font-weight: bold; /* Define a espessura da fonte como negrito */
}
```

1. Preenchimento Campos Formulário e definindo a cor no placeholder

```css
.form__contact {
  font-weight: 600; /* Define a espessura da fonte como 600 (semi-negrito) */
  font-size: 1.1rem; /* Define o tamanho da fonte como 1.1 vezes a altura da fonte atual */
  text-transform: uppercase; /* Converte o texto para maiúsculas */
  color: hsl(0, 0%, 8%); /* Define a cor do texto como hsl(0, 0%, 8%) */
  padding: 0.7rem 1.6rem 1.4rem 2.4rem; /* Adiciona preenchimento com os valores especificados */
  border-radius: 2px; /* Define o raio da borda como 2 pixels */
  background-color: transparent; /* Define o fundo como transparente */
  border: none; /* Remove a borda */
  border-bottom: 2px solid hsl(0, 0%, 13%); /* Adiciona uma borda inferior de 2 pixels sólidos na cor hsl(0, 0%, 13%) */
  width: 80%; /* Define a largura como 80% */
  display: block; /* Define o elemento como bloco */
  transition: all 300ms ease-in-out; /* Adiciona uma transição de 300 milissegundos com efeito de entrada e saída para todas as propriedades */
  -webkit-transition: all 300ms ease-in-out; /* Adiciona uma transição de 300 milissegundos com efeito de entrada e saída para todas as propriedades (para navegadores WebKit) */
  margin-top: 5rem; /* Adiciona margem superior de 5 vezes a altura da fonte atual */
  margin-left: 0; /* Remove a margem esquerda */
  outline: none; /* Remove o contorno ao receber foco */
  /*Remove a borda do input*/
}
```

```css
.form__contact::placeholder {
  color: #095f04; /* Define a cor do texto de espaço reservado como #095f04 */
}
```

1. Botão de envio do formulário, ao passar o mouse e com animação

```css
.footer__submit--button {
  width: 80%; /* Define a largura como 80% */
  font-size: 1.1rem; /* Define o tamanho da fonte como 1.1 vezes a altura da fonte atual */
  font-weight: bold; /* Define a espessura da fonte como negrito */
  color: hsl(0, 0%, 13%); /* Define a cor do texto como hsl(0, 0%, 13%) */
  border: none; /* Remove a borda */
  background-color: transparent; /* Define o fundo como transparente */
  cursor: pointer; /* Altera o cursor para indicar um link */
  float: inline-end; /* Move o elemento para a extremidade inline oposta */
  text-decoration: underline 5px solid #3b3; /* Adiciona uma linha de sublinhado de 5 pixels sólidos na cor #3b3 */
  margin-top: 2rem; /* Adiciona margem superior de 2 vezes a altura da fonte atual */
  margin-bottom: 5rem; /* Adiciona margem inferior de 5 vezes a altura da fonte atual */
  letter-spacing: 0.229rem; /* Adiciona espaçamento entre caracteres de 0.229 vezes a altura da fonte atual */
  line-height: 2.6rem; /* Define a altura da linha como 2.6 vezes a altura da fonte atual */
  padding-bottom: 0.01rem; /* Adiciona preenchimento inferior de 0.01 vezes a altura da fonte atual */
}
```

```css
.footer__submit--button:hover {
  color: #3381f3; /* Altera a cor do texto ao passar o mouse para #3381f3 */
}
```

```css
.footer__button--animation {
  width: 60px; /* Define a largura como 60 pixels */
}

```

1. Linha Divisória (  hr-2 )
    
    ```css
    .block__divider--two {
      width: 135%; /* Define a largura como 135% */
      border-bottom: 1px solid hsl(0, 0%, 13%); /* Adiciona uma borda inferior de 1 pixel sólido na cor hsl(0, 0%, 13%) */
      margin-left: 620px; /* Adiciona margem esquerda de 420 pixels */
    }
    ```
    

# sections.css

## **📑 Sections**

### **Situation**

1. Subtítulo Apresentação Pessoal (h2) 
    
    ```css
    .text-box__subtitle {
      font-size: 5.36rem; /* Define o tamanho da fonte */
      letter-spacing: -0.25rem; /* Define o espaçamento entre as letras */
      margin-bottom: 3.73rem; /* Define a margem inferior */
      margin-left: 3rem; /* Define a margem esquerda */
      line-height: 1; /* Define a altura da linha */
      font-weight: 700; /* Define o peso da fonte */
      color: #8c8c8c; /* Define a cor do texto */
    }
    ```
    
2. Outras Classes (Fotos e elementos gráficos)
    
    ```css
    .text-box__photo {
      float: right; /* Define o alinhamento à direita */
      margin-top: -39rem; /* Define a margem superior */
      bottom: 7rem; /* Define a posição inferior */
    }
    ```
    
3. Link de Contato
    
    ```css
    .text-box__contact {
      border-bottom: 2px solid hsl(153, 71%, 59%); /* Define uma borda na parte inferior */
      display: inline-block; /* Define como um bloco em linha */
      text-decoration: none; /* Remove a decoração de texto */
      font-size: 1rem; /* Define o tamanho da fonte */
      font-weight: 600; /* Define o peso da fonte */
      letter-spacing: 0.229rem; /* Define o espaçamento entre as letras */
      line-height: 2.6rem; /* Define a altura da linha */
      padding-bottom: 0.1rem; /* Define o preenchimento na parte inferior */
      cursor: pointer; /* Define o cursor do mouse */
      color: #f7f7f7; /* Define a cor do texto */
      margin-left: 30px; /* Define a margem esquerda */
    }}
    
    ```
    
    ```css
    .text-box__contact:hover {
      color: #8c8c8c; /* Define a cor do texto ao passar o mouse */
    }
    ```
    
4. Lista de Habilidades da Seção
    
    ```css
    .methodology__skills {
      padding: 20px; /* Define o preenchimento */
      text-align: center; /* Define o alinhamento do texto */
      margin-top: 80px; /* Define a margem superior */
      margin-left: 180px; /* Define a margem esquerda */
      margin-right: 180px; /* Define a margem direita */
      display: flex; /* Usa o modelo de layout flexível */
      flex-wrap: wrap; /* Permite que os elementos sejam quebrados em várias linhas */
      justify-content: space-between; /* Distribui os elementos igualmente ao longo do eixo principal */
    }
    ```
    
    ```css
    .methodology__skills > div {
      width: calc(25% - 20px); /* Define a largura de cada elemento filho, menos a margem */
      margin-bottom: 20px; /* Adiciona margem inferior entre as linhas */
    }
    ```
    
5. Projeto na metodologia Rifle
    
    ```css
    .methodology-project--rifle {
      margin-top: 180px; /* Define a margem superior */
      margin-left: 200px; /* Define a margem esquerda */
      display: flex; /* Usa o modelo de layout flexível */
      justify-content: space-between; /* Distribui os elementos igualmente ao longo do eixo principal */
    }
    ```
    
6. Seção Galeria de Cards
    
    ```css
    .card-gallery__project--section {
      display: flex; /* Usa o modelo de layout flexível */
      flex-wrap: wrap; /* Permite que os elementos sejam quebrados em várias linhas */
      justify-content: space-between; /* Distribui os elementos igualmente ao longo do eixo principal */
      margin-top: 20px; /* Define a margem superior */
      margin-left: 180px; /* Define a margem esquerda */
      margin-right: 180px; /* Define a margem direita */
    }
    
    ```
    
    ```css
    .methodology-project__card {
      background: url("../../assets/images/fundo-redes-sociais.jpg") no-repeat; /* Define a imagem de fundo sem repetição */
      width: 20rem; /* Define a largura do cartão */
      margin-bottom: 20px; /* Adiciona margem inferior entre os cartões */
      border: 1px solid #ccc; /* Adiciona uma borda para separar os cartões */
      border-radius: 5px; /* Adiciona cantos arredondados */
    }
    ```
    
    ```css
    .methodology__project--link {
      position: relative; /* Define a posição relativa */
      display: inline-block; /* Define como um bloco em linha */
      text-decoration: none; /* Remove a decoração de texto */
      text-transform: uppercase; /* Converte o texto para maiúsculas */
      font-size: 1rem; /* Define o tamanho da fonte */
      font-weight: 700; /* Define o peso da fonte */
      padding-bottom: 1rem; /* Define o preenchimento na parte inferior */
      border: none; /* Remove a borda */
      cursor: pointer; /* Define o cursor do mouse */
      font-family: inherit; /* Usa a fonte herdada */
      transition: all 300ms ease-in-out; /* Adiciona uma transição suave */
      -webkit-transition: all 300ms ease-in-out; /* Adiciona uma transição suave no Webkit */
    }
    ```
    
7. Seção Galeria de Cards (Link)
    
    ```css
    .methodology__project--link {
      position: relative; /* Define a posição relativa */
      display: inline-block; /* Define como um bloco em linha */
      text-decoration: none; /* Remove a decoração de texto */
      text-transform: uppercase; /* Converte o texto para maiúsculas */
      font-size: 1rem; /* Define o tamanho da fonte */
      font-weight: 700; /* Define o peso da fonte */
      padding-bottom: 1rem; /* Define o preenchimento na parte inferior */
      border: none; /* Remove a borda */
      cursor: pointer; /* Define o cursor do mouse */
      font-family: inherit; /* Usa a fonte herdada */
      transition: all 300ms ease-in-out; /* Adiciona uma transição suave */
      -webkit-transition: all 300ms ease-in-out; /* Adiciona uma transição suave no Webkit */
    }
    ```
    
8. Seção Galeria de Cards (Imagens)
    
    ```css
    .section__image {
      width: 19.8rem; /* Assegura que a imagem preencha completamente o espaço do cartão */
      height: 18rem; /* Define a altura da imagem */
      border-top-left-radius: 5px; /* Cantos arredondados apenas na parte superior esquerda */
      border-top-right-radius: 5px; /* Cantos arredondados apenas na parte superior direita */
    }
    
    ```
    

# success-error-pages.css

## **📑 Page Success and Error**

### **Situation**

1. Corpo da página e a Seção de Sucesso/Erro
    
    ```css
    .c-body,
    .c-success-error-page {
      background-color: #0f1232; /* Cor de fundo */
    }
    ```
    
2. Início da seção principal da página com uma classe específica, centralizando e definindo cores
    
    ```css
    .c-success-error-page {
      width: 100vw; /* Define a largura como 100% da largura da viewport */
      height: 100vh; /* Define a altura como 100% da altura da viewport */
      display: flex; /* Usa o modelo de layout flexível */
      align-items: center; /* Centraliza verticalmente */
      justify-content: center; /* Centraliza horizontalmente */
      color: #ffffffff; /* Define a cor do texto */
    }
    ```
    
3. Link para retornar à página principal e ao passar o mouse sobre ele
    
    ```css
    .c-success-error-page-main a {
      font-size: 20px; /* Define o tamanho da fonte */
      margin: 20px; /* Adiciona margem */
      padding: 10px 25px; /* Adiciona espaçamento interno */
      color: #3b3; /* Define a cor do texto do link */
      border-radius: 5px; /* Adiciona bordas arredondadas */
      text-decoration: none; /* Remove a decoração de texto */
      border: 1px solid transparent; /* Define a borda transparente */
      border-bottom: 0.5rem solid #8fe8ef41; /* Define a cor da borda inferior */
      transition: 0.6s; /* Adiciona uma transição suave de 0.6 segundos */
      font-weight: bold; /* Adiciona negrito à fonte */
    }
    ```
    
    ```css
    .c-success-error-page-a-hover:hover {
      color: #5fdde5; /* Define a cor do texto do link ao passar o mouse */
      border: 1px solid transparent; /* Define a borda transparente */
      border-bottom: 0.5rem solid #5fdde5; /* Define a cor da borda inferior ao passar o mouse */
      transform: scale(1.1); /* Adiciona um efeito de escala ao passar o mouse */
    }
    ```
    

# media-query.css

## **📑 Styles for Screens**

### **Situation**

1. Telas Pequenas (até 579px))

```css
@media screen and (max-width: 579px) {
  /* Ajustes para o cabeçalho */
  header {
    display: flex; /* Usa flexbox para layout flexível */
    flex-direction: column; /* Empilha os elementos verticalmente */
    align-items: center; /* Centraliza os itens ao longo do eixo transversal */
    justify-content: space-between; /* Distribui o espaço entre os itens */
  }

  /* Estilos para o título do cabeçalho */
  .name-header__title {
    margin-top: 2rem; /* Margem superior de 2rem */
    font-size: 1.6rem; /* Tamanho da fonte de 1.6rem */
    font-weight: bold; /* Define a fonte como negrito */
  }

  /* Estilos para a seção principal */
  main {
    max-width: 90%; /* Largura máxima de 90% */
    margin: 0 auto; /* Centraliza o elemento horizontalmente */
  }

  /* Estilos para o subtítulo da caixa de texto */
  .text-box__subtitle {
    font-weight: 500; /* Define o peso da fonte como 500 */
    display: block; /* Mostra o elemento como bloco */
    margin-bottom: 10rem; /* Margem inferior de 10rem */
    line-height: 4rem; /* Altura da linha de 4rem */
  }

  /* Estilos específicos para h2 do subtítulo da caixa de texto */
  h2.text-box__subtitle {
    font-size: 3rem; /* Tamanho da fonte de 3rem */
    letter-spacing: 0.05rem; /* Espaçamento entre as letras de 0.05rem */
    font-weight: 500; /* Define o peso da fonte como 500 */
    margin-bottom: 21rem; /* Margem inferior de 21rem */
  }

  /* Estilos para o desenvolvedor na caixa de texto */
  .text-box__developer {
    padding-right: 1rem; /* Preenchimento à direita de 1rem */
    font-size: 0.8rem; /* Tamanho da fonte de 0.8rem */
    letter-spacing: 0.2rem; /* Espaçamento entre as letras de 0.2rem */
    margin-bottom: -15rem; /* Margem inferior de -15rem (pode ser ajustado) */
    color: #3b3; /* Cor do texto verde escuro */
    line-height: 0.7rem; /* Altura da linha de 0.7rem */
    margin-top: 2rem; /* Margem superior de 2rem */
  }

  /* /* Estilos para o círculo e o espiral na caixa de texto (oculto) */
  .text-box__circle,
  .text-box__spiral {
    display: none; /* Oculta o elemento */
  }

  /* Estilos para a foto na caixa de texto */
  .text-box__photo {
    margin-top: -6rem; /* Margem superior de -6rem (pode ser ajustado) */
    margin-right: 50px; /* Margem direita de 50px */
    margin-bottom: 2rem; /* Margem inferior de 2rem */
    bottom: 2rem; /* Posiciona o elemento 2rem a partir da parte inferior */
    width: 70%; /* Largura de 70% */
    height: 100%; /* Altura de 100% */
  }

  /* Estilos para o contato na caixa de texto */
  .text-box__contact {
    display: block; /* Transforma o link em bloco para ocupar toda a largura disponível */
    text-align: center; /* Centraliza o texto */
    margin: 20px auto; /* Margens automáticas */
    margin-top: 18rem; /* Margem superior de 18rem */
    width: 80%; /* Largura de 80% */
    font-size: 0.8rem; /* Tamanho da fonte de 0.8rem */
    border-bottom: none; /* Remove a borda inferior */
    margin-bottom: 0.5rem; /* Margem inferior de 0.5rem */
    line-height: 1.5rem; /* Altura da linha de 1.5rem */
    text-decoration: underline 5px solid #3b3; /* Sublinha o texto com uma borda verde */
  }

  /* Efeito de hover para o contato na caixa de texto */
  .text-box__contact:hover {
    color: #fff; /* Cor do texto branca no hover */
    text-decoration: underline 5px solid #3b3; /* Sublinha o texto com uma borda verde */
  }

  /* Estilos para a seção de habilidades na metodologia */
  .methodology__skills {
    margin-top: 2rem; /* Margem superior de 2rem */
    margin-left: 10px; /* Margem esquerda de 10px para telas muito pequenas */
    margin-right: 10px; /* Margem direita de 10px para telas muito pequenas */
    justify-content: center; /* Centraliza os elementos no eixo principal */
  }

  /* Estilos para seção de habilidades na metodologia */
  .methodology__skills > div {
    width: calc(
      100% - 20px
    ); /* Largura de cada elemento filho de 100% - 20px */
  }

  /* Estilos para h2 dentro da metodologia */
  .methodology h2 {
    font-size: 3.7rem; /* Tamanho da fonte de 3.7rem */
  }

  /* Estilos para o projeto na metodologia */
  .methodology-project--rifle {
    margin-top: 4rem; /* Margem superior de 4rem */
    margin-left: 10px; /* Margem esquerda de 10px para telas muito pequenas */
    margin-right: 10px; /* Margem direita de 10px para telas muito pequenas */
    flex-direction: column; /* Altera a direção do flexbox para empilhar os elementos verticalmente */
    align-items: center; /* Centraliza os elementos horizontalmente */
  }

  /* Estilos para o título do projeto na metodologia */
  .methodology-project--title {
    font-size: 3.7rem; /* Tamanho da fonte de 3.7rem */
  }

  /* Estilos para o subtitulo do projeto na metodologia */
  .methodology-project--subtitle {
    border-bottom: 0.25rem solid #4de29f; /* Borda inferior de 0.25rem sólida em verde */
    color: #f7f7f7; /* Cor do texto branca */
    font-weight: bold; /* Define a fonte como negrito */
  }

  /* Estilos para o contato na metodologia */
  .methodology-contact {
    display: block; /* Transforma o link em bloco para ocupar toda a largura disponível */
    text-align: center; /* Centraliza o texto */
    margin: 20px auto; /* Margens automáticas */
    width: 80%; /* Largura de 80% */
    font-size: 1.4rem; /* Tamanho da fonte de 1.4rem */
    text-decoration: underline 5px solid #3b3; /* Sublinha o texto com uma borda verde */
    border-bottom: none; /* Remove a borda inferior */
  }

  /* Efeito de hover para o contato na metodologia */
  .methodology-contact:hover {
    color: #3b3; /* Cor do texto verde escuro no hover */
    text-decoration: underline 5px solid #ffffff; /* Sublinha o texto com uma borda branca */
  }

  /* Estilos para a seção de projetos na galeria de cartões */
  .card-gallery__project--section {
    margin-left: 10px; /* Margem esquerda de 10px para telas muito pequenas */
    margin-right: 10px; /* Margem direita de 10px para telas muito pequenas */
  }

  /* Estilos para o card do projeto na galeria de cartões */
  .methodology-project__card {
    width: calc(100% - 20px); /* Largura de cada card de 100% - 20px */
    margin-top: 10px; /* Margem superior de 10px */
    margin-left: 10px; /* Margem esquerda de 10px */
    margin-right: 10px; /* Margem direita de 10px */
  }

  /* Estilos para a imagem da seção */
  .section__image {
    width: 100%; /* Largura de 100% */
    height: auto; /* Altura automática mantendo a proporção original */
    border-top-left-radius: 5px; /* Cantos arredondados na parte superior esquerda */
    border-top-right-radius: 5px; /* Cantos arredondados na parte superior direita */
  }

  /* Estilos para o conteúdo do rodapé */
  .footer__content {
    grid-template-columns: 1fr; /* Uma coluna no grid */
    gap: 0.7rem; /* Espaçamento de 0.7rem entre os elementos do grid */
  }

  /* Estilos para informações de contato no rodapé */
  .footer__contact--info {
    margin-top: -2rem; /* Margem superior de -2rem */
    margin-left: 45px; /* Margem esquerda de 45px para telas muito pequenas */
    font-size: 2.7rem; /* Tamanho da fonte de 2.7rem */
    flex-direction: column; /* Altera a direção do flexbox para empilhar os elementos verticalmente */
    align-items: center; /* Centraliza os elementos horizontalmente */
  }

  /* Estilos para a descrição no rodapé */
  .footer__description {
    margin-top: 1rem; /* Margem superior de 1rem */
    margin-bottom: 1rem; /* Margem inferior de 1rem */
    padding-right: 2.5rem; /* Preenchimento à direita de 2.5rem */
    letter-spacing: 0rem; /* Espaçamento entre letras de 0rem */
    font-size: 1rem; /* Tamanho da fonte de 1rem */
    margin-left: 45px; /* Margem esquerda de 45px para telas muito pequenas */
  }

  /* Estilos para o título h2 */
  .top__page__footer h2 {
    width: 100%; /* Largura de 100% */
    margin-top: 1rem; /* Margem superior de 1rem */
    margin-left: 0; /* Remove a margem esquerda */
    text-align: center; /* Centraliza o texto */
    font-size: 2rem; /* Tamanho da fonte de 2rem */
  }

  /* Estilos para a saudação no rodapé */
  .salut__footer {
    width: 30%; /* Largura de 30% */
    margin: 1rem auto; /* Margens automáticas superior e inferior, centraliza horizontalmente */
    margin-left: 5rem; /* Margem esquerda de 5rem para telas muito pequenas */
    display: block; /* Transforma em bloco para centralizar horizontalmente */
  }

  /* Estilos para .footer-text */
  .footer-text {
    margin-top: 1.55rem; /* Margem superior de 1.55rem */
  }

  /* Estilos para redes sociais */
  .social-profile {
    display: flex; /* Usa flexbox para layout flexível */
    flex-direction: column; /* Empilha os elementos verticalmente */
    align-items: center; /* Centraliza os itens ao longo do eixo transversal */
    justify-content: space-between; /* Distribui o espaço entre os itens */
    border-bottom: none; /* Remove a borda inferior */
    font-weight: bold; /* Define a fonte como negrito */
    margin-left: -30px; /* Margem esquerda de -30px */
    margin-top: -30px; /* Margem superior de -30px */
  }

  /* Estilos para a navegação em redes sociais  */
  .social-profile nav {
    margin-top: 0.3rem; /* Margem superior de 0.3rem */
    margin-left: 4px; /* Margem esquerda de 4px */
  }

  /* Estilos para a divisão entre elementos no perfil social */
  .social-profile div {
    margin-top: 2rem; /* Margem superior de 2rem */
  }

  /* Estilos para o título em redes sociais */
  .profile-name__title {
    margin-left: 4px; /* Margem esquerda de 4px */
  }

  /* Estilos para subtitulo em redes sociais */
  .profile-name__subtitle {
    border-bottom: none; /* Remove a borda inferior */
    color: rgb(26, 68, 26);
    font-weight: bold;
  }

  /* Estilos para o input do formulário de contato */
  .contact-form input {
    width: 100%; /* Largura de 100% */
    font-weight: bold; /* Define a fonte como negrito */
    margin-left: 0rem; /* Margem esquerda de 0rem */
  }

  /* Estilos para o botão de envio no rodapé */
  .footer__submit--button {
    font-size: 1rem; /* Tamanho da fonte de 1rem */
    font-weight: bold; /* Define a fonte como negrito */
  }

  /* Efeito de hover para o botão de envio no rodapé */
  .footer__submit--button:hover {
    color: #3381f3; /* Cor do texto azul no hover */
  }

  /* Estilos para a animação do botão no rodapé */
  .footer__button--animation {
    width: 60px; /* Largura de 60px */
  }

  /* Estilos para a linha divisória hr */
  .block__divider--two {
    width: 90%; /* Largura de 90% */
    margin: 0 auto; /* Margens automáticas nos lados esquerdo e direito */
    border-bottom: 1px solid hsl(0, 0%, 13%); /* Borda inferior de 1px sólida em tom de cinza */
  }

  /* Estilos para links na seção de ícones */
  .icons a {
    color: rgb(26, 68, 26); /* Cor do texto em verde escuro */
  }

  /* Efeito de hover para links na seção de ícones */
  .icons a:hover {
    color: #8c8c8c; /* Cor do texto em cinza escuro no hover */
  }
}
```

```css
 /* Estilos para o título do cabeçalho */
  .name-header__title {
    margin-top: 2rem; /* Margem superior de 2rem */
    font-size: 1.6rem; /* Tamanho da fonte de 1.6rem */
    font-weight: bold; /* Define a fonte como negrito */
  }
```

1. Telas para dispositivos entre 580px e 768px de largura de tela

```css
@media screen and (min-width: 580px) and (max-width: 768px) {
  /* Estilos para a seção principal */
  main {
    max-width: 95%; /* Define a largura máxima para 95% da largura da tela */
  }

  /* Estilos para o subtítulo da caixa de texto */
  .text-box__subtitle {
    font-size: 5rem; /* Tamanho da fonte de 5rem */
    padding-right: 20rem; /* Preenchimento à direita de 20rem */
    letter-spacing: -0.2rem; /* Espaçamento entre letras de -0.2rem */
    margin-left: 1rem; /* Margem à esquerda de 1rem */
  }

  /* Estilos para o desenvolvedor na caixa de texto */
  .text-box__developer {
    padding-right: 15rem; /* Preenchimento à direita de 15rem */
    font-size: 1.2rem; /* Tamanho da fonte de 1.2rem */
    color: #3b3; /* Cor verde escuro */
    margin-left: 1rem; /* Margem à esquerda de 1rem */
  }

  /* Estilos para a foto na caixa de texto */
  .text-box__photo {
    margin-top: -45rem; /* Margem superior de -45rem */
    margin-right: -2rem; /* Margem direita de -2rem */
    bottom: 3rem; /* Espaçamento inferior de 3rem */
  }

  /* Estilos para o círculo na caixa de texto (oculto) */
  .text-box__circle {
    display: none; /* Oculta o elemento */
  }

  /* Estilos para a espiral na caixa de texto (oculta) */
  .text-box__spiral {
    display: none; /* Oculta o elemento */
  }

  /* Estilos para o contato na caixa de texto */
  .text-box__contact {
    margin-top: 32px; /* Margem superior de 32px */
  }

  /* Efeito de hover para o contato na caixa de texto */
  .text-box__contact:hover {
    color: #fff; /* Cor do texto branca no hover */
    border-bottom: 2px solid #3b3; /* Borda inferior de 2px sólida verde no hover */
  }

  /* Estilos para a linha divisória hr */
  .block__divider--one {
    margin-top: 5rem; /* Margem superior de 5rem */
  }

  /* Estilos para a seção de habilidades na metodologia */
  .methodology__skills > div {
    width: calc(100% - 50px); /* Largura de cada elemento filho - 50px */
    margin-left: 0; /* Remove a margem esquerda */
    margin-right: 0; /* Remove a margem direita */
  }

  /* Alinha o texto à esquerda na seção de habilidades */
  .methodology__skills > div > div {
    text-align: left; /* Alinha o texto à esquerda */
  }

  /* Estilos para o título da habilidade */
  .skill__title {
    font-size: 40px; /* Tamanho da fonte de 40px */
  }

  /* Estilos para a experiência da habilidade */
  .skill__experience {
    font-size: 20px; /* Tamanho da fonte de 20px */
  }

  /* Estilos para o ícone da habilidade */
  .skill__icon {
    font-size: 30px; /* Tamanho da fonte de 30px */
  }

  /* Estilos para o projeto na metodologia */
  .methodology-project--rifle {
    margin-top: 8rem; /* Margem superior de 8rem */
    margin-left: 10px; /* Margem esquerda de 10px para telas pequenas */
    margin-right: 10px; /* Margem direita de 10px para telas pequenas */
    flex-direction: column; /* Altera a direção do flexbox para empilhar os elementos verticalmente */
    align-items: center; /* Centraliza os elementos horizontalmente */
  }

  /* Estilos para o título do projeto na metodologia */
  .methodology-project--title {
    font-size: 3.7rem; /* Tamanho da fonte de 3.7rem */
  }

  /* Estilos para o contato na metodologia */
  .methodology-contact {
    display: block; /* Transforma o link em bloco para ocupar toda a largura disponível */
    text-align: center; /* Centraliza o texto */
    margin: 20px auto; /* Define margens superior e inferior como 20px e margens laterais automáticas */
    width: 80%; /* Largura de 80% */
    font-size: 1.8rem; /* Tamanho da fonte de 1.8rem */
    text-decoration: underline 5px solid #3b3; /* Sublinha o texto com uma borda verde de 5px */
    border-bottom: none; /* Remove a borda inferior */
  }

  /* Efeito de hover para o contato na metodologia */
  .methodology-contact:hover {
    color: #3b3; /* Cor do texto verde escuro no hover */
    text-decoration: underline 5px solid #ffffff; /* Sublinha o texto com uma borda branca de 5px */
  }

  /* Estilos para a seção de projetos na galeria de cartões */
  .card-gallery__project--section {
    display: flex; /* Usa flexbox para layout flexível */
    flex-wrap: wrap; /* Permite a quebra de linha para os cartões */
    justify-content: center; /* Centraliza os cartões */
    margin-left: 10px; /* Margem esquerda de 10px para telas pequenas */
    margin-right: 10px; /* Margem direita de 10px para telas pequenas */
  }

  /* Estilos para o cartão do projeto na galeria de cartões */
  .methodology-project__card {
    width: calc(90% - 20px); /* Largura de 90% com margem de 20px */
    margin-bottom: 20px; /* Espaçamento inferior de 20px entre os cartões */
  }

  /* Estilos para a imagem da seção */
  .section__image {
    width: 100%; /* Largura de 100% */
    height: auto; /* Altura automática para manter a proporção original da imagem */
    border-top-left-radius: 5px; /* Cantos arredondados apenas na parte superior esquerda */
    border-top-right-radius: 5px; /* Cantos arredondados apenas na parte superior direita */
  }

  /* Estilos para o conteúdo do rodapé */
  .footer__content {
    grid-template-columns: 1fr; /* Uma coluna no layout de grade */
    gap: 0.7rem; /* Espaçamento entre os elementos de 0.7rem */
  }

  /* Estilos para o texto no rodapé */
  .footer__text {
    margin-top: 1.55rem; /* Margem superior de 1.55rem */
    margin-right: 150px; /* Margem direita de 150px para telas pequenas */
  }

  /* Estilos para as informações de contato no rodapé */
  .footer__contact--info {
    margin-top: -2rem; /* Margem superior de -2rem */
    margin-left: 80px; /* Margem esquerda de 80px para telas pequenas */
    text-align: center; /* Centraliza o texto */
    font-size: 3.5rem; /* Tamanho da fonte de 3.5rem */
    flex-direction: column; /* Altera a direção do flexbox para empilhar os elementos verticalmente */
    align-items: center; /* Centraliza os elementos horizontalmente */
  }

  /* Estilos para a descrição no rodapé */
  .footer__description {
    margin-top: 2rem; /* Margem superior de 2rem */
    margin-bottom: 1rem; /* Margem inferior de 1rem */
    padding-right: 2.5rem; /* Preenchimento à direita de 2.5rem */
    letter-spacing: 0.2rem; /* Espaçamento entre letras de 0.2rem */
    font-size: 1.2rem; /* Tamanho da fonte de 1.2rem */
    font-weight: bold; /* Peso da fonte em negrito */
  }

  /* Estilos para o título na parte superior do rodapé */
  .top__page__footer h2 {
    width: 60%; /* Largura de 60% para ocupar toda a largura do contêiner pai */
    margin-top: 80px; /* Margem superior de 80px */
    margin-left: 180px; /* Margem esquerda de 180px para telas pequenas */
    font-size: 2.7rem; /* Tamanho da fonte de 2.7rem */
  }

  /* Estilos para a saudação no rodapé */
  .salut__footer {
    width: 20%; /* Largura de 20% para ajustar ao contêiner pai */
    margin: 1rem auto; /* Centraliza horizontalmente e adiciona margem superior e inferior */
    margin-left: 15rem; /* Margem esquerda de 15rem para telas pequenas */
    display: block; /* Transforma em bloco para centralizar horizontalmente */
  }

  /* Estilos para o botão de envio no rodapé */
  .footer__submit--button {
    font-size: 1.1rem; /* Tamanho da fonte de 1.1rem */
    font-weight: bold; /* Peso da fonte em negrito */
    text-decoration: underline 5px solid #3b3; /* Sublinha o texto com uma borda verde de 5px */
  }

  /* Efeito de hover para o botão de envio no rodapé */
  .footer__submit--button:hover {
    color: #3381f3; /* Cor do texto azul no hover */
  }

  /* Estilos para a animação do botão no rodapé */
  .footer__button--animation {
    width: 60px; /* Largura de 60px */
  }

  /* Estilos para o input do formulário de contato */
  .contact-form input {
    width: 100%; /* Largura de 100% */
    margin-left: 0rem; /* Margem esquerda de 0rem */
    border-bottom: 0.2rem solid hsl(0, 0%, 13%); /* Borda inferior de 0.2rem sólida em tom de cinza */
    font-weight: bold; /* Peso da fonte em negrito */
  }

  /* Estilos para o perfil social */
  .social-profile {
    width: 90%; /* Largura de 90% */
    display: flex; /* Usa flexbox para layout flexível */
    justify-content: space-between; /* Distribui o espaço uniformemente entre os elementos */
    align-items: center; /* Centraliza os elementos verticalmente */
    font-weight: bold; /* Peso da fonte em negrito */
    margin-left: -30px; /* Margem esquerda de -30px para telas pequenas */
    margin-top: -30px; /* Margem superior de -30px para telas pequenas */
  }

  /* Estilos para a navegação no perfil social */
  .social-profile nav {
    margin-top: 1.5rem; /* Margem superior de 1.5rem */
    margin-right: -60px; /* Margem esquerda de -60px */
  }

  /* Estilos para a divisão entre elementos no perfil social */
  .social-profile div {
    margin-top: 2rem; /* Margem superior de 2rem */
  }

  /* Estilos para o título do nome no perfil social */
  .profile-name__title {
    margin-top: -2rem; /* Margem superior de -2rem */
    margin-left: 50px; /* Margem esquerda de 50px */
  }

  /* Estilos para o subtítulo do nome no perfil social (sem borda inferior) */
  .profile-name__subtitle {
    border-bottom: none; /* Remove a borda inferior */
    color: rgb(26, 68, 26);
    font-weight: bold;
  }

  /* Estilos para a linha divisória hr */
  .block__divider--two {
    width: 90%; /* Largura de 90% */
    margin: 0 auto; /* Margens*/
  }
}
```