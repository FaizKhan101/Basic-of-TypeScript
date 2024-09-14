import { Router } from "express";

import { Todo } from "../models/todo";

const router = Router();

let todos: Todo[] = [];

type RequestBody = { text: string };
type RequestParams = { todoId: string };

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };

  todos.push(newTodo);

  res.status(200).json({ message: "Add todo successfully." });
});

router.put("/todo/:todoId", (req, res, next) => {
  const body = req.body as RequestBody;
  const params = req.params as RequestParams;
  const todoId = params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
    return res.status(200).json({ message: "Updated todo succesfully." });
  }
  res.status(404).json({ message: "Could not find todo with given id." });
});

router.delete("/todo/:todoId", (req, res, next) => {
  const params = req.params as RequestParams;
  const todoId = params.todoId;

  const updatedTodos = todos.filter((todo) => todo.id !== todoId);
  todos = updatedTodos;
  res.status(200).json({ message: "Delete todo successfully." });
});

export default router;
