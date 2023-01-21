# <img src="/mobile/src/assets/Logo-Cadastro.png" alt="React Native Icon" height="50" style="margin-right: 10px; transform: translateY(10px)"/> Adote Seu Pet

Adote Seu Pet é uma solução para conectar pessoas interessadas em
adotar um pet com aqueles que possuem pets disponíveis para
adoção com o objetivo facilitar o processo de adoção e contribuir
positivamente para a sociedade, diminuindo o número de animais
abandonados.

___

#### Stack de Desenvolvimento
<img src="https://bognarjunior.files.wordpress.com/2018/03/if_react-js_logo_1174949.png" alt="React Native Icon" height="14"/> React Native
<img src="https://static-00.iconduck.com/assets.00/expo-icon-512x462-3a87htea.png" alt="Expo Icon" height="14"/> Expo
<img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" alt="Node.js Icon" height="14"/> Node.js
<img src="https://cdn.iconscout.com/icon/free/png-256/postgresql-10-1175121.png" alt="PostgreSQL Icon" height="14"/> PostgreSQL
<img src="https://railway.app/brand/logo-light.png" alt="Railway Icon" height="16"/> Railway

#### Ferramentas

<img src="https://code.visualstudio.com/assets/apple-touch-icon.png" alt="Visual Studio COde Icon" height="14"/> Visual Studio Code
<img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" alt="Postman Icon" height="14"/> Postman
<img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git Icon" height="14"/> Git
<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="drawing" height="14"/> GitHub

___
#### Execução do Projeto
- Requisitos
    - PostegresSQL instalado
    - Node.js instalado
    - Alguma IDE de sua preferência
    - Expo instalado
    - Expo Go instalado no celular

###
- Banco de dados PostgreSQL
    - Criar um banco de dados
    - Para cirar as tabelas e povoar o banco de dados utilizar o arquivo `SqlScript.sql`
###
- API Node.js
    Dentro da pasta `api`
    - Variáveis de Ambiente
        Fazer uma copia do arquivo `.env.example` com o nome `.env` e adicionar valores nas variaveis abaixo

        ```
        PORT = Porta que a API vai escutar
        DB_HOST = IP do host do banco de dados
        DB_PORT = Porta do banco de dados
        DB_USER = Usuário do banco de dados
        DB_PASSWORD = Senha do banco de dados
        DB_DATABASE = Nome do banco de dados
        PRIVATE_KEY = Senha privada para criar e validar o JSON Web Token
        HTTP = Protocolo HTTP quanto estiver rodando local ou HTTPS em produção
        URL_BASE = URL base da API
        ```

    - Instalando dependencias
        ```js
        npm install
        ```
    - Levantando servidor
        ```js
        npm start
        ```

###
- Aplicação React Native

    - Instalando dependencias
        ```js
        npm install
        ```
        - Caso ocorra um erro no comando anterior
            ```js
            npm install --force
            ```
    
    - Iniciando a aplicação
        ```js
        expo start
        ```
        Será gerado um QR Code
    
    ######
    - Expo Go
        Abrir o app Expo Go e ler o QR Code gerado
___

#### Equipe

<a href = "https://github.com/lsguilherme/adote-seu-pet/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=lsguilherme/adote-seu-pet" max=4/>
</a>
