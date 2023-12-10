
const express = require('express');
import path from 'path';
import dotenv from 'dotenv';
import { connectionDb } from './src/db connection/connection';
import router from './src/routes/router';
import { swaggerDocs as v1swaggerDocs } from './src/routes/swagger';

dotenv.config();
connectionDb();

const app = express();

app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

  const server = app.listen(app.get('port'), () => {
    v1swaggerDocs(app, app.get('port'));
    console.log('Funciona en puerto: ', app.get('port'));
});