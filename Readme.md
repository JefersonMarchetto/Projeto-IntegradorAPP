# Projeto Integrador APP

Este projeto é um sistema de cadastro e busca de pessoas. Ele utiliza React para o frontend e Node.js com MySQL para o backend.

## Funcionalidades

- Cadastro de pessoas
- Busca de pessoas por nome, CPF, endereço, data de nascimento e cargo
- Interface amigável e responsiva

## Requisitos

- Node.js
- MySQL
- XAMPP (opcional para gerenciar o MySQL)

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/JefersonMarchetto/Projeto-IntegradorAPP.git

2. Navegue até a pasta do backend e instale as dependências:

```sh
cd Projeto-IntegradorAPP/backend
npm install
3. Configure o banco de dados MySQL:
    ```sh- Crie um banco de dados chamado projeto_integrador:
    - Execute o seguinte script SQL para criar a tabela pessoas:

CREATE TABLE pessoas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  cpf VARCHAR(255) NOT NULL,
  endereco VARCHAR(255) NOT NULL,
  data_nascimento DATE NOT NULL,
  cargo VARCHAR(255) NOT NULL
);

4.Crie um arquivo .env na pasta backend/src com o seguinte conteúdo:
   
   DB_HOST=127.0.0.1
   DB_USER=root
   DB_PASSWORD=
   DB_DATABASE=projeto_integrador

5.Inicie o servidor backend:
   node src/index.js

6.Navegue até a pasta do frontend e instale as dependências:
    cd ../my-app
    npm install
7. Inicie o servidor frontend:
    npm start

## Utilização

  //Cadastro de Pessoa
  Preencha os campos do formulário de cadastro.
  Clique em "Adicionar".
  Uma mensagem de sucesso será exibida se o cadastro for realizado com sucesso.
  Busca de Pessoa
  Preencha o campo de busca com o nome, CPF, endereço, data de nascimento ou cargo da pessoa que deseja buscar.
  Clique em "Buscar".
  Os resultados da busca serão exibidos em uma nova tela.//
  
  ##  Contribuição

  Faça um fork do projeto.
  Crie uma nova branch: git checkout -b minha-feature.
  Faça as suas alterações e commit: git commit -m 'Adiciona minha feature'.
  Faça o push para a branch: git push origin minha-feature.
  Envie um pull request.
  ## Licença
  Este projeto é de uso acadêmico, usados pelos alunos da Universidade catolica de pelotas
