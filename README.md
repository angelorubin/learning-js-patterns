# Aprendendo Padrões de Design

## Sobre este projeto

Este projeto visa em sua essência exemplificar da forma mais objetiva possível alguns design patterns (padrões de design) com exemplos reais e úteis.

Existem algumas categorias de Padrões de Design:

1. Criacionais
2. Comportamentais
3. Estruturais

Estas três categorias dividem-se em muitas sub-categorias e estas por sua vez serão o foco deste projeto.

> Os exemplos deste repositório são construidos com base na linguagem Javascript, no entanto os Design Patterns são `universais` e podem ser aplicados a qualquer linguagem de programação.

## Requerimentos básicos

> O sistema operacional utilizado foi o Windows 10 com [WSL 2](https://docs.microsoft.com/pt-br/windows/wsl/install-win10). É necessário que o seu processador tenha o suporte a [virtualização](https://bit.ly/3iVvHZL) ativado.

Antes de executar os exemplos contidos neste repositório é preciso ter algumas ferramentas instaladas em seu sistema operacional:

- [Node](https://nodejs.org/en/download)
- [Git](https://www.atlassian.com/br/git/tutorials/install-git)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)
- [Docker](https://docs.docker.com/get-docker)

## Padrões contidos no repositório (em desenvolvimento)

1. Creational Patterns
   - Factory (Fábrica)

## Como esta organizado este projeto

Na raíz do projeto exsitem 3 pastas principais:

1. Creational Patterns
2. Structural Patterns
3. Behavioral Patterns

Cada pasta contém diversas subpastas com o nome de cada padrão de design com tudo (node_modules, docker-compose.yml, variáveis de ambiente, README, libs (blibliotecas), etc) o que é necessário para rodar cada exemplo isoladamente.

## Iniciando

Primeiramente clone ou baixe o projeto para o seu computador.

> É necessário criar e configurar uma conta no [Github](https://www.github.com).

Por exemplo para iniciar o factory pattern, entre na pasta do padrão, `cd project-path/creational-patterns/factory`, dentro da pasta digite o seguinte comando no console para instalar todos os pacotes necessários para o projeto:

`yarn install`

Na raíz da pasta, no arquivo `package.json`, estão o(s) script(s) criado(s) para execução do projeto.

Primero digite no console:

`yarn docker-start`

Este comando inicia o container Docker com os nossos serviços:

- MySQL;
- PostgreSQL;
- Adminer.

Após a conclusão da instalação, abra o navegador e digite na barra de endereço:

localhost:8080

E uma imagem como essa abaixo deve aparecer:

![adminer](https://i.imgur.com/yt1YLLY.png)

## Exemplo de uso completo

Abra o console de sua preferência e navegue até a pasta do design pattern Factory com o seguinte comando:

`cd project-path/creational-patterns/factory`

Dentro da pasta observe que existe (note que nem nem todos os exemplos possuem) um arquivo chamado docker-compose.yml, caso exista é porque o exemplo necessita que seja instalado algumas ferramentas antes de poder ser executado.

Neste exemplo em específico é necessário ter em nosso container Docker o banco de dados MySQL, o PostgreSQL e o painel Adminer.
Todos esses serviços serão criados no container.

Caso queira saber mais sobre Docker e Conteinerização, deixo essa referência [aqui](https://www.meupositivo.com.br/panoramapositivo/container-docker).

Neste exemplo eu abordo uma situação muito comum onde precisamos de um objeto de conexão com o banco de dados que seja flexível, pois podemos ter mais de uma fonte de dados no projeto e podemos precisar trocar, adicionar ou remover essas conexões com facilidade.

É exatamente nesse tipo de situação onde podemos aplicar o Factory Pattern para facilitar as trocas e diminuir a repetição de código pelo projeto de forma organizada.

## Configurando as variáveis de ambiente

Com o Docker instalado, o proximo passo é preencher as variáveis de ambiente.

> DICA: O ideal é ter um arquivo .env principal no projeto de onde as variáveis de ambiente são controladas e centralizadas. Jamais envie o arquivo .env com dados sensíveis (senhas, etc) para o seu repositório. Coloque-o sempre no arquivo .gitignore na raiz do projeto.

6. Neste exemplo precisamos definir as configurações das variáveis de ambiente para os dois bancos de dados (MySQL e PostgreSQL).

> Nesse exemplo eu optei por criar um arquivo .env para cada banco de dados.

Na pasta `creational-patterns/factory` podemos encontrar o arquivo `.env.my.example` onde ficam as variáveis de ambiente de conexão do MySQL.

- MySQL
  - MYSQL_TYPE=mysql
  - MYSQL_HOST=127.0.0.1
  - MYSQL_PORT=3306
  - MYSQL_DATABASE=your-db
  - MYSQL_DB_USER=your-user
  - MYSQL_DB_PASSWORD=your-password
  - MYSQL_ROOT_PASSWORD=your-root-password

Na pasta `creational-patterns/factory` podemos encontrar o arquivo `.env.pg.example` onde ficam as variáveis de ambiente do PostgreSQL.

- Postgres
  - PG_TYPE=postgres
  - PG_HOST=127.0.0.1
  - PG_PORT=5432
  - POSTGRES_DB=your-db
  - POSTGRES_USER=your-user
  - POSTGRES_PASSWORD=your-password

## Iniciando o Container

Depois de tudo configurado precisamos dizer ao Docker para iniciar o nosso container com as configurações que definimos no arquivo `docker-compose.yml` e para isso utilizamos o seguinte comando no console:

`yarn docker-start`

Com isso já teremos nosso container com os nosso serviços em pleno funcionamento.

## Verificando o funcionamento do container

Existe uma extensão para o VsCode que facilita a manipulação dos containers do Docker. Ela pode ser encontrada [aqui](https://bit.ly/3rHAAcN).

Você também pode visualizar através do console com o seguinte comando:

`docker ps`

Você deve obter um resultado semelhante a esse:

![docker ps](https://i.imgur.com/Jfp6D9T.png)

Aqui podemos notar cada parte criada de cada container:

- ID do Container,
- Nome do Container,
- ID da Imagem Criada,
- Portas do Container,
- etc.
