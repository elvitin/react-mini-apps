Ver em: [Português](README.md) | Inglês

# react-mini-apps

Application that uses the Single-page application resources of React, with different Backend technologies, `react-mini-apps` is an aggregator of small React projects that consume (or not) backend resources, the alternates between the applications.

<br>

## Iniating the Project

Run the .NET Core APIs with:

```bash
$ cd 'api-folder'
$ dotnet clean
$ dotnet build
$ dotnet watch run
```

Obs: Add the connection string in the `appsettings.json` and `appsettings.Development.json` files for the .NET APIs as follows:

```json
{
  "connString": "Server = <ServerAddress>; Database = <DatabaseName>; Uid = <User>; Pwd = <Password>;"
}
```

##### Replace the values between `< >` with the correct values example, `Pwd = <Password>` by `Pwd = 123xyz`.

<br>
<br>

Run the React project `MainReactRoutes` with:

```bash
$ cd MainReactRoutes
$ npm install
$ npm start
```

Obs: The `MainReactRoutes` React project uses `react-router-dom` to manage the routes, and each route, is an independent react project.

List of projects:

- [CalculadoraBoteco](/MainReactRoutes/src/pages/CalculadoraBoteco)

- [TodoList](/MainReactRoutes/src/pages/Todo)

## Future Implementations:

- [ ] Add more React projects

- [ ] Add more Spring and Node.js APIs

- [ ] Add script to run the Main React Project and all APIs

- [ ] Add in-memory database for APIs and option to pass the database connection string at runtime

## Contributors:

<div align='center'>

| [![](https://github.com/src-rodrigues.png?size=150)](https://github.com/src-rodrigues) |
| :------------------------------------------------------------------------------------: |
|                  [Victor Rodrigues](https://github.com/src-rodrigues)                  |

</div>
