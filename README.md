Look in: [English](/README_en.md) | Portuguese

# react-mini-apps

Aplicação que utiliza os recursos Single-page application do React, com diferentes tecnologias de Backend, `react-mini-apps` é um agregador de pequenos projetos React que consomem (ou não) recursos de backend, a alterna entre as aplicações.

<br>

## Iniando o Projeto

Execute as APIs .NET Core com:

```bash
$ cd 'api-pasta'
$ dotnet clean
$ dotnet build
$ dotnet watch run
```

Obs: Adicione a string de conexão nos arquivos `appsettings.json` e `appsettings.Development.json` para as APIs .NET como segue:

```json
{
  "connString": "Server = <EndereçoDoServidor>; Database = <NomeDoBanco>; Uid = <Usuario>; Pwd = <Senha>;"
}
```

##### Substitua os valores entre `< >` pelos valores corretos exemplo, `Pwd = <Senha>` por `Pwd = 123xyz`.

<br>
<br>

Execute o projeto React `MainReactRoutes` com:

```bash
$ cd MainReactRoutes
$ npm install
$ npm start
```

Obs: O projeto `MainReactRoutes` utiliza o `react-router-dom` para gerenciar as rotas, e cada rota, é um projeto react independente.

Lista de projetos:

- [CalculadoraBoteco](/MainReactRoutes/src/pages/CalculadoraBoteco)

- [TodoList](/MainReactRoutes/src/pages/Todo)

## Futuras Implementações:

- [ ] Adicionar mais projetos React

- [ ] Adicionar mais APIs Spring e Node.js

- [ ] Adicionar script para executar o Projeto React Principal e todas as APIs

- [ ] Adicionar banco de dados em memória para as APIs e opção para passar a string de conexão do banco de dados em tempo de execução

## Contribuidores:

<div align='center'>

| [![](https://github.com/src-rodrigues.png?size=150)](https://github.com/src-rodrigues) |
| :------------------------------------------------------------------------------------: |
|                  [Victor Rodrigues](https://github.com/src-rodrigues)                  |

</div>
