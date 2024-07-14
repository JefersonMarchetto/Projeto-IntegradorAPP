# Projeto Integrador APP

Este projeto é uma aplicação web para cadastro e consulta de pessoas, utilizando React no frontend e Node.js com MySQL no backend.

## Requisitos

- Node.js
- MySQL
- npm

## Instalação

### Backend

1. Clone o repositório:
    ```sh
    git clone https://github.com/JefersonMarchetto/Projeto-IntegradorAPP.git
    ```

2. Navegue até a pasta do backend e instale as dependências:
    ```sh
    cd Projeto-IntegradorAPP/backend
    npm install
    ```

3. Configure o banco de dados MySQL:
    ```sql
    CREATE DATABASE projeto_integrador;

    USE projeto_integrador;

    CREATE TABLE pessoas (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      cpf VARCHAR(255) NOT NULL,
      endereco VARCHAR(255) NOT NULL,
      data_nascimento DATE NOT NULL,
      cargo VARCHAR(255) NOT NULL
    );
    ```

4. Crie um arquivo `.env` na pasta `backend/src` com as seguintes variáveis:
    ```plaintext
    DB_HOST=127.0.0.1
    DB_USER=root
    DB_PASSWORD=12345
    DB_DATABASE=projeto_integrador
    ```

5. Inicie o servidor backend:
    ```sh
    cd Projeto-IntegradorAPP/backend
    node src/index.js
    ```

### Frontend

1. Navegue até a pasta do frontend e instale as dependências:
    ```sh
    cd Projeto-IntegradorAPP/my-app
    npm install
    ```

2. Inicie o servidor frontend:
    ```sh
    npm start
    ```

## Estrutura do Projeto

### Backend

- `backend/src/index.js`: Código do servidor backend que gerencia as requisições e interações com o banco de dados.

### Frontend

- `my-app/src/Cadastro.js`: Página de cadastro de pessoas.
- `my-app/src/Resultados.js`: Página de resultados de busca.


