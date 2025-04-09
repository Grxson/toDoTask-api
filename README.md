# API de Lista de Tareas Pendientes

Esta es una API RESTful para gestionar una lista de tareas pendientes. Los usuarios pueden registrarse, iniciar sesión, y realizar operaciones CRUD sobre sus tareas pendientes. La API incluye autenticación de usuario, manejo de errores y paginación.

## Link Del Proyecto

```bash
https://roadmap.sh/projects/todo-list-api
```

## Requisitos

- Node.js
- MongoDB

## Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/Grxson/toDoTask-api.git

   ```

2. **Instalar dependencias**
   Navega al directorio del proyecto e instala las dependencias utilizando **npm** o **yarn**

```bash
cd toDoTask-api
npm install
```

O si tienes **yarn**

```bash
yarn install
```

3. **Configurar las variables de entorno**
   Crea un archivo **.env** en la raíz del proyecto con los siguientes parámetros:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/<nombreBD>
JWT_SECRET=clavesecreta
JWT_EXPIRES_IN=1d
COOKIE_SECRET=clavesecreta
```

4. **Ejecutar la aplicación**

```bash
npm run server
```

## Endpoints

https://documenter.getpostman.com/view/32483566/2sB2cX7fkr
