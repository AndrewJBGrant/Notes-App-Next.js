"use client";
import Todos from "./Todos";
import createTodo, { Todo } from "../models/todo";
import NewTodo from "./NewTodo";

import { useState } from "react";

const FinalTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = createTodo(todoText);

    setTodos((prevTodos) => {
return prevTodos.concat(newTodo)
    });
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  };

  return (
    <div>
      <h1>all my todos gonna come from here</h1>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default FinalTodo;
