<h1 align="center">Desafio Frexco</h1>

## Objetivo

Você foi contratado para criar uma aplicação de controle de estoque. Cada vez que um produto for vendido o mesmo deverá ser debitado do estoque.

## Observações

- Para validar o requisito "Cada vez que um produto for vendido o mesmo deverá ser debitado do estoque", também criei um sistema de vendas, para simular uma venda.
- Na tela de "Criar conta" existe a possibilidade de registrar o usuário como administrador, essa é uma forma de facilitar no teste da aplicação.
- As senhas foram criptografadas no banco de dados

## Tecnologias utilizadas

### Back-end

- nodeJS
- express
- typescript
- sqlite
- sequelize
- jsonwebtoken

## Requisitos mínimos

- Ter o [nodeJS](http://nodejs.org) instalado na sua maquina

## Como rodar 🚀

- Pasta do Back-end

  - Abra o diretório do back-end em um terminal
  - Execute ` npm install` para baixar as dependências
  - Execute ` npm start` para executar o servidor

- [Pasta do Front-end](https://github.com/Vinicius377/desafio-frexco-frontend)
  - Abra o diretório do front-end em outro terminal
  - Execute ` npm install` para baixar as dependências
  - Execute ` npm start` para executar a aplicação
  - A aplicação abrirá em http://localhost:3000

## Usuários ja registrados

- Administrador
  - Email : adminteste@gmail.com
  - Senha : admin
- Cliente
  - Email: usuario@gmail.com
  - Senhya : 1234
