# pseudotwitter

Este é o repositório do **frontend** do projeto PseudoTwitter, uma aplicação full-stack que simula as funcionalidades principais do Twitter. O projeto foi desenvolvido para a disciplina de Programação Web II em outubro/novembro de 2025.

O **backend** correspondente, construído utilizando Node.js e Express, pode ser encontrado em [PseudoTwitter-Server](https://github.com/Jot4g3/pseudotwitter-server).

## Funcionalidades Principais 

### 1. Autenticação de Usuário
Telas e lógica para verificação de identidade do usuário, utilizando autenticação baseada em sessão (`express-session` e cookies `httpOnly`).

* **Cadastro:** Permite que novos usuários criem uma conta. As senhas são armazenadas com hash (utilizando a biblioteca `bcrypt`).
* **Login:** Permite que usuários existentes acessem suas contas. O estado de autenticação é compartilhado globalmente na aplicação.
* **Logout:** Permite que o usuário encerre sua sessão de forma segura, destruindo-a no servidor.

### 2. Home
Tela principal do aplicativo, dividida em três colunas.

* **Sidebar:** Barra lateral fixa com navegação principal e o perfil do usuário.
* **Feed de Posts:** Rolagem principal onde o usuário pode ver todos os posts de todos os usuários, em ordem cronológica.
* **Criação de Post:** Um formulário que permite ao usuário criar seu próprio post.
    * O nome de usuário é preenchido automaticamente pela sessão (o usuário não precisa digitá-lo: funcionalidade extra).
    * O formulário detecta e estiliza hashtags (`#abacaxi`) automaticamente, que ficam em azul.

### 3. Posts e Comentários
O principal componente do site.

* **Card de Post:** Uma visualização resumida do post, mostrando o autor, conteúdo e contagem de comentários.
* **Página de Post Individual:** Ao clicar em um card, o usuário é levado para uma tela dedicada dividida em duas colunas:
    * **Esquerda:** O PostCard individual, com mais detalhes e formatação maior.
    * **Direita:** A seção de comentários, que permite ao usuário ler todos os comentários daquele post e enviar novos.

## Tecnologias e Bibliotecas Utilizadas

### Frontend
* **React:** Biblioteca principal para a construção da interface de usuário. `useState()` `useEffect()`
* **React Router (`react-router-dom`):** Para gerenciamento de rotas do lado do cliente (SPA). `useNavigate()` `useParams()`
* **Axios:** Cliente HTTP para fazer requisições à API do backend.
* **Formik:** Para gerenciamento de estado de formulários (Login, Cadastro, Post).
* **Yup:** Para validação de schemas e regras nos formulários.
* **CSS:** Para estilização, foi utilizado CSS puro.

### Backend
* **Node.js:** Ambiente de execução do servidor.
* **Express:** Framework para a construção da API.
* **Sequelize:** ORM (Object-Relational Mapper) para interagir com o banco de dados SQL. (Hospedado na Azure)
* **Express-Session:** Middleware para gerenciamento de autenticação baseada em sessão e cookies.
* **Bcrypt:** Para hasheamento e segurança de senhas.
* **CORS:** Para permitir a comunicação entre o frontend (localhost:3000) e o backend (localhost:3001).

## Conceitos de Programação Aplicados

* **Arquitetura Full Stack:** Separação clara de responsabilidades entre um frontend (React) e um backend (API Express).
* **API RESTful:** Criação de endpoints (`GET`, `POST`) para manipular recursos (Usuários, Posts, Comentários). Veja o [backend](https://github.com/Jot4g3/pseudotwitter-server).
* **Autenticação baseada em Sessão:** Uso de cookies (`httpOnly`) e `express-session` para gerenciar o estado de login do usuário de forma segura.
* **Gerenciamento de Estado (React):** Uso de `useState`, `useEffect`.
* **Roteamento:** Utilização de `react-router-dom` no cliente e `express.Router()` no servidor.
* **Programação Assíncrona:** Uso intensivo de `async/await` e Promises para lidar com chamadas de API (`axios`) e consultas ao banco de dados (`sequelize`).
* **Validação de Formulários:** Aplicação de regras de validação robustas com `Yup` antes de enviar dados ao servidor.
* **Relações de Banco de Dados (ORM):** Mapeamento de associações do Sequelize (`hasMany`, `belongsTo`) para conectar Usuários, Posts e Comentários.

## Como Executar o Projeto

Para rodar este projeto, você precisará ter o **backend (servidor)** e o **frontend (cliente)** rodando simultaneamente em terminais separados.

### 1. Backend (Servidor)

```bash
# Clone o repositório do servidor
git clone [https://github.com/Jot4g3/pseudotwitter-server.git](https://github.com/Jot4g3/pseudotwitter-server.git)
cd pseudotwitter-server
```

# Instale as dependências
```bash
npm i
```

# Configure seu arquivo .env
```dotenv
DB_PASS=<senha_do_seu_banco_de_dados>
DB_NAME=<nome_do_seu_banco_de_dados>
SESSION_PASS=<senha_da_sessão>
```
OBS.:
```javascript
app.use(
    session({
        secret: process.env.SESSION_PASS, // <--- `A SESSION_PASS É USADA AQUI`
        resave: false,
        saveUninitialized: false,
        cookie: {
            // ...
        },
    })
);
```
O secret é a "chave" (senha) que o express-session usa para assinar e proteger o ID do cookie de sessão que ele envia para o navegador do usuário.

# Inicie o servidor
```bash
npm start
```

# O servidor estará rodando em http://localhost:3001

### 2. Frontend (Cliente)

# Clone este repositório
```bash
git clone [https://github.com/Jot4g3/pseudotwitter-client.git](https://github.com/Jot4g3/pseudotwitter-client.git)
cd pseudotwitter-client
```

# Instale as dependências
```bash
npm i
```

# Inicie o cliente (React)
```bash
npm start
```

# O aplicativo será aberto em http://localhost:3000
