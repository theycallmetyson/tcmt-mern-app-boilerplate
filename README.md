# M.E.R.N. app with TS, Vite and Vitest ready to deploy into Docker container.

This is a simple boilerplate with [React](https://reactjs.org/) as frontend, [Express](https://expressjs.com/) & [Node](https://nodejs.org/en/) as backend and [Mongodb](https://www.mongodb.com/) as database with [Redis](https://redis.io/) in between. The whole project is using [Typescript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/) and [Vitest](https://vitest.dev/) as test framework.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install all the dependencies separately in backend, frontend and the root folder.

```bash
npm install
```

### Running local dev environment

```bash
npm run dev
```

### Preview prod

Previews the compilated app. Remember to build before preview to see latest changes or if first time running preview.

```bash
npm run preview
```

## Tests

### Run tests

```bash
npm run test
```

There's also a ui for the tests.

```bash
npm run test-ui
```

### Build

The build is going to delete any existing dist folder and then compile new one files in a new dist folder.

```bash
npm run build
```

## Docker

When deploying to docker, it will simulate a production environment and deploy the compiled files in the dist folders to make the app as small as possible.

### Deploy (detached mode)

```bash
docker compose up -d
```

### Update

Remember to undeploy before building the new image.

```bash
docker compose build
```

### Undeploy

```bash
docker compose down
```
