Objective=The objective of this service is to search for flights.The project is micro-service based architecture and this is search service.

## Folder

src-
controllers
repository
models
routes
middleware
utils
services
migrations.

## Folder use case

Controller-For http request and send request to service layer
service-it hold the business logic and connects to repository layer
repository-it connects with the databse
models-database blueprint

## Project setup

clone the project and run npm init-it will bring all the required dependencies.
create your own .env file

run npx sequelize init inside src
it will provide you with config,seeders,migrations,models folder.

## Database setup

go to config>config.json>development>database(enter your database name you want to create)>password(enter your mysql password)

inside src run npx sequelize db:create
it will create database for you

## To create model

npx sequelize model:generate -- name <model name> --attributes <fields you want in your model>

npx sequelize db:migrate <creates table/model inside database> run inside src
