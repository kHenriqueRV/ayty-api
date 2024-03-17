# API para projetos de briefing - AYTY

Antes de iniciar a API você deve instalar as dependencias: 

## npm install

a API é conectado ao mongoDB e já possui um padrão definido.

caso você deseje usar um banco de dados local(Que também deve ser mongoDB) basta criar uma instancia no site deles:

criando projeto: Botão verde a direita da tela: 'new project/novo projeto' ![image](https://github.com/EuMendigo/ayty-api/assets/120668316/3c477f81-0027-4674-a4e7-c4f78e3fee98)
basta escolher um nome e confirmar a criação: 'new project name/nome do novo projeto' -> 'next/proximo' ![image](https://github.com/EuMendigo/ayty-api/assets/120668316/44a90e1a-1d14-4869-8ce3-8b5327ac83a5)
após criado você vai em connect -> drivers ![image](https://github.com/EuMendigo/ayty-api/assets/120668316/effd0b8b-530d-4ea7-a282-418b378ba931) - ![image](https://github.com/EuMendigo/ayty-api/assets/120668316/8cc81095-bb53-45ab-be04-269e278be137)

você deve copiar o seu codigo de acesso: ![image](https://github.com/EuMendigo/ayty-api/assets/120668316/3e5fae24-a798-49df-bfbb-5339b9b5ad31)
após copiado você vai no arquivo .env no seu clone da API e altere o DB_URI para o seu local.
lembre-se de alterar a <password> para a senha do seu user com acesso.

para saber a senha basta ir em database acess ![image](https://github.com/EuMendigo/ayty-api/assets/120668316/5c71785f-104f-4f7f-8106-491b7f06031a)
criar um novo usuario caso não tenha "add user database" e em edit você poderar criar a senha.

Lembre-se de alterar o usuario/senha dentro do .env. "mongodb+srv://username:password, não esqueça também de remover as <> 

após instalado, alocado sua database , basta iniciar através do:

## npm start 
