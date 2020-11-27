# SimpleUI

A simple UI to demonstrate events received by [BEARS](https://github.com/DanielMuller/bears)

## Dependencies
[Quasar](https://quasar.dev/)

```
npm -g i @quasar/cli
```

## Start the app in development mode (hot-code reloading, error reporting, etc.)
API domain is loaded with the environment variable BEARS.

```bash
BEARS=<api-id>.execute-api.<region>.amazonaws.com quasar dev
```

## Build the app for production
```bash
BEARS=<api-id>.execute-api.<region>.amazonaws.comquasar build
```
