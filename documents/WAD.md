# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto

#### Autor do projeto

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

*Preencha com até 300 palavras – sem necessidade de fonte.*
*Descreva brevemente o sistema que você irá desenvolver.*

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01 - opcional)

*Posicione aqui sua(s) Persona(s) em forma de texto markdown com imagens, ou como imagem de template preenchido. Atualize esta seção ao longo do módulo se necessário.*

### 2.2. User Stories (Semana 01 - opcional)

*Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária.*

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

<p align= "center">
  <img src="https://res.cloudinary.com/dibnfst0j/image/upload/v1746819717/mermaid_tynfls.jpg" border="0" width="40%" height="40%">
</p>

<p align= "center">
  <img src="https://res.cloudinary.com/dibnfst0j/image/upload/v1746819721/Untitled_xnuift.png" border="0" width="40%" height="40%">
</p>

```javascript
Table users {
  id int [pk, increment] // Primary Key
  name varchar
  email varchar [unique]
  password varchar
  created_at datetime
}

Table categories {
  id int [pk, increment]
  name varchar
  user_id int [ref: > users.id] // Cada categoria pertence a um usuário
}

Table tasks {
  id int [pk, increment]
  title varchar
  description text
  status varchar // Ex: 'pendente', 'em andamento', 'concluída'
  due_date date
  created_at datetime
  user_id int [ref: > users.id] // Tarefa criada por um usuário
  category_id int [ref: > categories.id] // Categoria da tarefa
}

// .SQL

```

### 3.1.1 BD e Models (Semana 5)
O sistema implementa os seguintes Models:

User
Representa um usuário do sistema.,
Campos:
id: UUID, identificador único do usuário.,
username: Nome de usuário, string única e obrigatória.,
email: E-mail do usuário, string única e obrigatória.,
password: Senha do usuário, string obrigatória.,
created_at: Data de criação do usuário.,
,
,

Task
Representa uma tarefa criada por um usuário.,
Campos:
id: UUID, identificador único da tarefa.,
title: Título da tarefa, string obrigatória.,
description: Descrição da tarefa, texto opcional.,
completed: Status de conclusão, booleano (padrão: false).,
userId: UUID do usuário ao qual a tarefa pertence (chave estrangeira).,
created_at: Data de criação da tarefa.

### 3.2. Arquitetura (Semana 5)

O sistema segue o padrão arquitetural MVC (Model-View-Controller) com separação clara de responsabilidades:

Model: Representa os dados e regras de negócio. Exemplo: User.js e Task.js em /models.,
Service: Camada intermediária que implementa a lógica de negócio e faz a ponte entre os controllers e o banco de dados. Exemplo: userService.js e taskService.js em /services.,
Controller: Recebe as requisições HTTP, chama os serviços necessários e retorna as respostas. Exemplo: userController.js e taskController.js em /controllers.,
Routes: Define os endpoints da API e encaminha as requisições para os controllers. Exemplo: userRoutes.js, taskRoutes.js, frontRoutes.js em /routes.,
View: Interface HTML estática servida por Express, localizada em /views.,

O fluxo de dados ocorre da seguinte forma:

O usuário faz uma requisição HTTP para um endpoint definido em /routes.,
O controller correspondente processa a requisição e chama o service adequado.,
O service executa a lógica de negócio e interage com o banco de dados via /config/db.js.,
O resultado é retornado ao controller, que envia a resposta ao usuário.

(*atualizar dps*)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03 - opcional)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05 - opcional)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

http://localhost:3000/documentation/

POST /api/users/register — Registrar novo usuário,
POST /api/users/login — Login de usuário,
GET /api/users — Listar todos os usuários,
GET /api/users/:id — Buscar usuário por ID,
DELETE /api/users/:id — Remover usuário,

POST /api/tasks — Criar nova tarefa,
DELETE /api/tasks/:taskId — Remover tarefa,
PATCH /api/tasks/:taskId/complete — Marcar tarefa como concluída,
GET /api/tasks/user/:userId — Listar tarefas de um usuário

### 3.7 Interface e Navegação (Semana 07)

Utilizei uma interface moderna do CSS, com uma pasta de estilos que cuida de varias classes e adiciona coisas com familia de fonte (font-family), curvas, bordas, e define o resto do estilo.

<img src="https://media.discordapp.net/attachments/1137901120593870883/1380721320802648144/Screenshot_2025-06-06_at_10.33.29_PM.png?ex=6844e86f&is=684396ef&hm=b7b9d391200d38688d7dc5e1636d1101e0f71efdd45700d4c09b7ba7cf5d8f48&=&format=webp&quality=lossless&width=1450&height=820" border="0" width="40%" height="40%">


<img src="https://media.discordapp.net/attachments/1137901120593870883/1380721423344996352/Screenshot_2025-06-06_at_10.33.53_PM.png?ex=6844e887&is=68439707&hm=47aee3575ca14bec987ca7a9cb47630815947b781857432fbb2e03a665a5981f&=&format=webp&quality=lossless&width=1468&height=820" border="0" width="40%" height="40%">


<img src="https://media.discordapp.net/attachments/1137901120593870883/1380721836471484468/Screenshot_2025-06-06_at_10.35.33_PM.png?ex=6844e8ea&is=6843976a&hm=2411ff68cf0318d653aa4670ab530d7b59e203d5e9e0f076fc25fdf6a18d8e7c&=&format=webp&quality=lossless&width=1448&height=819" border="0" width="40%" height="40%">


## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

https://youtu.be/VZJbnHUssog video de no max 5m enviado no YT

O projeto consiste em uma aplicação web desenvolvida com Node.js, estruturada no padrão MVC (Model-View-Controller). O sistema oferece gerenciamento de tarefas (to-do list) com autenticação de usuários, permitindo criar, remover e marcar tarefas como concluídas. O backend utiliza Express para a criação de uma API RESTful, com rotas para cadastro, login, listagem de usuários e operações CRUD de tarefas. O banco de dados utilizado é PostgreSQL, com scripts de migração para criação das tabelas. A interface web é responsiva e moderna, com estilos personalizados em CSS. O projeto é modular, organizado em camadas de models, services, controllers e views, facilitando a manutenção e futuras expansões.

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

Aprendi que para obter resultado na programação, é necessario utilizar o minimo de IA possivel, programar é questão de pratica e tentativa. Alem disso uma arquitetura básica de banco de dados e tabelas com SQL deixou de ser algo intimidador para mim.

Com certeza em algum outro site que eu fizer, vou utilizar essa arquitetura, assim como meus amigos fizeram em https://owfantasy-latam.com/

## <a name="c5"></a>5. Referências

<img src="https://media.discordapp.net/attachments/901188259839897630/1383938202808614943/steam-happy-but-high-quality-v0-22ku6htw4u0c1.png?ex=68509c63&is=684f4ae3&hm=7166c604af8780a65cec08cefde8e0988da5291ab79d917ef53fd1191909fb1b&=&format=webp&quality=lossless&width=900&height=950" alt="Projeto Banner" width="40%" height="40%" align="center">