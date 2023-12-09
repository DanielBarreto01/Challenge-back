const express = require('express');
const path = require('path');
require('dotenv').config();
const { connectionDb } = require('./src/db connection/connection');
const router = require('./src/routes/index');

connectionDb();
const app = express();

app.use(express.json());

// habilita los cors
app.set('port', process.env.PORT);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',router);

const server = app.listen(app.get('port'), () => {
    console.log('Funciona en puerto: ', app.get('port'));
});