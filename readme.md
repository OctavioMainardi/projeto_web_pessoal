# 📋 Task Manager API - Supabase + Node.js

Uma API RESTful para gerenciamento de tarefas com autenticação de usuários, usando **Node.js** no backend e **Supabase** como banco de dados PostgreSQL hospedado na nuvem.

## 🚀 Funcionalidades

- Autenticação de usuários via Supabase
- CRUD de tarefas
- Organização por categorias
- Integração com Supabase SQL (PostgreSQL)
- Roteamento com Express.js

## 🛠️ Tecnologias

- Node.js
- Express.js
- Supabase (PostgreSQL)
- Supabase JS SDK
- Dotenv

## 📁 Estrutura do Projeto

```
meu-projeto/
│
├── config/                # Arquivos de configuração (ex: conexão com banco)
│   └── database.js
├── controllers/           # Lógica de controle das requisições
│   └── HomeController.js
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── User.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── assets/                # Arquivos públicos como imagens e fontes
├── scripts/               # Arquivos de JavaScript públicos
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints (opcional)

```
