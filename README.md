![desafio1](https://github.com/danibenfica/Desafio-1-DNC/assets/103818625/3392ae7f-af2d-454e-9446-e6e664e196a4)

## Documentação do primeiro desafio da DNC

E aqui estamos nós, mais um desafio da DNC que eu amei fazer! Este é um site de arquitetura fictício, onde o usuário tem a possibilidade de entrar em contato para obter mais informações sobre a empresa. Me empolguei tanto que desenvolvi algumas pequenas funcionalidades a mais em JavaScript.
Abaixo estarei deixando alguns links e instruções de como baixar o projeto! 😄

## Como baixar o projeto:

1. Na página do repositório, clique no botão verde "Code" (ou "Código") no canto superior direito.

2. No menu suspenso, clique em "Download ZIP".

3. Aguarde o download do arquivo ZIP do projeto para o seu computador.

4. Após o download, localize o arquivo ZIP em seu computador e descompacte-o.

## Passo 3: Acessar o Código-fonte

1. Após descompactar o arquivo ZIP, você encontrará uma pasta com o nome do projeto.

2. Acesse a pasta para ver o código-fonte do projeto.

3. Abra o arquivo index.html que se encontra na pasta que você descompactou no navegador de sua preferência (Google Chrome, Mozilla, Opera, etc).

## Documentação:
Este documento descreve a estrutura e o conteúdo de um projeto de arquitetura fictício, que foi desenvolvido como parte de um projeto de aprendizado. O projeto tem o objetivo de criar um site para uma empresa de arquitetura que se especializa em arquitetura residencial e comercial, com foco em projetos personalizados e qualidade.

A estrutura do projeto consiste em várias seções, cada uma com um propósito específico:

Seção 1 (firstSection): Esta seção contém o título principal do site, "Tradição em projetos de arquitetura", que enfatiza a experiência e o conhecimento da empresa no campo da arquitetura. Também inclui um subtítulo que menciona o foco em arquitetura residencial e comercial.

Seção 2 (secondSection): Nesta seção, há um menu que exibe algumas estatísticas importantes sobre a empresa. As estatísticas incluem o número de empreendimentos construídos, os anos de mercado e experiência, e a área total dos projetos construídos.

Seção 3 (thirdSection): Aqui, a empresa apresenta sua história e experiência aos visitantes do site. O parágrafo destaca que a empresa está ativa desde 2002, realizando projetos e gerenciando obras. Também menciona o número de projetos concluídos e a área total construída. O objetivo principal da empresa é transformar os sonhos dos clientes em realidade, combinando tradição e modernidade em seus projetos. Uma imagem de um projeto é exibida ao lado do texto.

Seção 4 (form): Nesta seção, os visitantes são convidados a conhecer mais sobre os serviços oferecidos pela empresa. Um formulário é fornecido para que os visitantes possam inserir seu nome e e-mail. O formulário envia os dados para uma API externa para processamento. O botão "Fale Conosco" é usado para enviar o formulário.

Seção 5 (windowModal): Esta seção representa uma janela modal que é exibida quando a imagem do projeto é clicada. A j

anela modal exibe uma versão ampliada da imagem do projeto. Um botão "X" é fornecido para fechar a janela modal.

Além da estrutura HTML, o projeto também utiliza arquivos CSS para estilização. Os arquivos "style.css" e "responsive.css" são importados para aplicar estilos personalizados à página. Esses arquivos contêm regras CSS para ajustar a aparência e o layout do site em telas com as dimensões min-width: 320px e max-width: 480px.

## Principais funções:


1. **openModal()**:
   - Descrição: Essa função é responsável por abrir o modal exibindo a imagem ampliada.
   - Funcionalidade: Define o estilo de exibição do modal como "block" e adiciona a classe "fadeIn" para aplicar uma animação de entrada ao modal.
   - Exemplo de uso:
     ```javascript
     openModal();
     ```

2. **closeModal()**:
   - Descrição: Essa função é responsável por fechar o modal.
   - Funcionalidade: Define o estilo de exibição do modal como "none", ocultando-o da visualização do usuário.
   - Exemplo de uso:
     ```javascript
     closeModal();
     ```

3. **animateCount(elementId, targetValue, duration)**:
   - Descrição: Essa função anima a contagem de um elemento HTML até um valor alvo em um determinado período de tempo.
   - Parâmetros:
     - `elementId`: O ID do elemento HTML que será atualizado com a contagem animada.
     - `targetValue`: O valor final para o qual a contagem será animada.
     - `duration`: A duração da animação em milissegundos.
   - Exemplo de uso:
     ```javascript
     animateCount('projectsCount', 850, 5000);
     ```

4. **formatNumber(number)**:
   - Descrição: Essa função formata um número adicionando separadores de milhares (vírgula) para melhor legibilidade.
   - Parâmetros:
     - `number`: O número que será formatado.
   - Retorno: O número formatado como uma string.
   - Exemplo de uso:
     ```javascript
     const formattedNumber = formatNumber(1234567890);
     ```

5. **startCountAnimations()**:
   - Descrição: Essa função inicia as animações de contagem para os elementos específicos do seu projeto.
   - Exemplo de uso:
     ```javascript
     startCountAnimations();
     ```

Se você tiver alguma dúvida ou encontrar algum problema durante o processo de download ou execução do projeto, não hesite em entrar em contato comigo. Estou à disposição para ajudar!

Aproveite o projeto e obrigada pelo seu interesse! ❤️ 
