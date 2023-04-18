const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

initDb = async () => {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
    database = client.db('second-api');
}

getDb = () => {
    if (!database) {
        throw new Error('Database not connected!');
    }

    return database;
}

module.exports = {
    initDb,
    getDb
}