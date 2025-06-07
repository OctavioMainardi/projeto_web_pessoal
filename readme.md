# Task Manager API

## Descrição do sistema

Este projeto é uma API RESTful para gerenciamento de tarefas, desenvolvida em Node.js com banco de dados PostgreSQL hospedado no Supabase.  
Permite o cadastro e autenticação de usuários, criação de tarefas, e controle de status.

## Estrutura de pastas e arquivos

```text
projeto_web_pessoal/
├── controllers/
│   ├── taskController.js
│   └── userController.js
├── models/
│   ├── Task.js
│   └── User.js
├── routes/
│   ├── frontRoutes.js
│   ├── taskRoutes.js
│   └── userRoutes.js
├── scripts/
│   ├── init.sql
│   └── migration.js
├── services/
│   ├── taskService.js
│   └── userService.js
├── config/
│   └── db.js
├── .env
├── package.json
├── server.js
└── readme.md
```

## Como executar o projeto localmente

### 1. Clone o repositório

```bash
git clone <url-do-seu-repositorio>
cd projeto_web_pessoal
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
DB_HOST="<host-do-supabase>"
DB_USER="<usuario>"
DB_PASSWORD="<senha>"
DB_DATABASE="<nome-do-banco>"
DB_PORT="<porta>"
```

### 4. Execute as migrações do banco de dados

```bash
node scripts/migration.js
```

### 5. Inicie o servidor

```bash
node server.js
```

A API estará disponível em:

```text
http://localhost:3000
```

## Endpoints principais

- **Usuários**

  - `POST /api/users/register` — Registrar novo usuário
  - `POST /api/users/login` — Login de usuário
  - `GET /api/users` — Listar todos os usuários
  - `GET /api/users/:id` — Buscar usuário por ID
  - `DELETE /api/users/:id` — Remover usuário

- **Tarefas**
  - `POST /api/tasks` — Criar nova tarefa
  - `DELETE /api/tasks/:taskId` — Remover tarefa
  - `PATCH /api/tasks/:taskId/complete` — Marcar tarefa como concluída
  - `GET /api/tasks/user/:userId` — Listar tarefas de um usuário

## Observações

- O projeto utiliza Express.js para a API e conexão com PostgreSQL via Supabase.
- As migrações de banco de dados estão em `scripts/init.sql` e podem ser executadas manualmente ou via `migration.js`.


A primeira versão do nosso sistema web conta com a utilização do sistema MVC (Model, View, Controller), um padrão de arquitetura de software que separa a aplicação em três componentes principais para melhor organização e manutenção do código.

Model (Modelo): Responsável pela lógica de negócios e manipulação dos dados. No nosso sistema, o backend já está bem desenvolvido, com várias rotas, incluindo as dos pacientes e profissionais de saúde, garantindo a comunicação eficiente com o banco de dados.

View (Visão): Representa a interface do usuário (frontend), que será responsável por exibir os dados e interagir com o usuário. Essa parte ainda não será iniciada na próxima sprint.

Controller (Controlador): Atua como intermediário entre o Model e a View, processando as requisições do usuário, aplicando a lógica necessária e retornando as respostas adequadas, ou seja, essa parte deixa possível o retorno de dados de pacientes por exemplo.

A adoção do MVC traz benefícios como a separação de conceitos, facilitando a escalabilidade e a manutenção do sistema. No momento, estamos focados no backend, mas a estrutura já está preparada para a futura integração com o frontend. A parte visual do projeto já está preparada junto com seu fluxo. Os mockups, como são chamados os protótipos de alta fidelidade, já estão prontos para serem replicados na aplicação.

As principais dificuldades enfrentadas pelo grupo na parte do código, foi a resolução de bugs no servidor junto às tabelas, no qual não estavam atendendo os comandos requisitados e não estavam em sincronia umas com as outras. Além disso, a manutenção de pastas foi um grande desafio, visto que os arquivos estavam em commits diferentes.