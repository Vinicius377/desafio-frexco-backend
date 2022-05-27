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

## Rotas

### Todas as rotas tem a URL BASE = http://localhost:2222/

- Produto

  - `get` : "/product" - Busca todos os produtos

    **response** = {
    id : string,
    price : number,
    name : string,
    type : string,
    measure : string,
    count : number
    } || {
    err : string
    }

  - `post` : "/product" - Cria um produto

    **headers** = {
    authorization: "Bearer " + token
    }

    **body** = {
    name : string,
    type : string,
    price : number,
    count : number,
    measure : string
    }

    **response** = {
    id : string,
    name : string,
    price : number,
    type : string,
    count : number,
    measure : string
    } || {
    err : string
    }

  - `put` : "/product" - Atualiza o produto

    **headers** = {
    authorization: "Bearer " + token
    }

    **body**= {
    id : string,
    name? : string,
    price? : number,
    type? : string,
    count? : number,
    measure? : string
    }

    **response** = {
    message || err : string
    }

  - `delete` : "/product" - Deleta o produto

    **headers** = {
    authorization: "Bearer " + token
    }

    **body** = {
    id : string
    }

    **response** = {
    message || err : string
    }

- Usuário

  - `post`: "/login" - Faz o login

    **body** = {
    email : string,
    password : string || number
    }

    **response** = {
    name : string,
    id : string,
    email : string,
    isAdm : boolean
    } || {
    err : string
    }

  - `post` : "/signin" - Cria um novo usuário

    **body** = {
    name : string,
    email : string,
    password : string || number,
    isAdm : boolean
    }

    **response** = {
    message || err : string
    }

  - `get` : "/auth" - Autentica o usuário

    **headers** = {
    authorization: "Bearer " + token
    }

    **response** = {
    name : string,
    id : string,
    email : string,
    isAdm : boolean
    } || {
    err : string
    }

- Compra

  - `post` : "/buy" - Credita o produto no estoque

    **body** = {
    id : string,
    count : number
    }

    **response** = {
    message || err : string
    }

## Usuários ja registrados

- Administrador
  - Email : adminteste@gmail.com
  - Senha : admin
- Cliente
  - Email: usuario@gmail.com
  - Senha : 1234
