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

Endpoints
LISTS

- Create new 'TO-BUY' list: name, description, category, creation date, status
- Update 'TO-BUY' list: name, description, category.
- Change 'TO-BUY' list status
- Delete 'TO-BUY' list
- Show lists by categories
- Show all the lists

ITEMS

- Add items to 'TO-BUY' list: item name, status
- Update item name
- Change item status
- Remove item from list
- Show items in a list

CATEGORIES

- Add category name
- Update category name
- Remove category name
- Show categories

Docs:
Create an Express server with TypeScrip
[https://blog.logrocket.com/how-to-set-up-node-typescript-express/](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)
