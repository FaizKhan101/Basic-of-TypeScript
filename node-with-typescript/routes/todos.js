"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(200).json({ message: "Add todo successfully." });
});
router.put("/todo/:todoId", (req, res, next) => {
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: "Updated todo succesfully." });
    }
    res.status(404).json({ message: "Could not find todo with given id." });
});
router.delete("/todo/:todoId", (req, res, next) => {
    const todoId = req.params.todoId;
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    todos = updatedTodos;
    res.status(200).json({ message: "Delete todo successfully." });
});
exports.default = router;
