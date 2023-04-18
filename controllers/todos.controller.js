const Todo = require("../model/todo.models");


getAllTodos = async (req, res, next) => {
    let todos;
    try {
        todos = await Todo.getAllTodos();
    } catch (error) {
        return next(error);
    }

    res.json({ todos });
}

addTodo = async (req, res, next) => {
    const todoText = req.body.text;

    const todo = new Todo(todoText);

    let insertedId;
    try {
        const result = todo.save();
        insertedId = result.insertedId;
    } catch (error) {
        return next(error);
    }

    todo.id = insertedId.toString();

    res.json({ message: 'Added todo successfully!', createdTodo: todo });
}

updateTodos = (req, res, next) => { }

deleteTodos = (req, res, next) => { }

module.exports = {
    getAllTodos,
    addTodo
}