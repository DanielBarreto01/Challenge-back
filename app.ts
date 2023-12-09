import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { connectionDb } from './src/db connection/connection';
import router from './src/routes/router';

dotenv.config();
connectionDb();

const app = express();

app.use(express.json());

// Habilita los cors
app.set('port', process.env.PORT);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

const server = app.listen(app.get('port'), () => {
    console.log('Funciona en puerto: ', app.get('port'));
});
