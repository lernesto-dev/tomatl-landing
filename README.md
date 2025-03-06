# Template

Proyecto 

## Stack tecnologico

| Herramientas | Versión  | Description            |
| :----------- | :------- | :--------------------- |
| `Node`       | `20.9.0` | Entorno de ejecución   |
| `Java JDK`   | `11`     | Para emulador firebase |
| `MySQL`      | `8.0.36` | Base de datos          |

## Dependencias

| Dependencias     | Versión  | Description                              |
| :--------------- | :------- | :--------------------------------------- |
| `express`        | `4.18.2` | Entorno de trabajo                       |
| `zod`            | `3.22.4` | Validación de datos                      |

## Estructura

```
/
├── src/
│    ├── config/
│    ├── constants/
│    ├── routers/
│    ├── services/
│    ├── utils/
│    └── index.js
├── tests/
├── .env.dev
├── .env.prod
└── .env.template
```

> [!NOTE]
> El archivo `.env.dev` contiene las credenciales de desarrollo

> [!NOTE]
> El archivo `.env.prod` contiene las credenciales de producción

## Comandos

Levantar el servicio en modo desarrollo

```bash
npm dev
```

Compila los archivos

```bash
npm build
```

Ejecuta el proyecto compilado despues del comando `npm run build`

```bash
npm start
```

Ejecuta los test que se encuentran en la carpeta `test`

```bash
npm test
```

Ejecuta los test que se encuentran en la carpeta `test` y se queda a la escucha de cambios en las pruebas

```bash
npm test:watch
```


> [!NOTE]
> Antes de correr algun comando ejecutar el comando `npm install` para instalar las dependencias