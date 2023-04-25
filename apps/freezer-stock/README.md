# WIP

## To run locally
- cd to the home-dashboard folder
- run `pnpm install`
- run `pnpm run dev --filter freezer-stock`

## Endpoints

GET - api/products/[name] - Get product data with the units that are going to expire sooner.
POST - api/products/[name] - Add/Update product and its instances.
GET - api/products/instances - Get all the products with all their instances.
GET - api/products/instances/[name] - Get all the instances for a specific product.
PUT - api/products/instances/[name] - Update instace units when they get removed from the freezer <--- TODO: client functionality that uses this endpoint has not been written yet.

## Stack
Backend
This projects uses NextJS APIs as backend with Prisma as ORM.
It consumes a MySQL db that is hosted on Google Cloud.


