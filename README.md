# Aprendendo Padrões de Design

## Sobre este projeto

Este projeto visa em sua essência exemplificar alguns padrões de design com exemplos reais e úteis.

Existem algumas categorias de Padrões de Design:

1. Criacionais
2. Comportamentais
3. Estruturais

Estas três categorias dividem-se em muitas sub-categorias e que por sua vez serão o foco deste projeto.

> Os exemplos deste repositório são construidos com base na linguagem Javascript, no entanto os Design Patterns são universais e podem ser aplicados a qualquer linguagem de programação.

## Requerimentos básicos

Para executar os exemplos contidos neste repositório é preciso ter algumas ferramentas instaladas em seu sistema antes de começar:

- [Git](https://www.atlassian.com/br/git/tutorials/install-git)
- [Node](https://nodejs.org/en/download)
- [Docker](https://docs.docker.com/get-docker)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

## Padrões contidos no repositório

1. Creational Patterns
   - Factory (Fábrica)

## Como esta organizado o projeto

Dentro da raíz do projeto exsitem 3 pastas principais:

1. Creational Patterns
2. Padrões Comportamentais
3. Padrões Estruturais

Cada pasta contém uma subpasta com o nome do padrão em questão com tudo (docker-compose, pacotes, variáveis de ambiente, README, libs (blibliotecas), etc) o que é necessário para rodar cada exemplo isoladamente.

## Iniciando

Clone ou baixe o projeto para sua maquina.

Para rodar o exemplo basta entrar na pasta e conferir o(s) comando(s) (scripts) criado(s) no arquivo package.json e executa-lo através do console.

## Exemplo básico de uso

Abra o console e navegue até a pasta do padrão de design desejado com o seguinte comando:

`cd path/creational-patterns/factory`

3. Dentro da pasta observe se existe (note que nem nem todos os exemplos necessitam) um arquivo chamado docker-compose.yaml, caso exista é porque o exemplo exige que seja instalado algumas ferramentas antes do exemplo poder ser executado localmente.

> É preciso ter o docker instalado em sua maquina.
> Para saber como baixar, instalar e configurar o docker veja mais detalhes [aqui](https://docs.docker.com/get-docker).

3. Neste exemplo em específico é necessário ter em nosso container o MySQL, PostgreSQL e Adminer, e todos serão disponibilizados através de um container Docker.

Caso precise saber mais sobre containers e Docker, deixo essa referência [aqui](https://www.meupositivo.com.br/panoramapositivo/container-docker).

4. Neste exemplo de Factory Pattern eu abordo uma situação onde precisamos de um objeto de conexão com o banco de dados que seja flexível, pois podemos a mais de uma fonte de dados no projeto e poderemos até precisar trocar, adicionar ou remover conexões. É nesse tipo de situação onde podemos aplicar o Factory Pattern para facilitar as trocas e diminuir a repetição de código pelo projeto, teoricamente, sem muito sofrimento.

5. Com o Docker devidamente instalado e rodando, o proximo passo é preencher as configurações (password e user) do arquivo .env-example encontrado na raíz do projeto.

> DICA: O ideal é ter um arquivo .env principal no projeto de onde as variáveis de ambiente são controladas e centralizadas. Jamais envie o arquivo .env com dados sensíveis (senhas, etc) para o seu repositório. Coloque-o sempre no arquivo .gitignore. É necessario renomear o arquivo .env-example para .env para o projeto funcionar corretamente.

6. Neste exemplo precisamos definir as configurações das variáveis de ambiente para os dois bancos (MySQ e PostgreSQL) encontrados no arquivo .env-example.

- MySQL
  - MYSQL_HOST=127.0.0.1
  - MYSQL_PORT=3306
  - MYSQL_DB=mysql-db
  - MYSQL_USER=your_user
  - MYSQL_ROOT_PASSWORD=your_password

* Postgres
  - PG_TYPE=postgres
  - PG_PORT=5432
  - PG_HOST=127.0.0.1
  - POSTGRES_DB=postgres-db
  - POSTGRES_USER=your_user
  - POSTGRES_PASSWORD=your_password

## Executando nosso container

Depois de tudo configurado precisamos dizer ao Docker para montar o nosso container com as ferramentas que definimos no arquivo docker-compose.yaml, então utilizamos o seguinte comando no console:

`docker-compose up -d`
