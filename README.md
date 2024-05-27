# Desafio Lumi - Documentação do Projeto

## Descrição
Este é o projeto do Desafio Lumi, que envolve a criação de um sistema com banco de dados PostgreSQL e ORM Sequelize/Prisma. O projeto também inclui scripts em Python para extração de dados de arquivos PDF.

## Estrutura do Projeto
- **backend/**: Contém o código relacionado ao servidor e à API.
  - **config/**: Contém arquivos de configuração, como `config.json`.
  - **models/**: Contém os modelos Sequelize/Prisma que representam as tabelas do banco de dados.
  - **routes/**: Contém os arquivos de rotas para definir as APIs REST.
  - **controllers/**: Contém os controladores para lidar com as solicitações HTTP.
  - **middlewares/**: Contém os middlewares para aplicar lógica entre as solicitações e as respostas.
  - **server.js**: Arquivo principal que inicializa o servidor.
- **frontend/**: Contém o código relacionado à interface do usuário.
- **scripts/**: Contém scripts Python para extração de dados de PDFs.
  - **faturas/**: Pasta onde os arquivos PDF das faturas devem ser colocados.

## Configuração do Ambiente

### Pré-requisitos
- Node.js
- PostgreSQL
- Python 3.8 ou superior
- Pip (gerenciador de pacotes do Python)

### Instalação de Dependências

#### Dependências Node.js (Backend e Frontend)

1. Clone este repositório em sua máquina local:
    ```sh
    git clone https://github.com/Beatrizresteves/desafio-lumi.git
    ```

2. Navegue até a pasta do projeto no terminal:
    ```sh
    cd desafio-lumi
    ```

3. Instale as dependências no backend:
    ```sh
    cd backend
    npm install
    ```

4. Instale as dependências no frontend:
    ```sh
    cd ../frontend
    npm install
    ```

#### Dependências Python (Scripts)

1. Navegue até a pasta `scripts` do projeto:
    ```sh
    cd ../scripts
    ```

2. Crie e ative um ambiente virtual Python:
    ```sh
    python -m venv venv
    source venv/bin/activate  # Para Linux/Mac
    .\venv\Scripts\activate   # Para Windows
    ```

3. Instale as dependências Python listadas no arquivo `requirements.txt`:
    ```sh
    pip install -r requirements.txt
    ```

### Configuração do Banco de Dados

1. Certifique-se de ter o PostgreSQL instalado e em execução.

2. Abra o terminal e execute o seguinte comando para acessar o PostgreSQL:
    ```sh
    psql -U postgres
    ```

3. Crie um banco de dados PostgreSQL com o nome `db_lumi` usando o seguinte comando:
    ```sql
    CREATE DATABASE db_lumi;
    ```

4. Crie um usuário PostgreSQL com o nome `lumi` e atribua uma senha:
    ```sql
    CREATE USER lumi WITH PASSWORD 'sua_senha';
    GRANT ALL PRIVILEGES ON DATABASE db_lumi TO lumi;
    ```

### Configuração do Arquivo de Variáveis de Ambiente

1. Renomeie o arquivo `.env.example` para `.env`.

2. Preencha as variáveis de ambiente no arquivo `.env` com suas configurações de banco de dados. Exemplo:
    ```env
    DB_USERNAME=lumi
    DB_PASSWORD=sua_senha
    DB_DATABASE=db_lumi
    DB_HOST=127.0.0.1
    DB_DIALECT=postgres
    ```

## Execução do Projeto

### Iniciar o Servidor Backend

Certifique-se de estar na pasta `backend` no terminal:
```sh
cd backend
npm start
 ```

### Iniciar o Frontend

Certifique-se de estar na pasta `frontend` no terminal:
```sh
cd ../frontend
npm start
 ```
A interface do usuário estará disponível em http://localhost:3001 (ou outra porta especificada).

### Executar Script de Extração de Dados

1. Certifique-se de ter ativado o ambiente virtual Python:
```sh
source venv/bin/activate  # Para Linux/Mac
.\venv\Scripts\activate   # Para Windows
 ```
2. Navegue até a pasta scripts do projeto:
 ```sh
cd ../scripts
 ```
3. Crie uma pasta chamada faturas dentro da pasta scripts e coloque os arquivos PDF que você deseja processar dentro dessa pasta.

4. Coloque o caminho da pasta no arquivo extract_data.py.

5. Execute o script extract_data.py:
 ```sh
python extract_data.py
 ```

## Estrutura das Pastas de Faturas
  A pasta faturas deve ser criada dentro da pasta scripts.
  Coloque os arquivos PDF das faturas que você deseja processar dentro da pasta faturas.
  
