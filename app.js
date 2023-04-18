const express = require('express');

const db = require('./data/database');

const todoRoutes = require('./routes/todos.routes');

const app = express();

app.use(express.json());

app.use('/todos', todoRoutes);

app.use((error, req, res, next) => {
    res.status(500).json({
        message: 'Something went wrong!'
    });
})

db.initDb().then(() => {
    app.listen(3000);
}).catch((error) => {
    console.log('connecting to the database failed!');
}) 
