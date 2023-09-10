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
    <div className="flex flex-col justify-center p-8">
      <h1>Keep track of your todos here</h1>
      <NewTodo onAddTodo={addTodoHandler} />
     <div className="border-solidd border-2 border-green-400 "><Todos items={todos} onDeleteTodo={deleteTodoHandler} /> </div>
    </div>
  );
};

export default FinalTodo;
