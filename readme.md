# Task Manager API

## Descrição do sistema

Este projeto é uma API RESTful para gerenciamento de tarefas, desenvolvida em Node.js com banco de dados SQL utilizando o Supabase.  
Permite o cadastro e autenticação de usuários, criação de tarefas, organização por categorias e controle de status e prazos.

## Estrutura de pastas e arquivos

```text
project-root/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── supabaseClient.js
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Como executar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/task-manager-api.git
cd task-manager-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-chave-anon
PORT=3000
```

### 4. Execute o projeto

```bash
npm run dev
```

Ou, se preferir:

```bash
node src/app.js
```

A API estará disponível em:

```text
http://localhost:3000
```
