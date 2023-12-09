const mongo = require('mongoose');
require('dotenv').config();

const connectionDb = async () => {
    try {
        await mongo.connect(process.env.DATABASE_URL, {
        });
        console.log('conected to db mongo');
    } catch (error) {
        console.log(error);
        throw new Error('error to connect to db');
    }
}

module.exports = {
    connectionDb
}