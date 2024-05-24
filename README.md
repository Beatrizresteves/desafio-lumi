# Desafio Lumi - Documentação do Projeto

## Descrição
Este é o projeto do Desafio Lumi, que envolve a criação de um sistema com banco de dados PostgreSQL e ORM Sequelize/Prisma.

## Configuração do Ambiente

### Pré-requisitos
- Node.js
- PostgreSQL

### Instalação de Dependências
1. Clone este repositório em sua máquina local.
2. Navegue até a pasta do projeto no terminal.
3. Execute o comando `npm install` para instalar todas as dependências do projeto.

### Configuração do Banco de Dados
1. Certifique-se de ter o PostgreSQL instalado e em execução.
2. Abra o terminal e execute o seguinte comando para acessar o PostgreSQL:

psql -U postgres

3. Crie um banco de dados PostgreSQL com o nome `db_lumi` usando o seguinte comando:


CREATE DATABASE db_lumi;

4. Crie um usuário PostgreSQL com o nome `lumi` e atribua uma senha usando o seguinte comando:

GRANT ALL PRIVILEGES ON DATABASE db_lumi TO lumi;


### Configuração do Arquivo de Variáveis de Ambiente
1. Renomeie o arquivo `.env.example` para `.env`.
2. Preencha as variáveis de ambiente no arquivo `.env` com suas configurações de banco de dados. Exemplo:

DB_USERNAME=lumi
DB_PASSWORD=sua_senha
DB_DATABASE=db_lumi
DB_HOST=127.0.0.1
DB_DIALECT=postgres



## Execução do Projeto
1. Certifique-se de estar na pasta do projeto no terminal.
2. Execute o comando `npm start` para iniciar o servidor.
3. O servidor estará disponível em `http://localhost:3000`.

## Estrutura do Projeto
- `config/`: Contém arquivos de configuração, como `config.json`.
- `models/`: Contém os modelos Sequelize/Prisma que representam as tabelas do banco de dados.
- `routes/`: Contém os arquivos de rotas para definir as APIs REST.
- `controllers/`: Contém os controladores para lidar com as solicitações HTTP.
- `middlewares/`: Contém os middlewares para aplicar lógica entre as solicitações e as respostas.
- `server.js`: Arquivo principal que inicializa o servidor.

## Contribuição
Sinta-se à vontade para contribuir com este projeto. Você pode enviar pull requests ou relatar problemas encontrados.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).
