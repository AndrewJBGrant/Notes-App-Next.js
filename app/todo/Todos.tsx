"use client";
import DeleteTodo from "./DeleteTodo";

import data from "../data.json";

export type TodoProps = {
  id: string | number;
  content: string;
  // author: {
  //   name: string | null;
  // } | null;
};

 const Todo: React.FC<{ todo: TodoProps }> = ({ todo }) => {
  return (
    <>
      <ul className="py-4 w-full">
        <li className="flex items-center justify-between w-full m-2 text-lg group/item hover:bg-slate-400">
          <span className="border border-red-400 p-2">{todo.content}</span>
          <span className="border border-orange-700 group/edit invisible hover:bg-slate-200 group-hover/item:visible group-hover/edit:translate-x-0.5">
            <DeleteTodo todoId={todo.id} />
          </span>
        </li>
      </ul>
    </>
  );
};

export default Todo;
