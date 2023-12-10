"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = void 0;
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// Metadata info about our API
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'DrEnvioChallenge API',
            version: '1.0.0',
            description: 'API using Express for a sneakers store',
        },
    },
    apis: ['src/routes/router.ts'],
};
// Docs in format JSON
const swaggerSpec = swaggerJsDoc(swaggerOptions);
// Function to set up our docs
const swaggerDocs = (app, port) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    console.log(`Swagger docs running on http://localhost:${port}/api-docs`);
};
exports.swaggerDocs = swaggerDocs;
