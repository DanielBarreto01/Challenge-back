# Challenge-back
Technical test from the company DRENVÍO as part of the technical interview, developing an API with Node js, mongose for the Mongo db database, Swggaer for endPoint documentation, Cypress for e2e tests, developed in TypeScrip.

## Installation

1. Clone this repo.

git clone https://github.com/DanielBarreto01/Challenge-back.git

2. install project module dependency

npm i

## Project_execution

The environment variables are already configured, you can proceed to execution

1.Execution project

npm run dev

2.Execution test

cypress uses a browser to observe the tests by default it uses CHROME if you do not have it installed go to the package.json file and in the 'test' script change it from chrome to the browser you use

Open in you the browser http://localhost:5000

npm test

## EndPoints

1. /products  :returns the products that are in stock and has more than 1 product available
2. /price/:user_id/:product_brand  :returns the products that have a special price and are within the sneaker brands that have a discount for the specific customer or user, in case of conratio returns the products of the specific brand with the base price
3. api-docs  :returns the swagger documentation of the respective API endpoints

## Deploy




