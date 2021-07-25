# Aprendendo Padrões em Javascript

## Sobre o projeto

Neste reposítório pretendo colocar meus estudos/pesquisas sobre Design Patterns (padrões de design) criacionais, comportamentais e estruturais de desenvolvimento com exemplos específicos para a linguagem JavaScript.

No entanto os Design Patterns são universais e podem ser aplicados a qualquer linguagem de programação.

## Requerimentos básicos

Para executar os exemplos contidos neste repositório é preciso ter algumas ferramentas instaladas em seu sistema.

- [Node](https://nodejs.org/en/download)
- [Docker](https://docs.docker.com/get-docker)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

## Padrões contidos no repositório

1. Padrões Criacionais
   - Factory (Fábrica)

## Como esta organizado o projeto

Dentro da raíz do projeto exsitem 3 pastas principais:

1. Padrões Criacionais
2. Padrões Comportamentais
3. Padrões Estruturais

Cada pasta contém uma subpasta com o nome do padrão em questão com tudo (docker-compose, pacotes, variáveis de ambiente, README, libs (blibliotecas), etc) o que é necessário para rodar cada exemplo individualmente.

Para rodar o exemplo basta entrar na pasta e conferir o(s) comando(s) (scripts) criado(s) no arquivo (package.json) e executa-lo através do console.

Exemplo:

1. Abra o console e navegue até a pasta do padrão desejado

   `cd path/creational-patterns/factory`

2. Dentro da pasta observe se existe (note que nem nem todos os exemplos precisam) um arquivo chamado docker-compose.yaml, caso exista é porque o exemplo exige que seja instalado algumas ferramentas antes do exemplo poder ser executado localmente.

> É preciso ter o docker instalado em sua maquina.
> Para saber como baixar, instalar e configurar o docker veja mais detalhes [aqui](https://docs.docker.com/get-docker).

3. Neste exemplo em específico é necessário ter o MySQL, PostgreSQL e Adminer, todos rodando localmente em um container Docker. Se precisa saber mais sobre containers do Docker deixo essa referência [aqui](https://www.meupositivo.com.br/panoramapositivo/container-docker).

4. Neste exemplo de Factory Pattern eu tento exemplificar uma situação onde vamos precisar de um objeto de conexão com o banco de dados que seja flexível, pois podemos ter mais de um banco de dados no projeto e podemos até precisar trocar ou remover conexões. É neste tipo de situação onde podemos aplicar o Factory Pattern para facilitar as trocas e repetição de código.

5. Com o Docker devidamente instalado e rodando, o proximo passo é preencher as configurações (password e user) do arquivo .env-example encontrado na raíz do projeto.

> DICA: O ideal é ter um aqruivo .env principal no seu projeto de onde as variáveis de ambiente são controladas e centralizadas. Jamais envie o arquivo .env com dados sensíveis (senhas, etc) para o seu repositório. Coloque-o sempre no arquivo .gitignore.

6. Neste exemplo precisamos colocar as configurações para os dois bancos (MySQ e PostgreSQL) encontrados no arquivo .env-example.

## MySQL

- MYSQL_HOST=127.0.0.1
- MYSQL_PORT=3306
- MYSQL_DB=mysql-db
- MYSQL_USER=your_user
- MYSQL_ROOT_PASSWORD=your_password

## Postgres

- PG_TYPE=postgres
- PG_PORT=5432
- PG_HOST=127.0.0.1
- POSTGRES_DB=postgres-db
- POSTGRES_USER=your_user
- POSTGRES_PASSWORD=your_password

## Em desenvolvimento
