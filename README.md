# **SonarQube + Nodejs**

Para iniciar o projeto basta executar esse seguinte comando:

```
docker-compose up
```

Aṕos iniciar o serviços basta entrar nesse seguinte endereço:

```
http://localhost:9000/about
```

Para iniciar um novo projeto é necessário realizar o login. Para isso entre com o seguinte _login_ e _password_.

```
Login: admin
Password: admin
```

Após a criação do _provide token_ e do _project key_ instale o SonarQube Scanner([dcumentação para a instação](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner)) e execute o comando que o proprio SonarQube passará durante o processo de inserção do projeto.

Após esse processo basta executar esse comando para gerar o relatório de cobertura:

```
npm run cover
```

## **Desfazendo**

Para derrubar todos os serviços levantados basta digitar o seguinte comando:

```
docker-compose down
```

## **Refazendo tudo do zero**

A seguir estão todos comandos úteis, caso queira recomeçar do zero.

### **Parando todos os contêineres do Docker**

Se você executar esse comando mais de uma vez **ele retornará uma mensagem de erro sobre parâmetros**.

```
docker stop $(docker ps -a -q)
```

### **Excluindo todos os contêineres do Docker**

Remoção de todos os contêineres

Obs.: certifique-se de que você parou todos os contêineres antes de executar esse comando, caso contrário, ele retornará um erro.

```
docker rm $(docker ps -a -q)
```

### **Excluindo todas as imagens do Docker**

Remover todas as imagens que você possui

```
docker rmi $(docker images -q)
```
