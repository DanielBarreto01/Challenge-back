# Challenge-back

This repository is a response to a technical test from DRENVÍO, part of the technical interview process. It involves the development of an API using Node.js, MongoDB with Mongoose, Swagger for endpoint documentation, and Cypress for end-to-end tests, all implemented in TypeScript.

## Installation

1. Clone this repository.

    ```bash
    git clone https://github.com/DanielBarreto01/Challenge-back.git
    ```

2. Install project dependencies.

    ```bash
    npm i
    ```

## Project Execution

The environment variables are already configured; you can proceed with the execution.

1. **Execute the project:**

    ```bash
    npm run dev
    ```

2. **Execute tests:**

    Cypress uses a browser to observe the tests; by default, it uses CHROME. If you don't have it installed, go to the `package.json` file and, in the 'test' script, change it from `chrome` to the browser you use. Open [http://localhost:5000](http://localhost:5000) in your browser.

    ```bash
    npm test
    ```

## Endpoints

1. **/products:** Returns products that are in stock and have more than 1 item available.
2. **/price/:user_id/:product_brand:** Returns products with special prices within sneaker brands that offer discounts to the specific customer or user. If no discount is applicable, it returns products of the specific brand with the base price.
3. **/clients:** Returns clients.
4. **/api-docs:** Returns the Swagger documentation of the respective API endpoints.

## Deployment

The deployment is done on [railway.com](https://challenge-back-production.up.railway.app).

## Deployed Endpoints with Examples

- [Products](https://challenge-back-production.up.railway.app/products)
- [Price](https://challenge-back-production.up.railway.app/price/6574e80fad7cc19ee4798502/Puma)
- [Clients](https://challenge-back-production.up.railway.app/clients)

## Swagger Documentation

Access the Swagger documentation [here](https://challenge-back-production.up.railway.app/api-docs/).

## Use Cases Tests

1. **Customers without brands and without discounts:**

    - User ID: 6574e80fad7cc19ee4798502
    - Brand: Puma

    **Result:**

    ```json
    {
        "products": [
            {
                "name": "Puma - Air Force",
                "price": 171
            },
            {
                "name": "Puma - Zoom",
                "price": 127
            }
        ]
    }
    ```

2. **Customers with discount brands:**

    - User ID: 6574e80fbbd60825accb7019
    - Brand: Adidas

    **Result:**

    ```json
    {
        "products": [
            {
                "name": "Air Force",
                "Brand": "Adidas",
                "special_price": 114
            }
        ]
    }
    ```











