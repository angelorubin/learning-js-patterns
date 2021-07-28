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

> O sistema operacional utilizado foi o Windows 10 com [WSL 2](https://docs.microsoft.com/pt-br/windows/wsl/install-win10). É necessário que a sua placa mãe tenha o suporte a [Virtualização](https://bit.ly/3iVvHZL) ativado.

Antes de executar os exemplos contidos neste repositório é preciso ter algumas ferramentas instaladas em seu sistema operacional:

- [Node](https://nodejs.org/en/download)
- [Git](https://www.atlassian.com/br/git/tutorials/install-git)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)
- [Docker](https://docs.docker.com/get-docker)

## Padrões contidos no repositório

1. Creational Patterns
   - Factory (Fábrica)

## Como esta organizado este projeto

Na raíz do projeto exsitem 3 pastas principais:

1. Creational Patterns
2. Behavioral Patterns
3. Structural Patterns

Cada pasta contém diversas subpastas com o nome do padrão com tudo (node_modules, docker-compose.yml, variáveis de ambiente, README, libs (blibliotecas), etc) o que é necessário para rodar cada exemplo individualmente.

## Iniciando

Primeiramente clone ou baixe o projeto para o seu computador.

Por exemplo para iniciar o factory pattern, entre na pasta do padrão, `cd project-path/creational-patterns/factory`, dentro da pasta digite o seguinte comando no console para instalar todos os pacotes necessários para o projeto:

`yarn install`

Feito isso, basta entrar na pasta e conferir o(s) script(s) criado(s) no arquivo `package.json` e executá-los através do console na seguinte ordem:

Primero digite no console:

`yarn docker-start` para iniciar o container com o MySQL, PostgreSQL e o Adminer.

Após a instalação abra o navegador e digite na barra de endereços:

localhost:8080

E uma imagem como essa abaixo deve aparecer:

![adminer](https://i.imgur.com/yt1YLLY.png)

## Exemplo de uso

Abra o console de sua preferência e navegue até a pasta do design pattern desejado com o seguinte comando:

`cd project-path/creational-patterns/factory`

Dentro da pasta observe que se (note que nem nem todos os exemplos necessitam) um arquivo chamado docker-compose.yml, caso exista é porque o exemplo necessita que seja instalado algumas ferramentas antes de poder ser executado.

> É preciso ter o Docker instalado em seu computador, como já citado anteriormente.
> Para saber como baixar, instalar e configurar o Docker, deixo um link com mais detalhes [aqui](https://docs.docker.com/get-docker).

Neste exemplo em específico do padrão factory é necessário ter em nosso container Docker o banco de dados MySQL, o PostgreSQL e o painel Adminer.
Todos eles serão disponibilizados através de apenas um container Docker.

Caso queira saber mais sobre Docker e Conteinerização, deixo essa referência [aqui](https://www.meupositivo.com.br/panoramapositivo/container-docker).

Neste exemplo de Factory Pattern eu abordo uma situação muito comum onde precisamos de um objeto de conexão com o banco de dados que seja flexível, pois podemos ter mais de uma fonte de dados no projeto e podemos precisar trocar, adicionar ou remover essas conexões. É nesse tipo de situação onde podemos aplicar o Factory Pattern para facilitar as trocas e diminuir a repetição de código pelo projeto de forma organizada.

## Verificando o funcionamento do container Docker

Existe uma extensão para o VsCode que facilita a visualização do Docker. Ela pode ser encontrada [aqui](https://bit.ly/3rHAAcN).

Você também pode visualizar pelo console com o eguinte comando:

`docker ps`

Você deve ter um resultado semelhante a esse da imagem abaixo:

![docker ps](https://i.imgur.com/Jfp6D9T.png)

## Configurando as variáveis de ambiente

Com o Docker devidamente instalado e funcionando, o proximo passo é preencher as variáveis de ambiente.

> DICA: O ideal é ter um arquivo .env principal no projeto de onde as variáveis de ambiente são controladas e centralizadas. Jamais envie o arquivo .env com dados sensíveis (senhas, etc) para o seu repositório. Coloque-o sempre no arquivo .gitignore na raiz do projeto.

6. Neste exemplo precisamos definir as configurações das variáveis de ambiente para os dois bancos dados (MySQ e PostgreSQL). Cada banco possui um arquivo .env separado.

Na pasta `creational-patterns/factory` no arquivo `.env.my.example` ficam as variáveis de ambiente do MySQL.

- MySQL
  - MYSQL_TYPE=mysql
  - MYSQL_HOST=127.0.0.1
  - MYSQL_PORT=3306
  - MYSQL_DATABASE=your-db
  - MYSQL_DB_USER=your-user
  - MYSQL_DB_PASSWORD=your-password
  - MYSQL_ROOT_PASSWORD=your-root-password

Na pasta `creational-patterns/factory` no arquivo `.env.pg.example` ficam as variáveis de ambiente do PostgreSQL.

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

Com isso teremos nosso container em pleno funcionamento!
Para testar digitamos o seguinte comando em nosso console:

`docker ps`
