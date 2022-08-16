# Pokemon_Card
Jogo de comparação de cartas

# Desafio SomoS
Linguagem: JavaScript
Framework: Node.js

# Descrição
Este projeto é o backend de um jogo de cartas pokemon, onde faremos o seguinte:

O registro do cartão.

Consulta geral deste registo e/ou consulta individual de cada carta.

Atualize algumas informações na carta.

Elimine uma carta que não participa mais do jogo.

Obtenha a soma de cada carta para depois compará-la e obter a carta vencedora.

# Pré-requisitos
Antes de iniciar, se assegure que possui os requisitos abaixo:

1.- Conhecimento básico de JavaScript.

2.- Tenha o Visual Studio Code instalado.

3.- Tenha o Node js instalado.

4.- Tenha o MySQL instalado.

Caso você não tenha, aqui estão os links para que você possa acessá-lo para fazer o download e instalá-lo em seu computador:

https://code.visualstudio.com/

https://nodejs.org/en/

https://dev.mysql.com/downloads/workbench/

# Compilação/Configuração
Para compilar/configurar este projeto, siga as seguintes etapas:

1.- Crie o banco de dados no MySQL com o nome do pokemon. Para criar as tabelas deste banco de dados insira estas instruções em seu sql dentro do MYSQL.
      Tabela usando JSON
      CREATE TABLE card(id INT NOT NULL AUTO_INCREMENT,
			nome_card VARCHAR(100) NOT NULL,
			attribute JSON NOT NULL,
			PRIMARY KEY (id));
      
      Tabela Normal
      CREATE TABLE card_normal (id INT NOT NULL AUTO_INCREMENT,
			nome_card VARCHAR(100) NOT NULL,
		  hp INT NOT NULL,
      attack INT NOT NULL,
      defense INT NOT NULL,
      special_attack INT NOT NULL,
      special_defense INT NOT NULL,
      speed INT NOT NULL,
			PRIMARY KEY (id));

2.- Crie um repositório no Github onde você executará o servidor e o container REACT da sua aplicação, usando Visual Studio Code.


# Instalação/Execução
Para instalar/executar este projeto, siga as seguintes etapas:

1.-Crie uma pasta chamada server e dentro dela execute os seguintes comandos:
                   npm init --yes
                   
                   npm install express
                   
                   npm i --save--dev nodemon
                   
                   npm i cors
                   
                   npm i mysql
                   
                   npm i express-myconnection
                   
Após instalar todos os pacotes que usaremos, o servidor é verificado executando o seguinte comando: npm run start 

2.-Crie uma pasta card_pokemon no react que sirva como um container para exibir os resultados das consultas, para isso você deve executar o seguinte comando:
                   npx create-react-app card-pokemon

Após instalar todos os pacotes que iremos utilizar no REACT, verificamos se está tudo ok executando o seguinte comando: npm start.

3.- Em um arquivo javaScript vamos criar a conexão com o banco de dados.

4.E em outro arquivo javaScript executaremos as rotas ou consultas para obter, alterar, excluir e adicionar qualquer informação ao banco de dados.


