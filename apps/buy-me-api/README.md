This is an API to add, remove and get items from my 'TO-BUY' list.

Stack:

- NodeJS
- ExpressJS 4.18
- MySQL
- Typescript
- Nodemon to watch for changes

Project Init

- yarn
- yarn add express --filter buy-me-api
- yarn add typescript @types/express @types/node --dev
- yarn add concurrently nodemon -D

NOTES:

- use type: module in package.json to be able to use ES6 with nodeJs
- use module: esnext in tsconfig to match with the package.json type
- set outDir: './dist' in the tsconfig file

Docs:
Create an Express server with TypeScrip
[https://blog.logrocket.com/how-to-set-up-node-typescript-express/](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)
