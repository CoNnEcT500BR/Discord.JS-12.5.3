# <p align="center">Discord Bot Template</p>

  <p> Para instalar corretamente o bot, abra o terminal na pasta do bot e execute o comando "npm i" ou "npm install".<br> é necessário ter o Node.JS apartir do 8.0.</p>
  <br>
  Utilizamos o arquivo ".env" para facilitar a manutenção em alguns aspectos como o token e o prefix. 
  Para cria-lo é bem simples, basta criar um arquivo chamado ".env". 
  Dentro dele você colocará as seguintes informações:<br><br>

  Função | Conteúdo
  ------ | ------
  TOKEN | Bot Token
  PREFIX | Bot Prefix

  Para pegar o "Bot Token" é necessário criar uma aplicação no "Portal do Dev" do discord, para acessar é só usar [clicar aqui](https://discord.com/developers/applications).
  Vai na aba de "New Application" e dê um nome ao seu bot. Após isso criará uma aplicação para ser selecionada, você clica nela. Assim você cairá na aba "Geral",<br>
  você deverá ir para aba "Bot", e onde estiver escrito "token" você clica em "copy" (cuidado ao divulgar essa chave, qualquer problema você pode recriar ela novamente).

  O "Bot Prefix" é a letra/Slash inicial antes de executar a palavra indicada, por exemplo /ajuda ou !ajuda.

  Após a criação do arquivo ".env" e a instalações dos pacotes, para executar o bot é bem simples, abra o terminal na pasta e execute o comando "node ." ou também "node nome.js".

  Caso queira convidar o seu bot para o seu servidor, no portal do dev você vai em "OAuth2", seleciona as opção "bot" na tabela de cima, e na tabela de baixo você seleciona "Administrador", após isso, embaixo da primeira tabela vai ter um link, só copiar ele e colocar no navegador. Apartir disso é só escolher qual servidor você quer.
  
  ##

  ## FAQ

  ### Qual o intuito deste bot?
O bot é feito para agilizar a criação de uma "estrutura", sendo elas "commands" e "events".

  ### É possível criar novos comandos?
Se utilizar o método correto, sim, o bot utiliza a função "module.exports"

  ### Quais são as bibliotecas usadas?
Discord.JS - ^12.5.3<br>
Dotenv - ^6.2.0<br>
Enmap - *
